
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/home/Home.jsx";
import About from "../../pages/about/About.jsx";
import Contact from "../../pages/contact/Contact.jsx";
import {Service} from "../../pages/service/Service.jsx";

import {ShoppingCart} from "../../pages/shoppingcart/ShoppingCart.jsx";
export function MainContent() {
    return (
        <div className="flex justify-center items-center  ">
            <Routes>
                <Route path="/" element={ <Home />}></Route>
                <Route path="/About" element={ <About />}></Route>
                <Route path="/Contact" element={ <Contact />}></Route>
                <Route path="/Service" element={ <Service />}></Route>
                <Route path="/ShoppingCart" element={ <ShoppingCart/>}></Route>

            </Routes>
        </div>
    );
}
