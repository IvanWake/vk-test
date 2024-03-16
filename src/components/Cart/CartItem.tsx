import trash from '../../img/trash.svg';
import {useCart} from "../../store/cart-store";

type Props = {
    id: string,
    name: string,
    desc: string,
    price: number,
    img: string,
    amount: number,
}


const CartItem = ({ id, img, amount, price, name, desc }: Props) => {
    const { removeCartProduct, increaseCartProduct, decreaseCartProduct } = useCart();
    const productData = { id, name, desc, price, img, amount };

    const increaseHandler = () => increaseCartProduct(productData);
    const decreaseHandler = () => decreaseCartProduct(productData);

    const deleteProductHandler = () => removeCartProduct(productData);

    return (
        <div className="flex shadow-product rounded-[1.2rem] justify-center items-center">
            <img src={img} className="rounded-[10px] m-[10px]" alt="product" width="110"/>
            <div className="flex flex-col">
                <h1 className="text-[1.25rem] font-semibold">{name}</h1>
                <p className="text-[#A5A5A5] w-96">{desc}</p>
            </div>
            <div className="flex items-center space-x-2 bg-[#EFEFEF] rounded-l-[1rem] rounded-r-[1rem] mx-8">
                <button
                    className="text-center px-2 py-2 bg-[#50A1FF] text-white rounded-l-[1rem] text-bold text-xl"
                    onClick={decreaseHandler}
                >
                    -
                </button>
                <div className="font-medium">{amount} шт</div>
                <button
                    className="text-center px-2 py-2 bg-[#50A1FF] text-white rounded-r-[1rem] text-bold text-xl"
                        onClick={increaseHandler}>
                    +
                </button>
            </div>
            <div className="flex justify-center px-4">
                <h1 className="text-center font-bold text-2xl">{price}$</h1>
            </div>
            <div className="ml-auto mx-8 cursor-pointer" onClick={deleteProductHandler}>
                <div className="flex">
                    <img src={trash} alt="trash" width="50"/>
                </div>
            </div>

        </div>

    );
}

export default CartItem;
