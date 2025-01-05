import React, { useContext, useEffect } from "react";
import Slide from "@mui/material/Slide";
import { IoCloseOutline } from "react-icons/io5";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Countrydropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [searchCountry, setSearchCountry] = useState([]);
    // Bước 11: Sử dụng useContext để lấy giá trị từ context
    const context = useContext(MyContext); // Lấy giá trị từ context
    // Bước 12: Sử dụng useEffect để lưu giá trị vào state
    useEffect(() => {
        setSearchCountry(context.countries);
    }, []);
    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        if (keyword !== "") {
            const list = searchCountry.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            });
            setSearchCountry(list);
        } else {
            setSearchCountry(context.countries);
        }
    };
    const selectedCountry = (country) => {
        setIsOpenModal(false);
        context.setSelectedCountry(country);
    };
    return (
        <>
            <Button
                className="d-flex align-item-center countryDrop"
                onClick={() => setIsOpenModal(true)}
            >
                <div className="infor d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">
                        {context.selectedCountry === ""
                            ? "Select a location"
                            : context.selectedCountry}
                    </span>
                </div>
                <span className="ml-auto">
                    <FaAngleDown />
                </span>
            </Button>
            <Dialog
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                className="locationModal"
                TransitionComponent={Transition}
            >
                <Button
                    className="closeBtn"
                    onClick={() => setIsOpenModal(false)}
                >
                    <IoCloseOutline />
                </Button>
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p className="locationModal-text">
                    Enter your address and we will specify the offer for your
                    area.
                </p>
                <div className="headerSearch w-100">
                    <input
                        type="text"
                        placeholder="Search your area"
                        onChange={filterList}
                    />
                    <Button>
                        <IoIosSearch />
                    </Button>
                </div>

                <ul className="countryList">
                    {searchCountry.length !== 0 &&
                        searchCountry.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="countryItem"
                                    onClick={() =>
                                        selectedCountry(item.country)
                                    }
                                >
                                    <Button>{item.country}</Button>
                                </li>
                            );
                        })}
                </ul>
            </Dialog>
        </>
    );
};

export default Countrydropdown;
