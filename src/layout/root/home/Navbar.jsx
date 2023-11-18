import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider";


const Navbar = () => {
  const {user,logout}=useContext(AuthContext);
  const handleLogout=()=>{
    logout()
    .then()
    .catch(error=>{
      console.log(error);
    })
  }
  const links=<>
 <li> <NavLink to='/'> Home </NavLink></li>
 <li> <NavLink to='/registration'>Registration</NavLink></li>
 <li> <NavLink to='/bookings'>bookings </NavLink></li>
 <li> <NavLink to='/bubble'>Chat bubble</NavLink></li>
  
  </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {
                links
             }
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Social services</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                links
            }
          </ul>
        </div>
        <div className="navbar-end">
        {
          user? <div className="flex lg:flex-row flex-col items-center "><p>{user.displayName}</p><img className="h-[40px] w-[40px] rounded-full"  src={user.photoURL
          } alt="" /><Link onClick={handleLogout} className="btn">sign out</Link></div>:<Link to='/login' className="btn">Login</Link>
        }
        </div>
      </div>
    );
};

export default Navbar;