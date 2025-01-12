import banner5 from "../../assets/images/banner5.png";
import { Button } from "antd";
import { MdOutlineMailOutline } from "react-icons/md";

const HomeNewsletter = () => {
    return (
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
                                Join our email subscription now to get updates{" "}
                                <br></br> on promotions and coupons.
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
    );
};

export default HomeNewsletter;
