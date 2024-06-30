import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./searchBar.module.css";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
    };
    return (_jsx("header", { className: styles.searchHeader, children: _jsxs("form", { className: styles.searchForm, onSubmit: handleFormSubmit, children: [_jsx("button", { type: "submit", className: styles.searchButton, children: _jsx(FaSearch, {}) }), _jsx("input", { type: "text", autoComplete: "off", autoFocus: true, placeholder: "Search images and photos", value: inputValue, onChange: handleInputChange })] }) }));
};
export default SearchBar;
