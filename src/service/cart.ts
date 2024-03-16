export type CartProduct = {
    id: string,
    name: string,
    desc: string,
    price: number,
    img: string,
    amount: number,
}

export type CartProducts = CartProduct[];


export const getTotalPrice = (productsList: CartProducts) => {
    let totalPrice = 0;

    for (const key in productsList) {
        totalPrice += productsList[key]?.amount * productsList[key]?.price;
    }

    return {
        totalPrice,
    }
}