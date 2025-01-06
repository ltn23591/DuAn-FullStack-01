import { TfiAngleDoubleRight } from "react-icons/tfi";
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import React, {  useRef, useState } from "react";
import Slider from "react-slick";
import { Button } from "@mui/material";
const HomeCat = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 1,
    };

    const [backgroundItem, setBackgroundItem] = useState([
        "#FFF0F5",
        "#F0FFF0",
        "#F0FFFF",
        "#F5FFFA",
        "#F0F8FF",
        "#FAF0E6",
        "#FFEFD5",
        "#FFFACD",
        "#F5F5DC",
        "#FAEBD7",
        "#FDF5E6",
        "#E6E6FA",
        "#E0FFFF",
        "#FFF5EE",
        "#FFFAF0",
    ]);
    const background = () => {
        backgroundItem.map((item, index) => {
            return item;
        });
    };

    return (
        <>
            <section className="homeCat mt-5">
                <div className="container">
                    <h3 className="homeCatHeading">Featured Categories</h3>
                    <Slider
                        ref={(slider) => {
                            sliderRef = slider;
                        }}
                        {...settings}
                        className="homeCatList"
                    >
                        {backgroundItem.map((item, index) => {
                            return (
                                <div key={index} className="homeCatItem cursor">
                                    <div
                                        className="imgWrapper"
                                        style={{
                                            background: item,
                                        }}
                                    >
                                        <img
                                            src={`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-${
                                                index + 1
                                            }.png`}
                                            alt="imgHomeCat"
                                        ></img>
                                        <div className="info">
                                            <h6>Cake & Milk</h6>
                                            <span>26 items</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                    <div className="actions mt-2">
                        <Button
                            className="button mr-1 shadow"
                            onClick={previous}
                        >
                            <TfiAngleDoubleLeft />
                        </Button>
                        <Button className="button shadow" onClick={next}>
                            <TfiAngleDoubleRight />
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};
export default HomeCat;
