import { GiTeapot } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { CiApple } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
    const [sideBar, setSideBar] = useState(false);
    const handleSideBarShowHide = () => {
        setSideBar(!sideBar);
    };
    return (
        <>
            <nav>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-sm-3 navPart1">
                            <div className="d-flex align-items-center justify-content-center allCartTab">
                                <div className="cartWrapper">
                                    <div
                                        style={{ userSelect: "none" }}
                                        onClick={handleSideBarShowHide}
                                        className="position-relative allCartTab"
                                    >
                                        <span className="text">
                                            ALL CATEGORIES
                                        </span>
                                        <span>
                                            <IoIosMenu className="position-absolute menu" />
                                        </span>
                                        <span>
                                            <FaAngleDown className="position-absolute angle" />
                                        </span>
                                    </div>
                                    {sideBar && (
                                        <div className="sidebarNav d-flex flex-column">
                                            <div className="sidebar-item">
                                                <Button>
                                                    <Link
                                                        to="/"
                                                        className="sidebar-link"
                                                    >
                                                        <CiApple className="navIconLeft" />
                                                        Fruits & Vegetables
                                                        <IoIosArrowForward className="navIconRight" />
                                                    </Link>
                                                </Button>
                                                <div className="submenu d-flex flex-column">
                                                    <Button>
                                                        <Link to="/">
                                                            Clothing
                                                        </Link>
                                                    </Button>
                                                    <Button>
                                                        <Link to="/">
                                                            Footwear
                                                        </Link>
                                                    </Button>
                                                    <Button>
                                                        <Link to="/">
                                                            watches
                                                        </Link>
                                                    </Button>
                                                    <Button>
                                                        <Link to="/">
                                                            Clothing
                                                        </Link>
                                                    </Button>
                                                    <Button>
                                                        <Link to="/">
                                                            Footwear
                                                        </Link>
                                                    </Button>
                                                    <Button>
                                                        <Link to="/">
                                                            watches
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="sidebar-item">
                                                <Button>
                                                    <Link to="/">
                                                        Meats & Seafood
                                                    </Link>
                                                </Button>
                                            </div>
                                            <div className="sidebar-item">
                                                <Button>
                                                    <Link to="/">
                                                        Breakfast & Dairy
                                                    </Link>
                                                </Button>
                                            </div>
                                            <div className="sidebar-item">
                                                <Button>
                                                    <Link
                                                        to="/"
                                                        className="sidebar-link"
                                                    >
                                                        <GiTeapot className="navIconLeft" />
                                                        Beverages
                                                        <IoIosArrowForward className="navIconRight" />
                                                    </Link>
                                                </Button>
                                                <div className="submenu d-flex flex-column">
                                                    <Button>
                                                        <Link to="/">
                                                            Clothing
                                                        </Link>
                                                    </Button>
                                                    <Button>
                                                        <Link to="/">
                                                            Footwear
                                                        </Link>
                                                    </Button>
                                                    <Button>
                                                        <Link to="/">
                                                            watches
                                                        </Link>
                                                    </Button>
                                                    <Button>
                                                        <Link to="/">
                                                            Clothing
                                                        </Link>
                                                    </Button>
                                                    <Button>
                                                        <Link to="/">
                                                            Footwear
                                                        </Link>
                                                    </Button>
                                                    <Button>
                                                        <Link to="/">
                                                            watches
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="sidebar-item">
                                                <Button>
                                                    <Link to="/">Footwear</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-9 navPart2 ml-auto">
                            <ul className="list list-inline w-100 d-flex flex-nowrap">
                                <li className="list-inline-item">
                                    <Button>
                                        {" "}
                                        <Link to="/">Home</Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to="/">men</Link>
                                    </Button>
                                    <div className="submenu shadow d-flex flex-column">
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">watches</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">watches</Link>
                                        </Button>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to="/">women</Link>
                                    </Button>
                                    <div className="submenu shadow d-flex flex-column">
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">watches</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        {" "}
                                        <Link to="/">beauty</Link>
                                    </Button>
                                    <div className="submenu shadow d-flex flex-column">
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">watches</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to="/">watches</Link>
                                    </Button>
                                    <div className="submenu shadow d-flex flex-column">
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">watches</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">watches</Link>
                                        </Button>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to="/">kids</Link>
                                    </Button>
                                    <div className="submenu shadow d-flex flex-column">
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">watches</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">watches</Link>
                                        </Button>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to="/">gifts</Link>
                                    </Button>
                                    <div className="submenu shadow d-flex flex-column">
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">watches</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to="/">Contact us</Link>
                                    </Button>
                                    <div className="submenu shadow d-flex flex-column">
                                        <Button>
                                            <Link to="/">Clothing</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">Footwear</Link>
                                        </Button>
                                        <Button>
                                            <Link to="/">watches</Link>
                                        </Button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navigation;
