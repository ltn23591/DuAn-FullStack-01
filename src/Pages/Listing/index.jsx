import { FaAngleDown } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { Button, Menu, MenuItem, Pagination, Stack } from "@mui/material";
import bannerContent from "../../assets/images/Banner_content_right.png";
import Sidebar from "../../Components/Sidebar";
import { BiGridSmall } from "react-icons/bi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { useState } from "react";
import ProductItem from "../../Components/ProductItem";

const Listing = () => {
    const [productView, setProductView] = useState("one");
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <section className="product_Listing_Page">
            <div className="container">
                <div className="productListing d-flex">
                    {/* Side bar */}
                    <Sidebar />

                    {/* Content */}
                    <div className="content_right">
                        <img
                            className="sidebarImg"
                            src={bannerContent}
                            alt="sidebarimg"
                        />

                        <div className="showBy d-flex justify-content-between">
                            <div>
                                <Button
                                    className=""
                                    onClick={() => {
                                        setProductView("one");
                                    }}
                                >
                                    <FiMenu
                                        className={
                                            productView === "one" && "act"
                                        }
                                    />
                                </Button>
                                <Button
                                    onClick={() => {
                                        setProductView("two");
                                    }}
                                >
                                    <BiGridSmall
                                        className={
                                            productView === "two" && "act"
                                        }
                                    />
                                </Button>
                                <Button
                                    onClick={() => {
                                        setProductView("three");
                                    }}
                                >
                                    <CgMenuGridO
                                        className={
                                            productView === "three" && "act"
                                        }
                                    />
                                </Button>
                                <Button
                                    onClick={() => {
                                        setProductView("four");
                                    }}
                                >
                                    <TfiLayoutGrid4Alt
                                        className={
                                            productView === "four" && "act"
                                        }
                                    />
                                </Button>
                            </div>

                            <div className="action-numb">
                                <Button
                                    onClick={handleClick}
                                    id="basic-button"
                                    aria-controls={
                                        open ? "basic-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                >
                                    Show
                                    <FaAngleDown />
                                </Button>
                                <Menu
                                    className="action-list"
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        "aria-labelledby": "basic-button",
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>9</MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        18
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        27
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        36
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>

                        <div className="product-listItem">
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                            <ProductItem itemView={productView} />
                        </div>
                        <Stack className="Pagination" spacing={2}>
                            <Pagination count={10} />
                        </Stack>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Listing;
