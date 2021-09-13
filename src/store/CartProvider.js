import CardContext from "./card-context";

const CartProvider = props => {
    const addItemToCartHandler = item => {};
    const removeitemFromcartHandler = id => {}; 

    const cartContext = {
      items: [],
      totalAmount: 0,
      addItem: addItemToCartHandler,
      removeItem: removeitemFromcartHandler,
    };

    return <CardContext.Provider value={cartContext} >
        {props.children}
    </CardContext.Provider>
};

export default CartProvider;