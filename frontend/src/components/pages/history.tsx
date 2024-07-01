import { useEffect, useState } from "react";
import Header from "../header";
import useHistoryModal from "@/hooks/use-history-modal";

export interface HistoryData {
    text: string;
    score: string;
}

const HistoryPage = () => {
    const [history, setHistory] = useState<HistoryData[]>();
    const historyModal = useHistoryModal();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5000/history", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setHistory(data.history);
        };
        fetchData();
    }, []);

    console.log(history);

    return (
        <div className="min-h-screen flex flex-col relative">
            <Header />
            <div className="container py-5">
                <div className="container">
                    <h1 className="font-bold text-xl">History</h1>
                    <hr className="my-2" />
                    <div className="w-full flex flex-col gap-4 py-4">
                        {history?.map((h) =>
                            h.score ? (
                                <div
                                    className="bg-white rounded-md flex justify-between gap-16 items-center p-4 border shadow-md cursor-pointer"
                                    onClick={() => historyModal.onOpen(h)}
                                    key={h.text}
                                >
                                    <p className="truncate">{h.text}</p>

                                    <p className="font-bold text-lg px-4 border">
                                        {h.score}
                                    </p>
                                </div>
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryPage;
