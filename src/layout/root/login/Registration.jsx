
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../AuthProvider';
import Navbar from '../home/Navbar';
import Swal from 'sweetalert2';


const Registration = () => {
 const [error,setError]=useState('')
  const{createUser}=useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
  const handleRegister=e=>{
    e.preventDefault();
    console.log(e.currentTarget);
       
    const form =new FormData(e.currentTarget);
    console.log(form.get('email'));
    const email=form.get('email');
    const password=form.get('password');
    const name=form.get('name');
    const photo =form.get('photo');
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
     setError('your password should have one uppercase one lower case and one special character');
    }
    else{
      createUser(email,password)
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
          title: "registered successfully"
        });
        navigate(location?.state?location.state:'/');
    }
      )
      .catch(err=>{console.log(err)
        toast('oops its an error');
      }
     
      )
    }
    

    
   
  }
    return (
        <div>
          <Navbar></Navbar>
          <h2 className="text-center text-2xl font-semibold">Please Register</h2>


<form onSubmit={handleRegister}  className="card-body lg:w-1/2 w-full md:3/4 mx-auto">
  <div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label>
    <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Photo url</span>
    </label>
    <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
  </div>
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
    <button className="btn btn-primary">Register</button>
    <ToastContainer></ToastContainer>
  </div>
</form>
<p className='text-blue-500 font-bold text-center'>{error}</p>
<p className="mt-4 text-center ">Already  have an account ?<Link className="font-bold text-blue-600" to='/login'>Login</Link></p> 
        </div>
    )
};

export default Registration;