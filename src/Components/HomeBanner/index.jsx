import React from "react";
import Slider from "react-slick";
const HomeBanner = () => {
    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <>
            <div className="homeBannerSection">
                <Slider {...settings}>
                    <div className="item">
                        <img
                            className="bannerItem w-100"
                            src="https://images.unsplash.com/photo-1735257676933-828bfbdc03a2?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="banner01"
                        />
                    </div>
                    <div className="item">
                        <img
                            className="bannerItem w-100"
                            src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="banner01"
                        />
                    </div>
                    <div className="item">
                        <img
                            className="bannerItem w-100"
                            src="https://plus.unsplash.com/premium_photo-1699973056666-b1eed2289d75?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="banner01"
                        />
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default HomeBanner;
