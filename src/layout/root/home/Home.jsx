// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Services from "./Services";
import Footer from "./Footer";
import AosSlider from "./AosSlider";
import Qna from "./Qna";



const Home = () => {
    const services=useLoaderData();
   
    return (
        <div className="max-w-6xl mx-auto">
            
            <Navbar></Navbar>
            <Banner></Banner>
            
            <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-5 ">
                {
                    services.map(service=> <Services key={service.id} service={service}></Services>)
                }
            </div>
            <Qna></Qna>
            <AosSlider></AosSlider>
         <Footer></Footer>
        </div>
    );
};

export default Home;