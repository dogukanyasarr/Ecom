export type HomePageComponentPropsType = {
    id: number;
    images: string[];
    name: string;
    description: string;
    detail: string;
    price: number;
    onPress: ()=> void;
    favOnPress: () => void;
    isFavorite: boolean;

}