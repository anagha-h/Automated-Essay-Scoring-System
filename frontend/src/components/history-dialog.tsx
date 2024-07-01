import useHistoryModal from "@/hooks/use-history-modal";
import { Dialog, DialogContent } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

const HistoryDialog = () => {
    const historyModal = useHistoryModal();

    return (
        <Dialog
            open={historyModal.isOpen}
            onOpenChange={(open) => {
                if (!open) historyModal.onClose();
            }}
        >
            <DialogContent className="p-4">
                <div>
                    <h1 className="font-bold text-xl py-2 px-4">
                        Score: {historyModal.data?.score}
                    </h1>
                    <ScrollArea className="h-96 px-4 py-8">
                        {historyModal.data?.text}
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default HistoryDialog;
