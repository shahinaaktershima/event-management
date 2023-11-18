import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Booking = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">{
                data.map(datas=> <div key={datas.id}>
                 <div className="card  glass">
  <figure><img className="h-[250px] w-full" src={datas.image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{datas.name}</h2>
    <p>{datas.price}</p>
  
    <div className="card-actions justify-end">
    <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>

                </div>)
                }</div>
                <Footer></Footer>
        </div>
    );
};

export default Booking;