import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const ProductZoom = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="productZoom">
            {" "}
            <span className="badge badge-primary position-absolute">23%</span>
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
    );
};

export default ProductZoom;
