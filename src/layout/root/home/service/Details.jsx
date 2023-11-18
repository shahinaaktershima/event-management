import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AosSlider from "../AosSlider";


const Details = () => {
    const data=useLoaderData();
    const {id,name}=data;
    console.log(id,name);
    return (
        <div>
            <Navbar></Navbar>
           <div className="my-10">
           <AosSlider></AosSlider>
           </div>
            <p>{name}</p>
            <Footer></Footer>
        </div>
    );
};

export default Details;