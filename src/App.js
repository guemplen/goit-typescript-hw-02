import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
const API_KEY = 'i79wZxp6XeDqBJoSVG43E0ZrrEunh8r0xLZUxGJKI0M';
const API_URL = `https://api.unsplash.com/search/photos`;
export const App = () => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const fetchImages = async (searchQuery, page) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(API_URL, {
                params: { query: searchQuery, page, per_page: 12, client_id: API_KEY },
            });
            const results = response.data.results;
            setImages(prevImages => page === 1 ? results : [...prevImages, ...results]);
        }
        catch (err) {
            setError('Failed to fetch images. Please try again.');
        }
        finally {
            setLoading(false);
        }
    };
    const handleSearchSubmit = (searchQuery) => {
        if (searchQuery.trim() === '') {
            toast.error('Please enter a search term.');
            return;
        }
        setQuery(searchQuery);
        setPage(1);
        fetchImages(searchQuery, 1);
    };
    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchImages(query, nextPage);
    };
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };
    const closeModal = () => {
        setSelectedImage(null);
    };
    return (_jsxs("div", { children: [_jsx(Toaster, {}), _jsx(SearchBar, { onSubmit: handleSearchSubmit }), error && _jsx(ErrorMessage, { message: error }), _jsx(ImageGallery, { images: images, onImageClick: handleImageClick }), loading && _jsx(Loader, {}), images.length > 0 && !loading && (_jsx(LoadMoreBtn, { onClick: handleLoadMore })), selectedImage && (_jsx(ImageModal, { image: selectedImage, onClose: closeModal }))] }));
};
export default App;
