import React from "react";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa";
import { Button } from "@mui/material";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.png";
const Home = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <>
            <HomeBanner />
            <div className="homeProducts">
                <div className="container">
                    <div className="row flex-nowrap">
                        <div className="col-m-md-3">
                            <div className="banner">
                                <img src={banner1} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="d-flex align-items-center justify-content-between">
                                {/* Infor */}
                                <div className="info">
                                    <h3 className="homeProducts-title">
                                        Best Sellers
                                    </h3>
                                    <p className="homeProducts-desc">
                                        Do not miss the current offers until the
                                        end of March.
                                    </p>
                                </div>
                                {/* btn */}
                                <div className="homeProducts-btn">
                                    <Button className="border border-1 p-2 mb-0">
                                        <span> View all</span>
                                        <FaAngleRight />
                                    </Button>
                                </div>
                            </div>
                            {/* Product */}
                            <div className="product">
                                <Slider {...settings}>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img
                                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                                alt="img1"
                                                className="w-100"
                                            />
                                            <div className="title">
                                                All Natural Italian-Style
                                                Chicken Meatballs
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img
                                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg"
                                                alt="img1"
                                                className="w-100"
                                            />
                                        </div>
                                    </div>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img
                                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg"
                                                alt="img1"
                                                className="w-100"
                                            />
                                        </div>
                                    </div>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img
                                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"
                                                alt="img1"
                                                className="w-100"
                                            />
                                        </div>
                                    </div>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img
                                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                                alt="img1"
                                                className="w-100"
                                            />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
