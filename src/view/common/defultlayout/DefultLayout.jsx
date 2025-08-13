import {Navbar} from "../navbar/Navbar.jsx";
import {MainContent} from "../maincontent/MainContent.jsx";
import {Footer} from "../footer/Footer.jsx";

export function DefaultLayout() {
    return (
        <>
            <Navbar></Navbar>
            <MainContent></MainContent>
            <Footer></Footer>
        </>
    );
}