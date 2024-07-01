import { Workflow } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const onAuth = () => {
        if (localStorage.getItem("fyp-user")) {
            localStorage.removeItem("fyp-user");
        }

        navigate("/login");
    };

    return (
        <header className="container h-24 flex justify-between items-center">
            <div
                className="flex items-center gap-x-3 cursor-pointer"
                onClick={() => navigate("/")}
            >
                <Workflow className="h-6 w-6" />
                <h1 className="font-bold text-xl">
                    Automated Essay Grading System.
                </h1>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    variant={"outline"}
                    onClick={() => navigate("/history")}
                >
                    History
                </Button>
                <Button onClick={onAuth}>
                    {localStorage.getItem("fyp-user") ? "Log out" : "Log in"}
                </Button>
            </div>
        </header>
    );
};

export default Header;
