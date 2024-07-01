import { Button } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-auth-form";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Workflow } from "lucide-react";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Button
                variant={"ghost"}
                className="absolute left-4 top-4 md:left-8 md:top-8"
                onClick={() => navigate("/")}
            >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
            </Button>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <Workflow className="mx-auto h-6 w-6" />
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Welcome back
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email to sign in to your account
                    </p>
                </div>
                <UserAuthForm />
                <p className="px-8 text-center text-sm text-muted-foreground">
                    <Button
                        variant={"link"}
                        className="hover:text-brand underline underline-offset-4"
                        onClick={() => navigate("/register")}
                    >
                        Don&apos;t have an account? Sign Up
                    </Button>
                </p>
            </div>
        </div>
    );
}
