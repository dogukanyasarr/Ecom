import { create } from "zustand";
import { ProductModel } from "../types/productModel";

const baseUrl = 'https://api.escuelajs.co/api/v1/products?limit=1';

interface DataState {
    data: ProductModel[];
    filteredProduct: ProductModel[];
    filteredProductPrice: ProductModel[];
    isLoading: boolean;
    fetchData: () => Promise<void>;
    filterByTitle: (searchTerm: string) => void;
    filterByPrice: (minPrice: number, maxPrice: number) => void;
    resetFilteredProductPrice: () => void;

}

const UseDataStore = create<DataState>((set, get) => ({
    data: [],
    filteredProduct: [],
    filteredProductPrice: [],
    isLoading: true,
    fetchData: async () => {
        set({isLoading: true})
        try {
            const response = await fetch(baseUrl);
            const json = await response.json();

            set({ data: json, isLoading: false });
        } catch (error) {
            console.error(error);
            set({ isLoading: false });

        }

    },
    filterByTitle: async (searchTerm: string) => { 
        const filterUrl = `https://api.escuelajs.co/api/v1/products/?title=${searchTerm}`;
        try {
            const response = await fetch(filterUrl);

            if(!response.ok){
                throw new Error("Veri Bulunamadı.")
            }

            const data = await response.json();

            set({ filteredProduct: data });
            
        } catch (error) {
            
        }
       

    },
    filterByPrice: async (minPrice: number, maxPrice: number) => {
        const filterUrl = `https://api.escuelajs.co/api/v1/products/?price_min=${minPrice}&price_max=${maxPrice}`;
        try {
            const response = await fetch(filterUrl);
            
            if(!response.ok){
                throw new Error("Veri bulunamadı");
            }

            const data = await response.json();
            set({ filteredProductPrice : data})
        } catch (error) {
            
        }
    },
    resetFilteredProductPrice: () => set({filteredProductPrice:[]})

}))

export default UseDataStore;