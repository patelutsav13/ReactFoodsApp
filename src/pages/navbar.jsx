

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import UserIcon from "../assets/user.png";
// import logo from "../assets/logo.png";
// import Bag from "../assets/cartBag.png";
// import Admin from "./admin.jsx"
// function Navbar() {
//   const location = useLocation();

//   const linkClass = (path) =>
//     (location.pathname === path ? "text-red-500" : "text-black") +
//     " hover:text-red-500 focus:text-red-500 cursor-pointer";

//   return (
//     <div className="flex items-center justify-between px-10 py-3 font-sans bg-white shadow-2xl fixed top-0 left-0 right-0 z-[1000]">

//       <div className="ml-100 flex items-center gap-4 cursor-pointer text-4xl">
//         <div className="flex flex-col items-center">
//           <img src={logo} alt="Fresh Bites Logo" className="w-50 h-50" />
//           <h5 className="font-bold text-6xl hover:text-red-500">Fresh Bites</h5>
//         </div>

//         <div className="flex gap-8 ml-380 text-5xl font-bold">
//           <Link className={linkClass("/home")} to="/home">Home</Link>
//           <Link className={linkClass("/foods") + " ml-20"} to="/foods">Foods</Link>
//           <Link className={linkClass("/cart") + " ml-20"} to="/cart">Cart</Link>
//           <Link className={linkClass("/contact") + " ml-20"} to="/contact">Contact</Link>
//         </div>
//       </div>

//       <div className="flex gap-6 text-xl mr-100">
//           <Link to="/cart" className="ml-15">
//             <img src={Bag} alt="Cart" className="w-28 h-20" />
//           </Link>
//           <Link to="/admin" className="ml-15">
//             <img src={UserIcon} alt="User" className="w-28 h-20" />
//           </Link>
//       </div>
//     </div>


//   );
// }

// export default Navbar;


// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import UserIcon from "../assets/user.png";
// import logo from "../assets/logo.png";
// import Bag from "../assets/cartBag.png";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const linkClass = (path) =>
//     (location.pathname === path ? "text-red-500" : "text-black") +
//     " hover:text-red-500 block lg:inline-block py-2 cursor-pointer transition-colors";

//   return (
//     <nav className="bg-white h-auto lg:h-70 shadow-2xl fixed top-0 left-0 right-0 z-[1000] font-sans">
//       <div className="flex items-center justify-between py-3 px-6 lg:ml-[100px] lg:mr-[100px]">

//         <Link to="/home" className="flex flex-col items-center">
//           <img src={logo} alt="Fresh Bites Logo" className="w-30 h-30 lg:w-24 lg:h-24" />
//           <h5 className="font-bold text-xl lg:text-3xl hover:text-red-500 transition-colors">Fresh Bites</h5>
//         </Link>

//         <div className="hidden lg:flex gap-12 text-6xl font-bold">
//           <Link className={linkClass("/home")}  to="/home">Home</Link>
//           <Link className={linkClass("/foods")} to="/foods">Foods</Link>
//           <Link className={linkClass("/cart")} to="/cart">Cart</Link>
//           <Link className={linkClass("/contact")} to="/contact">Contact</Link>
//         </div>

//         <div className="flex items-center gap-4 lg:gap-8">
//           <Link to="/cart" className="relative">
//             <img src={Bag} alt="Cart" className="w-10 h-8 lg:w-16 lg:h-12" />
//           </Link>
//           <Link to="/admin">
//             <img src={UserIcon} alt="User" className="w-10 h-8 lg:w-16 lg:h-12" />
//           </Link>

//           <button 
//             className="lg:hidden text-4xl focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? '✕' : '☰'}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-100 px-10 py-6 flex flex-col gap-4 text-3xl font-bold shadow-inner">
//           <Link className={linkClass("/home")} to="/home" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link className={linkClass("/foods")} to="/foods" onClick={() => setIsOpen(false)}>Foods</Link>
//           <Link className={linkClass("/cart")} to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
//           <Link className={linkClass("/contact")} to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import UserIcon from "../assets/user.png";
// import logo from "../assets/logo.png";
// import Bag from "../assets/cartBag.png";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const linkClass = (path) =>
//     (location.pathname === path ? "text-red-500" : "text-black") +
//     " hover:text-red-500 block lg:inline-block py-2 cursor-pointer transition-colors";

//   return (
//     <nav className="bg-white lg:h-80 shadow-2xl fixed top-0 left-0 right-0 z-[1000] font-sans flex items-center">
//       <div className="flex items-center ml-0 lg:ml-100 mr-0 lg:mr-100 justify-between w-full py-3 px-6 lg:px-[100px] h-full">

//         <Link to="/" className="flex flex-col items-center justify-center">
//           <img src={logo} alt="Fresh Bites Logo" className="w-16 h-16 lg:w-50 lg:h-50 object-contain" />
//           <h5 className="font-bold text-xl lg:text-6xl hover:text-red-500 transition-colors">Fresh Bites</h5>
//         </Link>

//         <div className="hidden lg:flex gap-50 text-5xl font-bold items-center">
//           <Link className={linkClass("/")} to="/">Home</Link>
//           <Link className={linkClass("/foods")} to="/foods">Foods</Link>
//           <Link className={linkClass("/cart")} to="/cart">Cart</Link>
//           <Link className={linkClass("/contact")} to="/contact">Contact</Link>
//         </div>

//         <div className="flex items-center gap-6 lg:gap-12 h-full">
//           <Link to="/cart" className="relative flex items-center">
//             <img src={Bag} alt="Cart" className="w-10 h-8 lg:w-24 lg:h-20 object-contain" />
//           </Link>
//           <Link to="/admin" className="flex items-center">
//             <img src={UserIcon} alt="User" className="w-10 h-8 lg:w-24 lg:h-20 object-contain" />
//           </Link>

//           <button 
//             className="lg:hidden text-4xl focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? '✕' : '☰'}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full lg:hidden bg-white border-t border-gray-100 px-10 py-6 flex flex-col gap-4 text-3xl font-bold shadow-inner">
//           <Link className={linkClass("/home")} to="/home" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link className={linkClass("/foods")} to="/foods" onClick={() => setIsOpen(false)}>Foods</Link>
//           <Link className={linkClass("/cart")} to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
//           <Link className={linkClass("/contact")} to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem, saveCartToDB, clearCart } from "../redux/cartSlice";
import { X, LogOut } from "lucide-react";
import logo from "../assets/logo.png";
import Bag from "../assets/cartBag.png";
import UserIcon from "../assets/user.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Check for logged-in user on component mount and location change
  useEffect(() => {
    const customerUser = localStorage.getItem('customerUser');
    if (customerUser) {
      try {
        setUser(JSON.parse(customerUser));
      } catch (err) {
        console.error('Error parsing user data:', err);
        localStorage.removeItem('customerUser');
      }
    }
  }, [location]);

  const handleLogout = async () => {
    // Save cart to database before logout
    if (user && cartItems.length > 0) {
      await dispatch(saveCartToDB(user._id, cartItems));
    }

    // Clear cart from UI
    dispatch(clearCart());

    // Remove user session
    localStorage.removeItem('customerUser');
    setUser(null);
    navigate('/');
  };

  const linkClass = (path) =>
    location.pathname === path
      ? "text-red-500"
      : "text-black hover:text-red-500 transition-colors";

  return (
    <>
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-[1000] font-sans border-b-2 border-gray-100">
        <div className="flex items-center justify-between w-full py-3 md:py-4 px-4 md:px-8 lg:px-12 xl:px-20 max-w-screen-2xl mx-auto">
          <Link to="/" className="flex flex-col items-center justify-center group">
            <div className="relative">
              <img src={logo} alt="Fresh Bites Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <div className="absolute inset-0 bg-red-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <h5 className="font-bold text-base md:text-xl lg:text-2xl xl:text-3xl hover:text-red-500 transition-all duration-300 mt-1">Fresh Bites</h5>
          </Link>

          <div className="hidden lg:flex gap-6 xl:gap-10 text-lg xl:text-2xl font-bold items-center">
            <Link className={linkClass("/")} to="/">Home</Link>
            <Link className={linkClass("/foods")} to="/foods">Foods</Link>
            <Link className={linkClass("/myorders")} to="/myorders">My Orders</Link>
            <Link className={linkClass("/cart")} to="/cart">Cart</Link>
            <Link className={linkClass("/contact")} to="/contact">Contact</Link>
          </div>

          <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
            <button onClick={() => setIsCartOpen(true)} className="relative flex items-center group">
              <div className="relative p-2 rounded-full transition-all duration-300 group-hover:bg-red-50">
                <img src={Bag} alt="Cart" className="w-6 h-6 md:w-8 md:h-7 lg:w-10 lg:h-9 object-contain transform transition-all duration-300 group-hover:scale-110" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs md:text-sm font-bold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center shadow-lg animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            {user ? (
              <div className="hidden lg:flex items-center gap-3">
                <span className="text-sm lg:text-base xl:text-lg font-semibold text-gray-700 px-3 py-1 bg-gray-100 rounded-full">
                  Hi, {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="group relative p-2 rounded-full hover:bg-red-50 transition-all duration-300"
                  title="Logout"
                >
                  <LogOut className="w-6 h-6 text-red-500 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                </button>
              </div>
            ) : (
              <Link to="/admin" className="group relative p-2 rounded-full hover:bg-red-50 transition-all duration-300">
                <img src={UserIcon} alt="User" className="w-6 h-6 md:w-8 md:h-7 lg:w-10 lg:h-9 object-contain transform transition-all duration-300 group-hover:scale-110" />
              </Link>
            )}

            <button
              className="lg:hidden text-3xl focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full lg:hidden bg-white border-t-2 border-gray-100 px-10 py-6 flex flex-col gap-4 text-3xl font-bold shadow-2xl animate-in slide-in-from-top duration-300">
            <Link className={linkClass("/")} to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link className={linkClass("/foods")} to="/foods" onClick={() => setIsMenuOpen(false)}>Foods</Link>
            <Link className={linkClass("/myorders")} to="/myorders" onClick={() => setIsMenuOpen(false)}>My Orders</Link>
            <Link className={linkClass("/cart")} to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</Link>
            <Link className={linkClass("/contact")} to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

            {user ? (
              <div className="border-t-2 border-gray-200 pt-4 mt-2">
                <p className="text-gray-700 mb-3 bg-gray-100 px-4 py-2 rounded-lg">Hi, {user.name}</p>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <LogOut className="w-6 h-6" />
                  Logout
                </button>
              </div>
            ) : (
              <Link className="text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg transition-all duration-300" to="/admin" onClick={() => setIsMenuOpen(false)}>Login</Link>
            )}
          </div>
        )}
      </nav>

      {/* Right Side Cart Drawer */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0  bg-opacity-20 z-[998] pointer-events-none bg-black/60 "
          ></div>

          {/* Drawer Panel */}
          <div className="fixed right-4 top-24 md:top-28 lg:top-32 bottom-20 md:bottom-24 w-80 md:w-96 lg:w-[28rem] bg-white shadow-2xl z-[999] flex flex-col rounded-2xl">
            <div className="flex justify-between items-center p-4 md:p-6 border-b flex-shrink-0">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-950">
                Your Cart ({cartCount})
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="text-2xl md:text-3xl hover:text-red-500">
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 text-sm md:text-base py-10">
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 md:gap-4 border-b pb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg border border-red-100"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm md:text-base text-blue-950">{item.title}</h4>
                      <p className="text-red-500 font-bold text-xs md:text-sm mt-1">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="w-7 h-7 md:w-8 md:h-8 bg-gray-200 rounded-full text-base md:text-lg font-bold hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span className="text-sm md:text-base font-bold w-8 md:w-10 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="w-7 h-7 md:w-8 md:h-8 bg-gray-200 rounded-full text-base md:text-lg font-bold hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="text-red-500 text-lg md:text-xl font-bold hover:text-red-700"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t p-4 md:p-6 bg-white flex-shrink-0">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-base md:text-lg lg:text-xl font-bold text-blue-950">Subtotal:</span>
                  <span className="text-base md:text-lg lg:text-xl font-bold text-red-500">₹{cartTotal}</span>
                </div>
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-red-500 text-white text-center py-2 md:py-3 rounded-lg text-sm md:text-base lg:text-lg font-bold hover:bg-red-600 transition-colors"
                >
                  Checkout
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;