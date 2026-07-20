import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import Auth from "../pages/Auth";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          EthioShop
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/checkout" className="relative">
            <FaOpencart className="text-2xl text-gray-700 hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"></span>
          </Link>
        </div>
        <div className="navbar-auth">
          <div className="nabar-auth-link">
            <Link to="/auth" className="btn btn-secondary">
              Login
            </Link>
            <Link to="Auth" className="btn btn-primary">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
