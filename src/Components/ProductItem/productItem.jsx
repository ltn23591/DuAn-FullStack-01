import { Button, Rating } from "@mui/material";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const ProductItem = () => {
    return (
        <>
            <div className="item productItem p-2">
                <div className="imgWrapper ">
                    <img
                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
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
                    <span className="text-success d-block my-2">IN STOCK</span>
                    <Rating
                        name="half-rating-read"
                        defaultValue={4}
                        precision={0.5}
                        readOnly
                        className="rating my-2"
                    />
                    <div className="d-flex align-items-center">
                        <span className="oldPrice mr-2">$20.00</span>
                        <span className="nextPrice text-danger">$20.00</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProductItem;
