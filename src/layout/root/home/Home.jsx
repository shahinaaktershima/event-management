// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Services from "./Services";
import Footer from "./Footer";
import AosSlider from "./AosSlider";
import Qna from "./Qna";
import { useEffect, useState } from "react";



const Home = () => {
   
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/fakedata.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
   
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
           <div className="my-10">
           <AosSlider></AosSlider>
           </div>
         <Footer></Footer>
        </div>
    );
};

export default Home;