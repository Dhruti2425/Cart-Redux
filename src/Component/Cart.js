import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_cart, remove_cart } from "../Redux/Actions/CartAction";


function Cart() {
    let cartData = useSelector(state => state.cart)
    let dispatch = useDispatch();
    let [quan, setQuan] = useState(1);
    let [product, setProduct] = useState({
        name: "Walking Sports Shoes for Women",
        price: 5000
    })

    let dicrement = (e) => {
        setQuan(--quan)
    }

    let increment = (e) => {
        setQuan(++quan)
    }

    let submitCartData = (e) => {
        product.quantity = quan;
        product.totalPrice = product.price*product.quantity;
        product.id = Math.round(Math.random()*1000)
        dispatch(add_cart(product));
        setProduct({
            name: "Walking Sports Shoes for Women",
            price: 5000
        })

    }

    let deleteData = (id) => {
        let pos = cartData.findIndex((v) => v.id == id)
        let newArr = cartData.splice(pos , 1);
        dispatch(remove_cart(newArr));
    }

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', marginTop:'30px' }}>Cart Data</h1>

            <div className="data d-flex">
                <div className="cart">
                    <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/h/g/z/-original-imagsc2pdpvzyyu4.jpeg?q=70" />
                    <div className="cart-content">
                        <h2 className="p_name">{product.name}</h2>
                        <h3 className="p_price">{product.price}</h3>
                        <div className="quantity">
                            <button onClick={(e) => dicrement(e)}>-</button>
                            <input value={quan} disabled />
                            <button onClick={(e) => increment(e)}>+</button>
                        </div>
                        <button className="addbtn" onClick={(e) => submitCartData(e)}>Add To Cart</button>
                    </div>
                </div>

                <div className="cartList">
                    <h1>Your Cart Summary</h1>
                    <div className="d-flex cart_head">
                        <div className="total_pro">
                            <h4>Items in Cart</h4>
                            <h3>{cartData.length}</h3>
                        </div>
                        <div className="total">
                            <h4>Grand Total (INR)</h4>
                            <h3>{0}</h3>
                        </div>
                    </div>

                    {cartData.map((v, i) => {
                        return (
                            <div className="d-flex justify-between cartdata">
                                <h3>{v.name}</h3>
                                <h3>{v.quantity}</h3>
                                <h3>{v.totalPrice}</h3>
                                <h3><button className="close" onClick={(id) => deleteData(v.id)}>X</button></h3>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Cart;