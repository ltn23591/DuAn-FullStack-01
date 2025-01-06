import { IoSwapVertical } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Dialog, Rating } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { MyContext } from "../../App";

const ProductModal = () => {
    const context = useContext(MyContext);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [count, setCount] = useState(1);

    const handleClickCountDown = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const handleClickCountUp = () => {
        setCount(count + 1);
    };
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
                        <span className="badge badge-primary position-absolute">
                            23%
                        </span>
                        <span className="badge badge-primary position-absolute">
                            recomended
                        </span>
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            speed={2000}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 "
                        >
                            <SwiperSlide>
                                <img
                                    alt="modal"
                                    className="modalImg"
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    alt="modal"
                                    className="modalImg"
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    alt="modal"
                                    className="modalImg"
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            speed={5000}
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper d-flex justify-content-center"
                        >
                            <SwiperSlide>
                                <img
                                    alt="modal"
                                    className="modalImg"
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    alt="modal"
                                    className="modalImg"
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    alt="modal"
                                    className="modalImg"
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                                />
                            </SwiperSlide>
                        </Swiper>
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
                                <Button onClick={handleClickCountDown}>
                                    -
                                </Button>
                                <span className="mx-3">{count}</span>
                                <Button onClick={handleClickCountUp}>+</Button>
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
