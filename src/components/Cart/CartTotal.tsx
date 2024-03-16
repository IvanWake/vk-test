import { useEffect, useState } from "react";
import { getTotalPrice } from "../../service/cart";
import { useCart } from "../../store/cart-store";
import Button from "../Layout/Button";

const CartTotal = () => {
    const [totalPrice, setTotalPrice] = useState<number | undefined>(0);
    const { cartProducts } = useCart();

    useEffect(() => {
        setTotalPrice(Number(getTotalPrice(cartProducts).totalPrice.toFixed(2)));
    }, [cartProducts])

    return (
        <div className="flex flex-col bg-[#FFFFFF] p-5 rounded-[1.25rem] space-y-8 disabled:opacity-0">
            <div className="flex justify-between">
                <h1 className="text-4xl font-semibold">Итого</h1>
                <h1 className="text-4xl font-bold">{totalPrice}$</h1>
            </div>
            <Button content="Перейти к оплате" disabled={totalPrice === undefined || totalPrice <= 0}/>
        </div>
    );
}

export default CartTotal;