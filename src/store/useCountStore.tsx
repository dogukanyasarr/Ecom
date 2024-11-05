import { create } from "zustand"

interface CountStore {
    itemCounts: { [key: number]:  number };
    setItemCount: (key: number, value: number) => void;
    
}

const UseCountStore = create<CountStore>((set) => ({
    itemCounts: {},
    setItemCount: (key, value) => 
        set((state) => ({
            itemCounts: {
                ...state.itemCounts,
                [key]: value,
            }
        }))
}))

export default UseCountStore