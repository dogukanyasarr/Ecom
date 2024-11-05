import { create } from "zustand";
import MMKVStorage from "react-native-mmkv-storage";
import { ProductModel } from "../types/productModel";

const MMKV = new MMKVStorage.Loader().initialize();

interface FavState {
    fav: ProductModel[];
    addToFav: (product: ProductModel) => void;
    removeFromFav: (productId: number) => void;
    loadFav: () => void;
}

const UseFavStore = create<FavState>((set) => ({
    fav: [],
    loadFav: async () => {
        const storedfav = await MMKV.getArrayAsync<ProductModel>("fav");
        if (storedfav) {
            set({ fav: storedfav });
        }
    },
    addToFav: async (product: ProductModel) => {
        const exitInList =  await MMKV.getArrayAsync<ProductModel>("fav")
        set((state) => {
            
            const updatedfav = [...(exitInList ?? []), product];
            MMKV.setArrayAsync("fav", updatedfav);
            return { fav: updatedfav };
        });
    },
    removeFromFav: async (productId: number) => {
        set((state) => {
            const updatedFav = state.fav.filter((p) => p.id !== productId);
            MMKV.setArrayAsync("fav", updatedFav);
            return {
                fav: updatedFav
            };
        })
    }
}))

export default UseFavStore