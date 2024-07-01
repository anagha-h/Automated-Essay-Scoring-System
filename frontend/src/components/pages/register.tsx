import { Button } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-auth-form";
import { Workflow } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    return (
        <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            <Button
                variant={"ghost"}
                className="absolute right-4 top-4 md:right-8 md:top-8"
                onClick={() => navigate("/login")}
            >
                Login
            </Button>
            <div className="hidden h-full bg-muted lg:block" />
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <Workflow className="mx-auto h-6 w-6" />
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create an account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to create your account
                        </p>
                    </div>
                    <UserAuthForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Button
                            variant={"link"}
                            className="hover:text-brand underline underline-offset-4"
                            onClick={() => navigate("/terms")}
                        >
                            Terms of Service
                        </Button>{" "}
                        and{" "}
                        <Button
                            variant={"link"}
                            className="hover:text-brand underline underline-offset-4"
                            onClick={() => navigate("/privacy")}
                        >
                            Privacy Policy
                        </Button>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
