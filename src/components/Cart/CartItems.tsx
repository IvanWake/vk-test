import CartItem from "./CartItem";
import { useCart } from "../../store/cart-store";

const CartItems = () => {
    const { cartProducts } = useCart();
    return (
        <div className="flex flex-col space-y-5 mt-10">
            {
                cartProducts?.map((item: any) => (
                    <CartItem
                        id={item.id}
                        amount={item.amount}
                        name={item.name}
                        desc={item.desc}
                        price={item.price}
                        img={item.image}
                    />
                ))
            }
        </div>
    );
}

export default CartItems;