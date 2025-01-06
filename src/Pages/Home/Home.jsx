import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import Rating from "@mui/material/Rating";
import React from "react";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa";
import { Button, Input } from "@mui/material";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import banner5 from "../../assets/images/banner5.png";
import ProductItem from "../../Components/ProductItem/productItem";
import HomeCat from "../../Components/HomeCat";
const Home = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <>
            <HomeBanner />
            <HomeCat />

            {/* Home */}
            <section className="homeProducts">
                <div className="container">
                    <div className="row flex-nowrap">
                        <div className="col-m-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img src={banner1} alt="img" />
                                </div>
                                <div className="banner mt-5">
                                    <img src={banner2} alt="img" />
                                </div>
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
                            {/* Product 1*/}
                            <div className="product">
                                <Slider {...settings} className="productWrap">
                                    {/* Item 1 */}
                                    <ProductItem />
                                    {/* Item 2 */}
                                    <div className="item productItem p-2 ">
                                        <div className="imgWrapper">
                                            <img
                                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg"
                                                alt="img1"
                                                className="w-100"
                                            />
                                            <span className="badge badge-primary">
                                                28%
                                            </span>
                                            <div className="actions d-flex flex-column">
                                                <Button className="mb-1">
                                                    <BsArrowsFullscreen />
                                                </Button>
                                                <Button>
                                                    <FaRegHeart />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h4 className="title my-2">
                                                All Natural Italian-Style
                                                Chicken Meatballs
                                            </h4>
                                            <span className="text-success d-block my-2">
                                                IN STOCK
                                            </span>
                                            <Rating
                                                name="half-rating-read"
                                                defaultValue={4}
                                                precision={0.5}
                                                readOnly
                                                className="rating my-2"
                                            />
                                            <div className="d-flex align-items-center">
                                                <span className="oldPrice mr-2">
                                                    $20.00
                                                </span>
                                                <span className="nextPrice text-danger">
                                                    $20.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Item 3 */}
                                    <div className="item productItem p-2 ">
                                        <div className="imgWrapper">
                                            <img
                                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg"
                                                alt="img1"
                                                className="w-100"
                                            />
                                            <span className="badge badge-primary">
                                                28%
                                            </span>
                                            <div className="actions d-flex flex-column">
                                                <Button className="mb-1">
                                                    <BsArrowsFullscreen />
                                                </Button>
                                                <Button>
                                                    <FaRegHeart />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h4 className="title my-2">
                                                All Natural Italian-Style
                                                Chicken Meatballs
                                            </h4>
                                            <span className="text-success d-block my-2">
                                                IN STOCK
                                            </span>
                                            <Rating
                                                name="half-rating-read"
                                                defaultValue={4}
                                                precision={0.5}
                                                readOnly
                                                className="rating my-2"
                                            />
                                            <div className="d-flex align-items-center">
                                                <span className="oldPrice mr-2">
                                                    $20.00
                                                </span>
                                                <span className="nextPrice text-danger">
                                                    $20.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Item 4 */}
                                    <div className="item productItem p-2">
                                        <div className="imgWrapper">
                                            <img
                                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"
                                                alt="img1"
                                                className="w-100"
                                            />
                                            <span className="badge badge-primary">
                                                28%
                                            </span>
                                            <div className="actions d-flex flex-column">
                                                <Button className="mb-1">
                                                    <BsArrowsFullscreen />
                                                </Button>
                                                <Button>
                                                    <FaRegHeart />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h4 className="title my-2">
                                                All Natural Italian-Style
                                                Chicken Meatballs
                                            </h4>
                                            <span className="text-success d-block my-2">
                                                IN STOCK
                                            </span>
                                            <Rating
                                                name="half-rating-read"
                                                defaultValue={4}
                                                precision={0.5}
                                                readOnly
                                                className="rating my-2"
                                            />
                                            <div className="d-flex align-items-center">
                                                <span className="oldPrice mr-2">
                                                    $20.00
                                                </span>
                                                <span className="nextPrice text-danger">
                                                    $20.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Item 5 */}
                                    <div className="item productItem p-2 ">
                                        <div className="imgWrapper">
                                            <img
                                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg"
                                                alt="img1"
                                                className="w-100"
                                            />
                                            <span className="badge badge-primary">
                                                28%
                                            </span>
                                            <div className="actions d-flex flex-column">
                                                <Button className="mb-1">
                                                    <BsArrowsFullscreen />
                                                </Button>
                                                <Button>
                                                    <FaRegHeart />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h4 className="title my-2">
                                                All Natural Italian-Style
                                                Chicken Meatballs
                                            </h4>
                                            <span className="text-success d-block my-2">
                                                IN STOCK
                                            </span>
                                            <Rating
                                                name="half-rating-read"
                                                defaultValue={4}
                                                precision={0.5}
                                                readOnly
                                                className="rating my-2"
                                            />
                                            <div className="d-flex align-items-center">
                                                <span className="oldPrice mr-2">
                                                    $20.00
                                                </span>
                                                <span className="nextPrice text-danger">
                                                    $20.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>

                            <div className="d-flex align-items-center justify-content-between mt-4">
                                {/* Infor */}
                                <div className="info">
                                    <h3 className="homeProducts-title">
                                        New Product
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
                            {/* Product 2*/}
                            <div className="product2">
                                <div className="productWrap">
                                    {/* Item 1 */}
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                </div>

                                <div className="d-flex mt-5 bannerSec">
                                    <div className="imgWrap">
                                        <img
                                            src={banner3}
                                            alt="banner"
                                            className="cursor w-100"
                                        />
                                    </div>
                                    <div className="imgWrap">
                                        <img
                                            src={banner4}
                                            alt="banner"
                                            className="cursor w-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter  */}
            <section className="homeNewsletter ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left">
                                <p className="desc text-white">
                                    $20 discount for your first order
                                </p>
                                <h2 className="mb-3 text-white">
                                    Join our newsletter and get...
                                </h2>
                                <p className="text-light">
                                    Join our email subscription now to get
                                    updates <br></br> on promotions and coupons.
                                </p>
                                <div className="form">
                                    <MdOutlineMailOutline />
                                    <input
                                        type="text"
                                        placeholder="Your email address"
                                    />
                                    <Button>Subscribe</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right">
                                <img src={banner5} alt="banner5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
