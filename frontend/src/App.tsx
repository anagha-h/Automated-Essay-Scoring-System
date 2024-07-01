import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/layouts/auth-layout";
import LoginPage from "./components/pages/login";
import RegisterPage from "./components/pages/register";
import HomePage from "./components/pages/home";
import FeedbackPage from "./components/pages/feedback";
import HistoryPage from "./components/pages/history";

const App = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/login/*" element={<LoginPage />} />
                <Route path="/register/*" element={<RegisterPage />} />
            </Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/history" element={<HistoryPage />} />
        </Routes>
    );
};

export default App;
