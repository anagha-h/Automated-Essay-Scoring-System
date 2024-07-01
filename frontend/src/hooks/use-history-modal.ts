import { HistoryData } from "@/components/pages/history";
import { create } from "zustand";

interface HistoryModalStore {
    isOpen: boolean;
    data?: HistoryData;
    onOpen: (data: HistoryData) => void;
    onClose: () => void;
}

const useHistoryModal = create<HistoryModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: HistoryData) => set({ data, isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useHistoryModal;
