import { Button, Rating } from "@mui/material";
import { FaAngleRight, FaRegHeart } from "react-icons/fa6";
import Slider from "react-slick";
import ProductItem from "../../../Components/ProductItem";
import { BsArrowsFullscreen } from "react-icons/bs";

const RelatedProduct = () => {
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
        <div className="d-flex align-items-center justify-content-between">
            {/* Infor */}
            <div className="info">
                <h3 className="homeProducts-title">Best Sellers</h3>
                <p className="homeProducts-desc">
                    Do not miss the current offers until the end of March.
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
                        <span className="badge badge-primary">28%</span>
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
                            All Natural Italian-Style Chicken Meatballs
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
                            <span className="oldPrice mr-2">$20.00</span>
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
                        <span className="badge badge-primary">28%</span>
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
                            All Natural Italian-Style Chicken Meatballs
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
                            <span className="oldPrice mr-2">$20.00</span>
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
                        <span className="badge badge-primary">28%</span>
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
                            All Natural Italian-Style Chicken Meatballs
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
                            <span className="oldPrice mr-2">$20.00</span>
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
                        <span className="badge badge-primary">28%</span>
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
                            All Natural Italian-Style Chicken Meatballs
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
                            <span className="oldPrice mr-2">$20.00</span>
                            <span className="nextPrice text-danger">
                                $20.00
                            </span>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </>
);
}
export default RelatedProduct;