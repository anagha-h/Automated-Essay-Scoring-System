import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Github, Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function UserAuthForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = () => {
        setIsLoading(true);
        localStorage.setItem("fyp-user", "logged in");
        toast.success("Welcome back!");
        navigate("/");

        setIsLoading(false);

        // if (error) {
        //     console.log(error);
        //     return toast({
        //         title: "Something went wrong.",
        //         description: "Your sign in request failed. Please try again.",
        //         variant: "destructive",
        //     });
        // }
    };

    return (
        <div className="grid gap-6">
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-4">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                        <Label className="sr-only" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            placeholder="********"
                            type="password"
                            disabled={isLoading}
                        />
                    </div>
                    <button
                        className={cn(buttonVariants())}
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In
                    </button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <button
                type="button"
                className={cn(buttonVariants({ variant: "outline" }))}
                disabled={isLoading}
            >
                <Github className="mr-2 h-4 w-4" /> Github
            </button>
        </div>
    );
}
