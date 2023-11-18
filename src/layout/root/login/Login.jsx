import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../home/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const Login = () => {
  const {login,googleSignin}=useContext(AuthContext);
  
  const[error,setError]=useState("");
  const location=useLocation();
  const navigate=useNavigate();
    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
       
        const form =new FormData(e.currentTarget);
        console.log(form.get('email'));
        const email=form.get('email');
        const password=form.get('password');
        
        
        login(email,password)
        .then(res=>{console.log(res.user);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
        navigate(location?.state?location.state:'/');
        
        
        })
        .catch(err=>{console.log(err);
          toast('oppss you give us wrong information');
        setError(err)
        })

      
       
       
    }
    const handleGoogle=()=>{
      googleSignin()
      .then(res=>{console.log(res.user)
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
        navigate(location?.state?location.state:'/');
      })
      .catch(err=>{
        console.log(err);
      })
      }
    return( <div>
    <Navbar></Navbar>
    <h2 className="text-center text-2xl font-semibold">Please login</h2>


<form onSubmit={handleLogin}  className="card-body lg:w-1/2 w-full md:3/4 mx-auto">
<div className="form-control">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input type="password" placeholder="password" name="password" className="input input-bordered" required />
  <label className="label">
    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
  </label>
</div>
<div className="form-control mt-6">
  <button className="btn btn-primary">Login</button>
  
  <ToastContainer />
</div>
</form>
<p className="text-blue-500 text-center">{error.message}</p>
<p className="mt-4 text-center ">Dont have an account? <Link className="font-bold text-blue-600" to='/registration'>Register</Link></p>
<div className="text-center"><button onClick={handleGoogle} className="btn">Signin with Google</button></div> 

</div>


);

};

export default Login;