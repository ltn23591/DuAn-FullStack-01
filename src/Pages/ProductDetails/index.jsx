import { FaCartShopping } from "react-icons/fa6";
import {
    Button,
    Rating,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
} from "@mui/material";
import ProductZoom from "../../Components/ProductZoom";
import QuatityBox from "../../Components/QuatityBox";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoSwapVertical } from "react-icons/io5";
import RelatedProduct from "./RelatedProducts";

const ProductDetails = () => {
    const [alignment, setAlignment] = useState("web");
    const [value, setValue] = useState(1);

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [tab, setTab] = useState(1);
    return (
        <section className="productDetails">
            <div className="container">
                <div className="row background-light">
                    <div className="col-md-5">
                        <ProductZoom />
                    </div>

                    <div className="col-md-7 mt-5">
                        <h2 className="hd text-capitalize">
                            All Natural Italian-Style Chicken Meatballs
                        </h2>
                        <ul className="list list-inline d-flex">
                            <li className="list-list-inline-item">
                                <div className="d-flex align-align-items-center">
                                    <span className="">Brands: </span>
                                    <span>Welch's</span>
                                </div>
                            </li>
                            <div className="line"></div>
                            <li className="list-list-inline-item">
                                <div className="d-flex align-items-center">
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={2.5}
                                        precision={0.5}
                                        readOnly
                                    />
                                    <span>1 Review</span>
                                </div>
                            </li>
                            <div className="line"></div>
                            <li className="list-list-inline-item">
                                <div className="d-flex align-items-center">
                                    <span className=""> SKU</span>
                                    <span>ZU49VOR</span>
                                </div>
                            </li>
                        </ul>
                        <div className="price">
                            <span className="oldPrice mr-2">$9.35</span>
                            <span className="nextPrice text-danger">$7.25</span>
                        </div>
                        <span className="text text-success d-inline-block m-3 ">
                            In Stock
                        </span>
                        <p className="desc my-4">
                            Vivamus adipiscing nisl ut dolor dignissim semper.
                            Nulla luctus malesuada tincidunt. Class aptent
                            taciti sociosqu ad litora torquent Vivamus
                            adipiscing nisl ut dolor dignissim semper. Nulla
                            luctus malesuada tincidunt. Class aptent taciti
                            sociosqu ad litora torquent
                        </p>

                        <div className="d-flex align-items-center">
                            <div className="count mr-5">
                                <QuatityBox />
                            </div>
                            <Button className="addCart d-flex">
                                <FaCartShopping className="mr-3" />
                                Add to cart
                            </Button>
                        </div>
                        <div className="mt-4">
                            <span>
                                Size / Weight:
                                <ToggleButtonGroup
                                    className="toggle ml-3"
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    <ToggleButton value="web">
                                        10KG
                                    </ToggleButton>
                                    <ToggleButton value="android">
                                        20KG
                                    </ToggleButton>
                                    <ToggleButton value="ios">
                                        30KG
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </span>
                        </div>
                        <div className="favoriteItem">
                            <Tooltip className="mr-4" title="Add to wishlist">
                                <Button>
                                    <IoMdHeart />
                                    &nbsp; Add to wishlist
                                </Button>
                            </Tooltip>
                            <Tooltip title="COMPARE">
                                <Button>
                                    <IoSwapVertical />
                                    COMPARE
                                </Button>{" "}
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <div className="productDetails-content my-5 background-light w-100">
                    <div className="tabList">
                        <div className="controlTab">
                            <Button>
                                <div
                                    onClick={() => {
                                        setTab(1);
                                    }}
                                    className="tabItem"
                                >
                                    Description
                                </div>
                            </Button>

                            <Button
                                onClick={() => {
                                    setTab(2);
                                }}
                            >
                                <div className="tabItem">
                                    ADDITIONAL INFORMATION
                                </div>
                            </Button>
                            <Button
                                onClick={() => {
                                    setTab(3);
                                }}
                            >
                                <div className="tabItem">REVIEWS</div>
                            </Button>
                        </div>

                        <hr />
                        <div className="tabContent">
                            <div
                                className={`tabOne ${
                                    tab === 1 ? "tabActive" : ""
                                }`}
                            >
                                <p className="desc">
                                    Quisque varius diam vel metus mattis, id
                                    aliquam diam rhoncus. Proin vitae magna in
                                    dui finibus malesuada et at nulla. Morbi
                                    elit ex, viverra vitae ante vel, blandit
                                    feugiat ligula. Fusce fermentum iaculis
                                    nibh, at sodales leo maximus a. Nullam
                                    ultricies sodales nunc, in pellentesque
                                    lorem mattis quis. Cras imperdiet est in
                                    nunc tristique lacinia. Nullam aliquam
                                    mauris eu accumsan tincidunt. Suspendisse
                                    velit ex, aliquet vel ornare vel, dignissim
                                    a tortor. Morbi ut sapien vitae odio
                                    accumsan gravida. Morbi vitae erat auctor,
                                    eleifend nunc a, lobortis neque. Praesent
                                    aliquam dignissim viverra. Maecenas lacus
                                    odio, feugiat eu nunc sit amet, maximus
                                    sagittis dolor. Vivamus nisi sapien,
                                    elementum sit amet eros sit amet, ultricies
                                    cursus ipsum. Sed consequat luctus ligula.
                                    Curabitur laoreet rhoncus blandit. Aenean
                                    vel diam ut arcu pharetra dignissim ut sed
                                    leo. Vivamus faucibus, ipsum in vestibulum
                                    vulputate, lorem orci convallis quam, sit
                                    amet consequat nulla felis pharetra lacus.
                                    Duis semper erat mauris, sed egestas purus
                                    commodo vel.Quisque varius diam vel metus
                                    mattis, id aliquam diam rhoncus. Proin vitae
                                    magna in dui finibus malesuada et at nulla.
                                    Morbi elit ex, viverra vitae ante vel,
                                    blandit feugiat ligula. Fusce fermentum
                                    iaculis nibh, at sodales leo maximus a.
                                    Nullam ultricies sodales nunc, in
                                    pellentesque lorem mattis quis. Cras
                                    imperdiet est in nunc tristique lacinia.
                                    Nullam aliquam mauris eu accumsan tincidunt.
                                    Suspendisse velit ex, aliquet vel ornare
                                    vel, dignissim a tortor. Morbi ut sapien
                                    vitae odio accumsan gravida. Morbi vitae
                                    erat auctor, eleifend nunc a, lobortis
                                    neque. Praesent aliquam dignissim viverra.
                                    Maecenas lacus odio, feugiat eu nunc sit
                                    amet, maximus sagittis dolor. Vivamus nisi
                                    sapien, elementum sit amet eros sit amet,
                                    ultricies cursus ipsum. Sed consequat luctus
                                    ligula. Curabitur laoreet rhoncus blandit.
                                    Aenean vel diam ut arcu pharetra dignissim
                                    ut sed leo. Vivamus faucibus, ipsum in
                                    vestibulum vulputate, lorem orci convallis
                                    quam, sit amet consequat nulla felis
                                    pharetra lacus. Duis semper erat mauris, sed
                                    egestas purus com
                                </p>
                            </div>
                            <div
                                className={`tabOne ${
                                    tab === 2 ? "tabActive" : ""
                                }`}
                            >
                                <div className="row d-flex justify-content-between">
                                    <div className="col-md-6">Brands</div>
                                    <div className="col-md-6">Welch's</div>
                                </div>
                            </div>
                            <div
                                className={`tabOne ${
                                    tab === 3 ? "tabActive" : ""
                                }`}
                            >
                                <div className="review m-4">
                                    <h3>
                                        1 review for All Natural Italian-Style
                                        Chicken Meatballs
                                    </h3>
                                    <div className="d-flex">
                                        <div className="left d-flex align-items-center">
                                            <img
                                                className="avatar mr-4"
                                                alt="avt"
                                                src="https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=60&d=mm&r=g"
                                            />
                                        </div>
                                        <div className="right">
                                            <Rating
                                                name="half-rating-read"
                                                defaultValue={2.5}
                                                precision={0.5}
                                                readOnly
                                            />

                                            <h4 className="name d-flex">
                                                admin
                                                <span> – May 1, 2021</span>
                                            </h4>
                                            <p className="desc">
                                                Sed perspiciatis unde omnis iste
                                                natus error sit voluptatem
                                                accusantium doloremque
                                                laudantium.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3>Add a review</h3>
                                        <hr />
                                        <p className="mb-3">
                                            Your email address will not be
                                            published. Required fields are
                                            marked *
                                        </p>
                                        <p>Your rating *</p>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                        <p>Your review *</p>
                                        <textarea
                                            rows={5}
                                            className="comment mb-5"
                                        >
                                            At w3schools.com you will learn how
                                            to make a website. They offer free
                                            tutorials in all web development
                                            technologies.
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProduct />
                <hr className="mb-5" />
            </div>
        </section>
    );
};

export default ProductDetails;
