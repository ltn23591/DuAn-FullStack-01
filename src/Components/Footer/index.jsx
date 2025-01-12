import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

import { CiDollar } from "react-icons/ci";
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FaAirFreshener } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeNewsletter from "../../Pages/Home/HomeNewsLetter";
const Footer = () => {
    return (
        <footer className="footer">
            <HomeNewsletter />
            <div className="container">
                {/* Footer top */}
                <div className="footerTop">
                    <div className="row">
                        <div className="col">
                            <FaAirFreshener />
                            <p>Everyday fresh products</p>
                        </div>

                        <div className="line"></div>

                        <div className="col">
                            <TbTruckDelivery />
                            <p>Free delivery for order over $70</p>
                        </div>

                        <div className="line"></div>

                        <div className="col">
                            <RiDiscountPercentLine />
                            <p>Daily Mega Discounts</p>
                        </div>

                        <div className="line"></div>

                        <div className="col">
                            <CiDollar />
                            <p> Best price on the market</p>
                        </div>
                    </div>
                </div>
                {/* Footer bottom */}

                <div className="footerBottom">
                    <div className="row">
                        <div className="col">
                            <ul>
                                <h5 className="mb-3">FRUIT & VEGETABLES</h5>
                                <li>Fresh Vegetables</li>
                                <li>Herbs & Seasonings</li>
                                <li>Fresh Fruits</li>
                                <li>Cuts & Sprouts</li>
                                <li>Exotic Fruits & Veggies</li>
                                <li>Packaged Produce</li>
                                <li>Party Trays</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <h5 className="mb-3">Breakfast & Dairy</h5>
                                <li> Milk & Flavoured Milk</li>
                                <li>Butter and Margarine</li>
                                <li>Cheese</li>
                                <li>Eggs Substitutes</li>
                                <li>Honey</li>
                                <li>Marmalades</li>
                                <li>Sour Cream and Dips</li>
                                <li>Yogurt</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <h5 className="mb-3">Meat & Seafood</h5>
                                <li> Breakfast Sausage</li>
                                <li>Dinner Sausage</li>
                                <li>Beef</li>
                                <li>Chicken</li>
                                <li>Sliced Deli Meat</li>
                                <li>Shrimp</li>
                                <li>Wild Caught Fillets</li>
                                <li>Crab and Shellfish</li>
                                <li>Farm Raised Fillets</li>
                            </ul>
                        </div>

                        <div className="col">
                            <ul>
                                <h5 className="mb-3">Beverages</h5>
                                <li> Water</li>
                                <li>Sparkling Water</li>
                                <li>Soda & Pop</li>
                                <li>Coffee</li>
                                <li>Milk & Plant-Based Milk</li>
                                <li>Tea & Kombucha</li>
                                <li>Drink Boxes & Pouches</li>
                                <li>Craft Beer</li>
                                <li>Wine</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <h5 className="mb-3">Breads & Bakery</h5>
                                <li>Milk & Flavoured Milk</li>
                                <li>Butter and Margarine</li>
                                <li>Cheese</li>
                                <li>Eggs Substitutes</li>
                                <li>Honey</li>
                                <li>Marmalades</li>
                                <li>Sour Cream and Dips</li>
                                <li>Yogurt</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="copyright mt-3 pd-3 mb-0 d-flex justify-content-between">
                    <p>
                        Copyright 2024 © Bacola WordPress Theme. All rights
                        reserved. Powered by KlbTheme.
                    </p>
                    <ul className="list list-inline">
                        <li className="list-inline-item">
                            <Link to="#">
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <FaInstagram />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
