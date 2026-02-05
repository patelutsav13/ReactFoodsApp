// // import React , {useState} from "react";
// // import Footer from "./Footer";
// // import CommonBanner from "./CommonBanner";
// // function Cart()
// // {
// //     return(
// //         <>
// //             <div className="mt-80">
// //                 <CommonBanner title="Your Cart"/>
// //                 <Footer/>
// //             </div>
// //         </>
// //     )
// // }
// // export default Cart;


// // src/pages/Cart.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { incrementQuantity, decrementQuantity, removeItem } from "../redux/cartSlice";
// import CommonBanner from "../pages/CommonBanner";
// import Footer from "../pages/Footer";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const { items } = useSelector(state => state.cart);
//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (items.length === 0) {
//     return (
//       <>
//         <CommonBanner title="Your Cart" />
//         <div className="text-center py-20 text-3xl md:text-5xl lg:text-7xl text-red-500 font-bold">Your cart is empty</div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//     <div className="mt-80">
//         <CommonBanner title="Your Cart"/>
//     </div>
//       <div className="ml-100 mr-100">
//       <div className="px-6 md:px-20 lg:px-40 py-20">
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="border-b-2 border-gray-300">
//                 <th className="py-4 text-xl md:text-2xl lg:text-5xl">Image</th>
//                 <th className="py-4 text-xl md:text-2xl lg:text-5xl">Product Title</th>
//                 <th className="py-4 text-xl md:text-2xl lg:text-5xl">Price</th>
//                 <th className="py-4 text-xl md:text-2xl lg:text-5xl">Quantity</th>
//                 <th className="py-4 text-xl md:text-2xl lg:text-5xl">Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map(item => (
//                 <tr key={item.id} className="border-b">
//                   <td className="py-6"><img src={item.image} className="w-20 h-20 object-contain" /></td>
//                   <td className="py-6 text-lg md:text-2xl font-bold">{item.title}</td>
//                   <td className="py-6 text-red-500 text-lg md:text-2xl">₹{item.price}</td>
//                   <td className="py-6">
//                     <div className="flex items-center gap-4">
//                       <button onClick={() => dispatch(decrementQuantity(item.id))} className="w-10 h-10 bg-gray-200 rounded">-</button>
//                       <span className="text-xl md:text-2xl font-bold">{item.quantity}x</span>
//                       <button onClick={() => dispatch(incrementQuantity(item.id))} className="w-10 h-10 bg-gray-200 rounded">+</button>
//                     </div>
//                   </td>
//                   <td className="py-6 text-center">
//                     <button onClick={() => dispatch(removeItem(item.id))} className="text-red-500 text-5xl">X</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="mt-10 text-2xl md:text-3xl font-bold text-red-500 lg:text-5xl">
//           Subtotal: ₹{total}
//         </div>
//         <p className="text-gray-500 mt-2">Taxes and shipping will calculate at checkout</p>

//         <div className="flex flex-col sm:flex-row gap-6 mt-10">
//           <Link to="/" className="bg-red-500 text-white text-center py-4 px-10 rounded-xl text-xl md:text-2xl font-bold">Continue Shopping</Link>
//           <Link to="/checkout" className="bg-red-500 text-white text-center py-4 px-10 rounded-xl text-xl md:text-2xl font-bold">Proceed to checkout</Link>
//         </div>
//       </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Cart;


// src/pages/Cart.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../redux/cartSlice";
import CommonBanner from "../pages/CommonBanner";
import Footer from "../pages/Footer";
import Foods from "./foods";
import Checkout from "./Checkout";
const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  //   useEffect(() => {
  //     const savedCart = localStorage.getItem("cartItems");
  //     if (savedCart) {
  //       const parsed = JSON.parse(savedCart);
  //       parsed.forEach((item) => dispatch({ type: "cart/addItem", payload: item }));
  //     }
  //   }, [dispatch]);

  //   useEffect(() => {
  //     if (items.length > 0) {
  //       localStorage.setItem("cartItems", JSON.stringify(items));
  //     } else {
  //       localStorage.removeItem("cartItems");
  //     }
  //   }, [items]);

  if (items.length === 0) {
    return (
      <>
        <div className="mt-32 md:mt-40 lg:mt-60">
          <CommonBanner title="Your Cart" />
        </div>
        <div className="text-center py-32 md:py-40 lg:py-60">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-red-500">
            Your cart is empty
          </h1>
          <Link
            to="/foods"
            className="inline-block mt-10 bg-red-500 text-white px-10 py-5 rounded-xl text-2xl md:text-3xl lg:text-5xl font-bold hover:bg-blue-950 transition"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="mt-32 md:mt-40 lg:mt-60">
        <CommonBanner title="Your Cart" />
      </div>

      <div className="px-6 md:px-20 lg:px-28 py-12 lg:py-20">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b-4 border-gray-300 text-left">
                <th className="py-6 text-xl md:text-3xl lg:text-5xl font-bold">Image</th>
                <th className="py-6 text-xl md:text-3xl lg:text-5xl font-bold">Product Title</th>
                <th className="py-6 text-xl md:text-3xl lg:text-5xl font-bold">Price</th>
                <th className="py-6 text-xl md:text-3xl lg:text-5xl font-bold">Quantity</th>
                <th className="py-6 text-xl md:text-3xl lg:text-5xl font-bold">Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b-2 border-gray-200">
                  <td className="py-8">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain rounded-xl border-2 border-red-100"
                    />
                  </td>
                  <td className="py-8">
                    <h3 className="text-lg md:text-2xl lg:text-4xl font-bold text-blue-950">
                      {item.title}
                    </h3>
                  </td>
                  <td className="py-8">
                    <span className="text-red-500 text-xl md:text-3xl lg:text-5xl font-bold">
                      ₹{item.price}
                    </span>
                  </td>
                  <td className="py-8">
                    <div className="flex items-center gap-4 md:gap-6">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full text-2xl md:text-3xl font-bold hover:bg-gray-300 transition"
                      >
                        -
                      </button>
                      <span className="text-xl md:text-3xl lg:text-5xl font-bold min-w-[60px] text-center">
                        {item.quantity}x
                      </span>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full text-2xl md:text-3xl font-bold hover:bg-gray-300 transition"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-8 text-center">
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="text-red-500 text-4xl md:text-5xl lg:text-7xl font-bold hover:scale-125 transition"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 lg:mt-24 text-right">
          <div className="text-3xl md:text-5xl lg:text-7xl font-bold text-red-500">
            Subtotal: ₹{total}
          </div>
          <p className="text-gray-500 text-lg md:text-2xl lg:text-4xl mt-4">
            Taxes and shipping will be calculated at checkout
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-6 mt-12 lg:mt-20">
          <Link
            to="/foods"
            className="bg-red-500 text-white text-center py-4 px-10 rounded-xl text-xl md:text-3xl lg:text-5xl font-bold hover:bg-blue-950 transition"
          >
            Continue Shopping
          </Link>
          <Link
            to="/checkout"
            className="bg-red-500 text-white text-center py-4 px-10 rounded-xl text-xl md:text-3xl lg:text-5xl font-bold hover:bg-blue-950 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;