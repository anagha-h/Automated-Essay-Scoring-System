import { useState } from "react";
import Header from "../header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FeedbackPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [feedback, setFeedback] = useState("");

    const onSubmit = () => {
        toast.promise(
            new Promise((resolve) => {
                setTimeout(async () => {
                    await fetch("http://localhost:5000/feedback", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ name, phone, email, feedback }),
                    });
                    navigate("/");
                    resolve("Feedback sent!");
                }, 1500);
            }),
            {
                loading: "Sending feedback",
                success: "Feedback sent!",
                error: "Something went wrong",
            }
        );
    };

    return (
        <div className="min-h-screen flex flex-col relative">
            <Header />
            <div className="container">
                <div className="container">
                    <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0">
                        Give feedback
                    </h2>
                    <h6 className="scroll-m-20 text-md font-semibold tracking-tight">
                        Any suggestions, complaints or anything
                    </h6>
                </div>
                <div className="container grid grid-cols-2 gap-4 py-12">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="Phone">Phone</Label>
                        <Input
                            id="Phone"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="Name">Name</Label>
                        <Input
                            id="Name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="Feedback">Feedback</Label>
                        <Textarea
                            id="Feedback"
                            placeholder="Feedback"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                    </div>
                    <Button className="max-w-min" onClick={onSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;
