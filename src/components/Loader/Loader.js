import { jsx as _jsx } from "react/jsx-runtime";
import "./loader.modules.css";
import { Oval } from "react-loader-spinner";
const Loader = () => {
    return (_jsx("div", { className: "loader", children: _jsx(Oval, { color: "#40e0d0", height: 30, width: 30 }) }));
};
export default Loader;
