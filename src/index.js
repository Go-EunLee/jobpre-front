import React from "react";
import ReactDOM from "react-dom/client"; // createRoot를 가져옴
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot로 루트 DOM 노드를 생성
root.render(<App />); // App 컴포넌트를 렌더링
