import { useCart } from "../../store/cart-store";
import Button from "../Layout/Button";
import CartItems from "./CartItems";
import CartItemsOver from "./CartItemsOver";

const Cart = () => {
    const { cartProducts } = useCart();
    return (
        <div className="flex flex-col rounded-[1.25rem] bg-[#FFFFFF] px-[1.875rem] py-10">
            <h1 className="text-4xl font-semibold">Корзина</h1>
            {
                cartProducts.length > 0 ?
                    <CartItems /> :
                    <CartItemsOver />
            }
        </div>
    );
}

export default Cart;