import { useEffect } from "react";
import { useCart } from "./store/cart-store";
import { doc, getDoc } from "firebase/firestore"
import { dbFirestore } from './firebase';
import Cart from "./components/Cart/Cart";
import CartTotal from "./components/Cart/CartTotal";

const App = () => {
    const { setCartProducts } = useCart();

    const getUserCart = async () => {
        try {
            const docRef = doc(dbFirestore, 'cart', "vkTest");
            const docSnap: any = await getDoc(docRef);
            setCartProducts(docSnap.data().cart);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserCart();
    }, []);


    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex justify-center items-start space-x-5">
                <Cart/>
                <CartTotal/>
            </div>
        </div>

    );
}

export default App;