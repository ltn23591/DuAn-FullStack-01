import "./styles.css";
import "./Reset.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";

// Bước 1: Tạo một context
// Create a context
const MyContext = createContext();

function App() {
    const [viewModal, setViewModal] = useState(false);

    // https://countriesnow.space/api/v0.1/countries/
    // Bước 3: Tạo giá trị cần truyền xuống các component con
    const [countries, setCountries] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState("");

    //Bước 4: Dùng useEffect để gọi API và lưu dữ liệu vào state
    useEffect(() => {
        //Bước 5: Gọi API
        getCountries("https://countriesnow.space/api/v0.1/countries/");
    }, []);

    // Bước 6: Tạo hàm gọi API
    const getCountries = async (url) => {
        const response = await axios.get(url).then((res) => {
            // Bước 7: Lưu dữ liệu vào state
            setCountries(res.data.data);
        });
    };

    // Bước 8: Tạo giá trị cần truyền xuống các component con
    const values = {
        countries,
        selectedCountry,
        setSelectedCountry,
        setViewModal,
        viewModal,
    };
    return (
        <>
            <BrowserRouter>
                {/* Bước 2: Sử dụng Provider để truyền giá trị xuống các component con */}
                <MyContext.Provider value={values}>
                    <Header />
                    <Routes>
                        <Route path="/" exact={true} element={<Home />} />
                        <Route
                            path="/cat/:id"
                            exact={true}
                            element={<Listing />}
                        />
                        <Route
                            path="/product/:id"
                            exact={true}
                            element={<ProductDetails />}
                        />
                        <Route path="/cart" exact={true} element={<Cart />} />
                    </Routes>
                    <Footer />
                    {viewModal === true && <ProductModal />}
                </MyContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
export { MyContext };
