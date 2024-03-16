import {create} from "zustand";
import {CartProduct, CartProducts} from "../service/cart";

type CartState = {
    cartProducts: any,
    setCartProducts: (items: CartProducts) => void,
    removeCartProduct: (product: CartProduct) => void,
    increaseCartProduct: (product: CartProduct ) => void,
    decreaseCartProduct: (product: CartProduct ) => void,
}

export const useCart = create<CartState>()(set => ({
    cartProducts: [],
    setCartProducts: (items) => set((state) => {
        return {cartProducts: items}
    }),
    removeCartProduct: (product) => set(state => {
        const cartList = [...state.cartProducts];
        let updatedProducts = cartList.filter(item => {
            return item.name !== product.name
        })
        return { cartProducts: updatedProducts };
    }),
    increaseCartProduct: (product) => set((state) => {
        return {
            cartProducts: [...state.cartProducts].map((item: any) => {
                if (item.name === product.name && product.amount > 0 && product.amount < 10) {
                    return { ...item, amount: product.amount + 1 }
                }
                return item;
            })
        }
    }),
    decreaseCartProduct: (product) => set((state) => {
        return {
            cartProducts: [...state.cartProducts].map((item: any) => {
                if (item.name === product.name && product.amount > 1) {
                    return { ...item, amount: product.amount - 1 }
                }
                return item;
            })
        }
    }),

}))