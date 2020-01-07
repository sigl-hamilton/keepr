const PROTOCOL = "http";
const DOMAIN = "localhost";
const PORT = "4000";
const BASE_PATH = null;

export default function axiosURL(path) {
    console.log((PROTOCOL ? PROTOCOL + "://" : "") +
        DOMAIN +
        (PORT ? ":" + PORT : "") +
        (BASE_PATH ? "/" + BASE_PATH : "") +
        (path ? (path[0] === "/" ? path : "/" + path) : ""));
    return (PROTOCOL ? PROTOCOL + "://" : "") +
        DOMAIN +
        (PORT ? ":" + PORT : "") +
        (BASE_PATH ? "/" + BASE_PATH : "") +
        (path ? (path[0] === "/" ? path : "/" + path) : "");
}