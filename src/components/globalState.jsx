






    xonst addProdToCart = (prod) => {
        console.log("adding prod to state");

        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    };

    const removeProdFromCart = () => {
        console.log("removing prod from state");
    };

    return (
        <store.Provider
            value={{
                cart: cart,
                user: loggedInUser,
                addProdToCart: addProdToCart,
                removeProdFromCart: removeProdFromCart,
            }}
        >
            {props.children}
        </store.Provider>
    );
};

export default GlobalState;