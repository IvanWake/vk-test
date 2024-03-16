import Button from "../Layout/Button";

const CartItemsOver = () => {
    return (
        <div className="flex flex-col w-96 space-y-4 my-4">
            <div>
                <p className="text-2xl font-semibold">Вы удалили все товары локально, можете обновить корзину и
                попробовать снова</p>
            </div>
            <div onClick={() => window.location.reload()}>
                <Button content="Обновить страницу" disabled={false}/>
            </div>
        </div>
    );
}

export default CartItemsOver;