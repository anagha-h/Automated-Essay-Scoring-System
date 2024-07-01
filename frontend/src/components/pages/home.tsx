import toast from "react-hot-toast";
import Header from "../header";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
// import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [essay, setEssay] = useState("");
    const [score, setScore] = useState(0);
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const getRandomSentences = (paragraph: string) => {
        const sentences = paragraph.split(/(?<=[.!?])\s+/);

        for (let i = sentences.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sentences[i], sentences[j]] = [sentences[j], sentences[i]];
        }
        const selectedSentences = sentences.slice(
            0,
            Math.min(sentences.length, 3)
        );

        return selectedSentences;
    };

    // const divideSentence = (sentence: string) => {
    //     const words = sentence.split(/\s+/);

    //     const randomIndex1 =
    //         Math.floor((Math.random() * (words.length - 1)) / 2) + 1;
    //     const randomIndex2 =
    //         Math.floor(Math.random() * (words.length - randomIndex1)) +
    //         randomIndex1;

    //     const part1 = words.slice(0, randomIndex1).join(" ");
    //     const part2 = words.slice(randomIndex1, randomIndex2).join(" ");
    //     const part3 = words.slice(randomIndex2).join(" ");

    //     return [part1, part2, part3];
    // };

    const onSubmit = () => {
        toast.promise(
            new Promise((resolve) => {
                setTimeout(async () => {
                    const response = await fetch("http://localhost:5000/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ text: essay }),
                    });
                    const data = await response.json();
                    setScore(data.score ?? 0);
                    console.log(data);
                    setSuggestions(getRandomSentences(essay));
                    resolve("Success");
                }, 1500);
            }),
            // async () => {
            //     const response = await openai.chat.completions.create({
            //         model: "gpt-3.5-turbo",
            //         messages: [
            //             {
            //             "role": "system",
            //             "content": "You will be provided with statements, and your task is to convert them to standard English."
            //             },
            //             {
            //             "role": "user",
            //             "content": "She no went to the market."
            //             }
            //         ],
            //         temperature: 0.7,
            //         max_tokens: 64,
            //         top_p: 1,
            //         });
            // },
            {
                loading: "Calculating",
                success: "Done",
                error: "Something went wrong",
            }
        );
    };

    return (
        <div className="min-h-screen flex flex-col relative">
            <Button
                className="fixed bottom-8 right-12"
                onClick={() => navigate("/feedback")}
            >
                Give feedback
            </Button>
            <Header />
            <div className="flex-1 container flex flex-col items-center gap-4 p-8">
                <Textarea
                    className="h-96"
                    placeholder="Enter your essay..."
                    value={essay}
                    onChange={(e) => setEssay(e.target.value)}
                />
                <Button className="w-min" onClick={onSubmit}>
                    Calculate score
                </Button>
                {suggestions.length !== 0 && (
                    <div className="flex items-center gap-4 font-semibold border rounded-md p-4 bg-white shadow-sm m-3">
                        <span className="text-lg">Your essay score is: </span>
                        <span className="text-4xl">{score}</span>
                    </div>
                )}

                {/* {suggestions.length !== 0 && (
                    <div className="flex flex-col gap-4 self-start w-full">
                        <h3 className="font-semibold text-lg">Suggestions</h3>

                        {suggestions.map((suggestion) => (
                            <div
                                key={suggestion}
                                className="border rounded-md p-4 bg-white shadow-sm"
                            >
                                {divideSentence(suggestion).map(
                                    (part, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className={cn("font-normal", {
                                                    "text-green-500 font-medium":
                                                        index === 1,
                                                })}
                                            >
                                                {part}{" "}
                                            </span>
                                        );
                                    }
                                )}
                            </div>
                        ))}
                    </div>
                )} */}
            </div>
        </div>
    );
}
