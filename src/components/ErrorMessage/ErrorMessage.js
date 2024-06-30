import { jsx as _jsx } from "react/jsx-runtime";
const ErrorMessage = ({ message }) => {
    return _jsx("div", { className: "error-message", children: message });
};
export default ErrorMessage;
