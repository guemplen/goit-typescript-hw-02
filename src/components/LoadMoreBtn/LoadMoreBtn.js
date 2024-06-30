import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./loadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => {
    return (_jsx("button", { className: styles.loadMoreBtn, onClick: onClick, children: "Load more" }));
};
export default LoadMoreBtn;
