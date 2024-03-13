import productImage from "@/public/olive-bottle.jpg";

const useProducts = () => {
    const products = [
        {
            id: 1,
            image: productImage,
            title: "Product 1",
            price: 20.99,
        },
        {
            id: 2,
            image: productImage,
            title: "Product 2",
            price: 30.49,
        },
        {
            id: 3,
            image: productImage,
            title: "Product 4",
            price: 25.99,
        },
        {
            id: 4,
            image: productImage,
            title: "Product 5",
            price: 25.99,
        },
        {
            id: 5,
            image: productImage,
            title: "Product 3",
            price: 25.99,
        },
        {
            id: 6,
            image: productImage,
            title: "Product 6",
            price: 25.99,
        },
        {
            id: 7,
            image: productImage,
            title: "Product 7",
            price: 25.99,
        },
    ];

    return products;
}

export default useProducts;
