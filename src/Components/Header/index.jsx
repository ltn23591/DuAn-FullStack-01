import { BsBasket3 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Countrydropdown from "../CountryDrop/index";
import Button from "@mui/material/Button";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { useContext } from "react";

const Header = () => {
    // Bước 9: Sử dụng useContext để lấy giá trị từ context
    const context = useContext(MyContext); // Lấy giá trị từ context
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center ">
                            Due to the <b>COVID 19</b> epidemic, orders may be
                            processed with a slight delay
                        </p>
                    </div>
                </div>

                <header className="d-flex align-items-center header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-item-center col-sm-2">
                                <Link to="/">
                                    <img src={Logo} alt="logo" />
                                </Link>
                            </div>

                            <div className="d-flex col-sm-10 d-flex align-item-center part2">
                                {
                                    /* Bước 10: Truyền giá trị xuống các component con */
                                    context.countries.length !== 0 && (
                                        <Countrydropdown />
                                    )
                                }

                                <SearchBox />
                                <div className="d-flex align-items-center part3 ml-auto">
                                    <Button className="circle mr-3">
                                        <FaRegCircleUser />
                                    </Button>
                                    <div className="d-flex align-items-center ml-auto cartTab ">
                                        <div className="price">$20.50</div>
                                        <div className="position-relative">
                                            <Button className="circle ml-2">
                                                <BsBasket3 className="basket" />
                                            </Button>
                                            <div className="position-absolute cartCount d-flex align-items-center justify-content-center">
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Navigation />
            </div>
        </>
    );
};

export default Header;
