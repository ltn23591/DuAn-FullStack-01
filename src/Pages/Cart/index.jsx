import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <>
            <section className="cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1>Your cart</h1>
                            <p>
                                There are <span>3</span> products in your cart
                            </p>

                            {/* Table */}
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="">
                                                <Link to="/product/1">
                                                    <div className="cartItemWrapper d-flex align-items-center">
                                                        <div>
                                                            <img
                                                                className=""
                                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                                                alt="img"
                                                            />
                                                        </div>

                                                        <div>
                                                            <h6 className="infor">
                                                                Field Roast Chao
                                                                Cheese Creamy
                                                                Original
                                                            </h6>
                                                            <Rating
                                                                name="half-rating-read"
                                                                defaultValue={
                                                                    2.5
                                                                }
                                                                precision={0.5}
                                                                readOnly
                                                                size='small'
                                                            />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h1>Order Summary</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;
