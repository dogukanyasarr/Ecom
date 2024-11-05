import { create } from "zustand"
import MMKVStorage from "react-native-mmkv-storage"
import { ProductModel } from "../types/productModel"

const MMKV = new MMKVStorage.Loader().initialize();

interface CartState {
    cart: ProductModel[];
    addToCart: (product: ProductModel) => void;
    removeFromCart: (productId: number) => void;
    loadCart: () => void;
}

const UserCartStore = create<CartState>((set) => ({
    cart: [],
    loadCart: async () => {
        const storedCart = await MMKV.getArrayAsync<ProductModel>("cart");
        if (storedCart) {
            set({ cart: storedCart });
        }
    },
    addToCart: async (product: ProductModel) => {       
        set((state) => {
            const updatedCart = [...state.cart, product];
            MMKV.setArrayAsync("cart", updatedCart);
            return { cart: updatedCart };
        });
    },
    removeFromCart: async (productId: number) => {
        set((state) => {
            const updatedCart = state.cart.filter((p) => p.id !== productId);
            MMKV.setArrayAsync("cart", updatedCart);
            return {
                cart: updatedCart
            };
        })
    }
}))

export default UserCartStore