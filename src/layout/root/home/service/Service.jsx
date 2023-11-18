import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar";

import { ToastContainer } from "react-toastify";


const Service = () => {
    // const data=useLoaderData();
    const data=useParams()
    console.log(data);
    
    // console.log(id);
    // const idInt=parseInt(id);
    // const blog=data.find(blog =>blog.id===idInt);
    // console.log(blog);
   
//    const detail=data.find(detail=>detail.id===idInt);
   
    
    
    return (
        <div>
        <Navbar></Navbar>
        <div className="max-w-4xl mx-auto my-10">
        
            
        </div>

        
      </div>
    );
};

export default Service;