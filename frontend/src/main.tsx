import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Background } from "./components/ui/background.tsx";
import HistoryDialog from "./components/history-dialog.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Toaster />
        <HistoryDialog />
        <Background />
        <App />
    </BrowserRouter>
);
