export type Product = {
    id: string;
    name: string;
    price: Price;
    description?: string;
    images: Image[];
    quantity?: number;
    brand: string;
};

export type Price = {
    sellingPrice?: number;
    listPrice?: number;
    discount?: number;
}

export type Image = {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
    thumbnailUrl?: string;
}