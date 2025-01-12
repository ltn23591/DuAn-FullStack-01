import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

const Sidebar = () => {
    const [value, setValue] = useState([0, 60000]);
    const handleChange = (e, newValue) => {
        setValue(newValue);
    };
    const valuetext = (value) => {
        return value;
    };
    return (
        <div className="sidebar">
            <div className="sticky">
                <div className="filterBox">
                    <h5>Product Categories</h5>
                    <ul className="sidebarList">
                        <li>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Beverages"
                                className="sidebarItem"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Biscuits & Snacks"
                                className="sidebarItem"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Breads & Bakery"
                                className="sidebarItem"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Breakfast & Dairy"
                                className="sidebarItem"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Frozen Foods"
                                className="sidebarItem"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Fruits & Vegetables"
                                className="sidebarItem"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Grocery & Staples"
                                className="sidebarItem"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Household Needs"
                                className="sidebarItem"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Meats & Seafood"
                                className="sidebarItem"
                            />
                        </li>
                    </ul>
                </div>

                <div filterBox2>
                    <h5>Product Categories</h5>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            min={0}
                            max={60000}
                            getAriaLabel={() => "Temperature range"}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </Box>
                </div>

                <div className="filterBox3">
                    <h5>Product Status</h5>
                    <ul className="sidebarList">
                        <li>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="In stock"
                                className="sidebarItem"
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="On sale"
                                className="sidebarItem"
                            />
                        </li>
                    </ul>
                </div>

                <div>
                    <img
                        className="sidebarImg"
                        alt="img"
                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
                    />
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
