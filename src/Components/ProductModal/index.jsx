import { IoSwapVertical } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Button, Dialog, Rating } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";
import QuatityBox from "../QuatityBox";

const ProductModal = () => {
    const context = useContext(MyContext);

    return (
        <Dialog
            className="productModal"
            open={true}
            onClose={() => {
                context.setViewModal(false);
            }}
        >
            <div className="productModalWrapper">
                <div className="productModalTop">
                    <Button
                        className="closeBtn"
                        onClick={() => context.setViewModal(false)}
                    >
                        <IoClose />
                    </Button>
                    <h4 className="modalHeading">
                        All Natural Italian-Style Chicken Meatballs
                    </h4>
                    <div className="row d-flex align-items-center">
                        <div>
                            <p className="mb-0 ml-3">
                                Brands <span>Welch's</span>
                            </p>
                        </div>
                        <div className="line"></div>
                        <div className="d-flex align-items-center">
                            <Rating
                                name="half-rating-read"
                                defaultValue={4}
                                precision={0.5}
                                readOnly
                                className="rating mt-0 mr-1"
                            />
                            <span>1 review</span>
                        </div>
                        <div className="line"></div>
                        <div>
                            <p className="mb-0">
                                SKU: <span>ZU49VOR</span>
                            </p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row productMediaModal">
                    <div className="col-md-5">
                        <ProductZoom />
                    </div>
                    <div className="col-md-7">
                        <div className="price ">
                            <span className="oldPrice mr-2">$9.35</span>
                            <span className="nextPrice text-danger">$7.25</span>
                        </div>
                        <span className="text text-success d-inline-block m-3 ">
                            In Stock
                        </span>
                        <p className="desc">
                            Vivamus adipiscing nisl ut dolor dignissim semper.
                            Nulla luctus <br></br> malesuada tincidunt. Class
                            aptent taciti sociosqu ad litora torquent
                        </p>
                        <div className="action d-flex mt-4">
                            <div className="count mr-5">
                                <QuatityBox />
                            </div>
                            <Button className="addCart">Add to cart</Button>
                        </div>

                        <div className="favoriteItem">
                            <Button>
                                <IoMdHeart />
                                &nbsp; Add to wishlist
                            </Button>
                            <Button>
                                <IoSwapVertical />
                                COMPARE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ProductModal;
