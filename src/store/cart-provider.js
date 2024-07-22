import CartContext from "./cart-context";

const cartProvider = props=>{

    const addItemToCartHandler = (item) =>{};

    const removeItemToCartHandler = (id) =>{};

    const cartContext = {
        items:[],
        total:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler
    }



    return <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
}

export default cartProvider;