import { Link } from "react-router-dom";


const Services = ({service}) => {
    
   const{id,name,image,price,description}=service;
   console.log(id);
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
           
            {name}
          </h2>
          <p>price:{price}</p>
          <p>{
          description.length >100 ? <div>
            {
                description.slice(0,100)
            }
             <div className="card-actions justify-end"><Link to={`/details/${id}`} className="btn btn-secondary" > Details</Link></div>
            
          </div>: <p>{description}</p>
          
          }</p>
         
          </div>
        </div>
     
    );
};

export default Services;