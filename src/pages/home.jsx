

// // src/pages/home.jsx in ReactFoodsApp/foodApp (updated to fetch from localStorage)
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { User, Menu, X, ShoppingBag} from 'lucide-react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addItem , incrementQuantity,
//   decrementQuantity,
//   removeItem } from '../redux/cartSlice';

// import Bike from "../assets/bike.png";
// import Car from "../assets/car.png";
// import Shield from "../assets/shield.png";
// import Img1 from "../assets/image.png";
// import Img2 from "../assets/image1.png";
// import Img3 from "../assets/image2.png";
// import Img4 from "../assets/image3.png";
// import Img5 from "../assets/image4.png";
// import Img6 from "../assets/image5.png";
// import Img7 from "../assets/image6.png";
// import Img8 from "../assets/image7.png";
// import Img9 from "../assets/image8.png";
// import Img10 from "../assets/image9.png";
// import Img11 from "../assets/image10.png";
// import Img12 from "../assets/image11.png";
// import Img13 from "../assets/image12.png";
// import Img14 from "../assets/image13.png";
// // import Img15 from "../assets/image14.png";
// import Img16 from "../assets/image15.png";
// import Img17 from "../assets/image16.png";
// import Img18 from "../assets/image17.png";
// import Img19 from "../assets/image18.png";
// import Img20 from "../assets/image19.png";
// import Img21 from "../assets/image20.png";
// import Burger from "../assets/burger.png";
// import Pizza from "../assets/pizza.png";
// import Drinks from "../assets/snacks.png";
// import Snacks from "../assets/drinks.png";
// import Bike1 from "../assets/image21.png";
// import Footer from "./Footer";
// import Img22 from "../assets/image22.png";
// // import ProDetails from "./proDetails";

// export const products = [
//   { id: 1, title: "Chicken Burger", price: 149, category: "Burger", image: Img5 },
//   { id: 2, title: "Cheese Burger", price: 139, category: "Burger", image: Img12 },
//   { id: 3, title: "Royal Cheese Burger", price: 169, category: "Burger", image: Img16 },
//   { id: 4, title: "Vegetarian Pizza", price: 199, category: "Pizza", image: Img6 },
//   { id: 5, title: "Double Cheese Margherita", price: 229, category: "Pizza", image: Img10 },
//   { id: 6, title: "Mexican Green Wave", price: 239, category: "Pizza", image: Img11 },
//   { id: 7, title: "Seafood Pizza", price: 259, category: "Pizza", image: Img13 },
//   { id: 8, title: "Thin Cheese Pizza", price: 110, category: "Pizza", image: Img14 },
//   { id: 9, title: "Crunchy Bread", price: 35, category: "Snacks", image: Img17 },
//   { id: 10, title: "Garlic Cheese Bread", price: 90, category: "Snacks", image: Img18 },
//   { id: 11, title: "Veg Grill Sandwich", price: 119, category: "Snacks", image: Img19 },
//   { id: 12, title: "Red Bull", price: 80, category: "Drinks", image: Img20 },
//   { id: 13, title: "Campa Cola", price: 25, category: "Drinks", image: Img21 },
// ];

// const testimonials = [
//   {
//     id: 1,
//     name: "Shivangi Joshi",
//     text: "Fresh Bites lives up to its name! Every bite bursts with freshness and flavor. From the crisp salads to the hearty sandwiches, each dish is a delightful journey for the taste buds.",
//     avatar: "https://tse3.mm.bing.net/th/id/OIP.cLFlG9qe5tbHezzUfrb1EQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
//   },
//   {
//     id: 2,
//     name: "Virat Kohli",
//     text: "Fresh Bites combines convenience with quality like no other. Ordering online is a breeze, and the food arrives promptly, still retaining its freshness. It's the perfect solution for busy days without compromising on taste.",
//     avatar: "https://tse1.mm.bing.net/th/id/OIP.4aM4ETKxJ5AJKORVUdEhHAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
//   },
//   {
//     id: 3,
//     name: "Rohit Sharma",
//     text: "Fresh Bites redefines freshness with every dish. I couldn't believe the difference in taste until I tried their farm-to-table ingredients. It's like they've captured the essence of freshness in every bite.",
//     avatar: "https://images.news18.com/ibnlive/uploads/2024/07/rohit-sharma-1-2024-07-f31b2b81746e93de6ab1c683fc455ff0-16x9.jpg"
//   }
// ];

// function Home() {
//   const [active, setActive] = useState("All");
//   const [current, setCurrent] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [fetchedProducts, setFetchedProducts] = useState(products);

//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);
//   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   useEffect(() => {
//     const savedItems = localStorage.getItem('foodItems');
//     if (savedItems) {
//       setFetchedProducts(JSON.parse(savedItems));
//     }
//   }, []);

//   const filteredProducts = active === "All" ? fetchedProducts : fetchedProducts.filter(p => p.category === active);

//   const handleAddToCart = (product) => {
//     dispatch(addItem(product));
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="font-sans overflow-x-hidden">
//       <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 md:px-20 lg:px-40 py-4 flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <div className="bg-red-500 p-2 rounded-full"><ShoppingBag size={24} color="white" /></div>
//           <span className="text-3xl font-bold text-blue-950">Fresh Bites</span>
//         </div>

//         <div className="hidden lg:flex gap-10 text-2xl font-bold text-blue-950">
//           <Link to="/" className="hover:text-red-500 transition">Home</Link>
//           <Link to="/foods" className="hover:text-red-500 transition">Foods</Link>
//           <Link to="/cart" className="hover:text-red-500 transition">Cart</Link>
//           <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
//         </div>

//         <div className="hidden lg:flex items-center">

//           <button onClick={() => setIsCartOpen(true)} className="relative">
//             <ShoppingBag size={30} className="text-blue-950" />
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs md:text-sm rounded-full w-6 h-6 flex items-center justify-center font-bold">
//                 {cartCount}
//               </span>
//             )}
//           </button>

//           <User size={30} className="text-blue-950 cursor-pointer" />
//         </div>

//         <button className="lg:hidden text-blue-950" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
//         </button>

//         {isMenuOpen && (
//           <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-10 gap-6 text-3xl font-bold text-blue-950 lg:hidden animate-in fade-in zoom-in duration-300">
//             <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
//             <Link to="/foods" onClick={() => setIsMenuOpen(false)}>Foods</Link>
//             <Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</Link>
//             <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
//           </div>
//         )}
//       </nav>

//         {isCartOpen && (
//         <div className="fixed inset-0 z-50 flex justify-end">
//           <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsCartOpen(false)}></div>
//           <div className="relative bg-white w-full max-w-md shadow-2xl h-full overflow-y-auto">
//             <div className="p-6 border-b flex justify-between items-center">
//               <h2 className="text-2xl md:text-3xl font-bold">Your Cart ({cartCount})</h2>
//               <button onClick={() => setIsCartOpen(false)}><X size={30} /></button>
//             </div>

//             <div className="p-6 space-y-6">
//               {cartItems.length === 0 ? (
//                 <p className="text-center text-gray-500 text-xl">Your cart is empty</p>
//               ) : (
//                 cartItems.map(item => (
//                   <div key={item.id} className="flex gap-4 items-center border-b pb-4">
//                     <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded" />
//                     <div className="flex-1">
//                       <h4 className="font-bold text-lg">{item.title}</h4>
//                       <p className="text-red-500 font-bold">₹{item.price} x {item.quantity}</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <button onClick={() => dispatch(decrementQuantity(item.id))} className="w-8 h-8 bg-gray-200 rounded">-</button>
//                       <span className="font-bold">{item.quantity}</span>
//                       <button onClick={() => dispatch(incrementQuantity(item.id))} className="w-8 h-8 bg-gray-200 rounded">+</button>
//                     </div>
//                     <button onClick={() => dispatch(removeItem(item.id))} className="text-red-500">×</button>
//                   </div>
//                 ))
//               )}
//             </div>

//             {cartItems.length > 0 && (
//               <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t">
//                 <div className="flex justify-between text-xl md:text-2xl font-bold mb-4">
//                   <span>Subtotal:</span>
//                   <span>₹{cartTotal}</span>
//                 </div>
//                 <Link to="/checkout" onClick={() => setIsCartOpen(false)} className="block text-center bg-red-500 text-white py-4 rounded-xl text-xl md:text-2xl font-bold">
//                   Checkout
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}


//       <div className="flex flex-col lg:flex-row mt-32 md:mt-40 lg:mt-60 px-6 md:px-20 lg:px-40 gap-10">
//         <div className="w-full lg:w-1/2">
//           <div className="flex ml-0 md:ml-20 lg:ml-100 mt-10 lg:mt-70">
//             <h3 className="text-3xl md:text-5xl lg:text-7xl">Easy way to make an order</h3>
//           </div>

//           <div className="flex flex-wrap ml-0 md:ml-20 lg:ml-100 mt-6 lg:mt-10 gap-2 lg:gap-5">
//             <span className="text-red-500 text-5xl md:text-7xl lg:text-9xl font-bold">HUNGRY?</span>
//             <h1 className="text-blue-950 text-5xl md:text-7xl lg:text-9xl font-bold">Just wait</h1>
//           </div>

//           <div className="flex flex-wrap ml-0 md:ml-20 lg:ml-100 mt-2 lg:mt-10 gap-2 lg:gap-5">
//             <span className="text-blue-950 text-5xl md:text-7xl lg:text-9xl font-bold">food at</span>
//             <h1 className="text-red-500 text-5xl md:text-7xl lg:text-9xl font-bold">your door</h1>
//           </div>

//           <div className="ml-0 md:ml-20 lg:ml-100 mt-10">
//             <h1 className="text-gray-400 text-xl md:text-3xl lg:text-5xl">
//               Welcome to Fresh Bites, your ultimate destination for delicious and fresh online food ordering!
//             </h1>
//           </div>

//           <div className="ml-0 md:ml-20 lg:ml-100 mt-10">
//             <h1 className="text-gray-400 text-xl md:text-3xl lg:text-5xl">ordering!</h1>
//           </div>

//           <div className="flex flex-col sm:flex-row ml-0 md:ml-20 lg:ml-100 mt-12 lg:mt-20 gap-6 lg:gap-20">
//             <button className="px-10 lg:px-15 py-4 lg:py-6 bg-red-500 text-2xl md:text-3xl lg:text-5xl font-bold border border-red-500 text-white rounded-md hover:bg-blue-950 transition cursor-pointer">
//               Order Now &gt;
//             </button>
//             <Link to="/foods" className="px-10 lg:px-15 py-4 lg:py-6 text-red-500 text-2xl md:text-3xl lg:text-5xl font-bold bg-white border border-red-500 rounded-md cursor-pointer text-center">
//               See All Foods
//             </Link>
//           </div>

//           <div className="flex flex-col sm:flex-row ml-0 md:ml-20 lg:ml-100 mt-12 lg:mt-20 gap-10">
//             <h1 className="font-bold text-blue-950 text-xl md:text-3xl lg:text-5xl flex items-center">
//               <img src={Car} alt="Car" className="w-10 lg:w-15 h-10 lg:h-15 mr-4"/>No Shipping Charge
//             </h1>
//             <h1 className="font-bold text-blue-950 text-xl md:text-3xl lg:text-5xl flex items-center">
//               <img src={Shield} alt="Shield" className="w-12 lg:w-20 h-12 lg:h-20 mr-4"/> 100% Secure Checkout
//             </h1>
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-20 px-4 lg:px-0">
//           <img src={Bike} alt="Bike" className="w-full max-w-3xl h-auto" />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-20 lg:px-40 mt-10  lg:mt-10 ml-100 mr-100">
//         {[ {img: Img1, label: "Fastfood"}, {img: Img2, label: "Pizza"}, {img: Img3, label: "Asian Food"}, {img: Img4, label: "Cold Drink"} ].map((category, idx) => (
//           <div key={idx} className="flex font-bold rounded-2xl text-2xl md:text-4xl lg:text-6xl bg-red-100 h-40 lg:h-70 justify-center items-center transition-all duration-500 transform hover:-translate-y-10 cursor-pointer">
//             <img src={category.img} alt={category.label} className="w-20 lg:w-40 h-24 lg:h-50" />
//             <h1 className="ml-4 lg:ml-6">{category.label}</h1>
//           </div>
//         ))}
//       </div>


//         <div className="px-6 md:px-20 lg:px-40 mt-30 text-center flex flex-col items-center">
//   <div>
//     <h1 className="text-red-500 text-3xl md:text-4xl lg:text-6xl font-bold mt-10">
//       What We Serve
//     </h1>
//   </div>

//   <div className="mt-10">
//     <h1 className="text-blue-950 text-4xl md:text-6xl lg:text-9xl font-bold">
//       Just sit back at home
//     </h1>
//   </div>

//   <div className="flex flex-row justify-center items-center gap-4 mt-6 lg:mt-10">
//     <h1 className="text-blue-950 text-4xl md:text-6xl lg:text-8xl font-bold">
//       we will
//     </h1>
//     <h1 className="text-red-500 text-4xl md:text-6xl lg:text-8xl font-bold">
//       take care
//     </h1>
//   </div>

//   <h1 className="text-gray-600 text-xl md:text-3xl lg:text-6xl font-bold mt-10 max-w-7xl">
//     At Fresh Bites, we serve a delectable array of dishes crafted with care and made with the freshest ingredients.
//   </h1>

//   <h1 className="text-gray-600 text-xl md:text-3xl lg:text-6xl font-bold mt-10 max-w-7xl">
//     From wholesome salads to savory entrees and delightful desserts, there's something to satisfy every craving.
//   </h1>
// </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20 lg:px-40 mt-20 lg:mt-50 ml-100 mr-100">
//         <div className="flex flex-col items-center">
//           <img src={Img7} alt="Quick" className="w-24 lg:w-auto h-24 lg:h-auto mb-6" />
//           <h1 className="text-3xl lg:text-7xl font-bold mb-4 lg:mb-7">Quick Delivery</h1>
//           <h4 className="text-gray-600 text-lg lg:text-6xl font-bold leading-tight px-4 text-center">
//             Experience lightning-fast delivery with Fresh Bites, ensuring your meal arrives swiftly to your doorstep.
//           </h4>
//         </div>

//         <div className="flex flex-col items-center">
//           <img src={Img8} alt="Dine" className="w-24 lg:w-auto h-24 lg:h-auto mb-6" />
//           <h1 className="text-3xl lg:text-7xl font-bold mb-4 lg:mb-7">Super Dine In</h1>
//           <h4 className="text-gray-600 text-lg lg:text-6xl font-bold leading-tight px-4 text-center">
//             Experience the ultimate dining convenience with Super Dine In, where delicious meals are just a click away.
//           </h4>
//         </div>

//         <div className="flex flex-col items-center">
//           <img src={Img9} alt="Pick" className="w-24 lg:w-auto h-24 lg:h-auto mb-6" />
//           <h1 className="text-3xl lg:text-7xl font-bold mb-4 lg:mb-7">Easy Pick Up</h1>
//           <h4 className="text-gray-600 text-lg lg:text-6xl font-bold leading-tight px-4 text-center">
//             Enjoy the convenience of easy pick-up options, making your Fresh Bites experience even more seamless.
//           </h4>
//         </div>
//       </div>

//       <div className="px-6 md:px-20 lg:px-40 mt-32 lg:mt-80 ml-100 mr-100">
//         <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-blue-950 text-center mb-12 lg:mb-20">Popular Foods</h1>

//         <div className="bg-red-500 rounded-2xl px-6 py-4 lg:py-6 flex flex-wrap items-center justify-center lg:justify-between gap-6 min-h-[100px] lg:h-60 mb-20">
//           <button onClick={() => setActive("All")} className={`text-white ml-250 text-2xl lg:text-5xl font-bold cursor-pointer transition ${active === 'All' ? 'underline' : ''} `}>All</button>

//           <button onClick={() => setActive("Burger")} className="text-white text-2xl lg:text-5xl font-bold flex items-center gap-4 cursor-pointer hover:scale-105 transition ">
//             <img src={Burger} alt="Burger" className="h-10 lg:h-20 w-10 lg:w-20" />Burger
//           </button>

//           <button onClick={() => setActive("Pizza")} className="text-white text-2xl lg:text-5xl font-bold flex items-center gap-4 cursor-pointer hover:scale-105 transition">
//             <img src={Pizza} alt="Pizza" className="h-10 lg:h-20 w-10 lg:w-20" />Pizza
//           </button>

//           <button onClick={() => setActive("Snacks")} className="text-white text-2xl lg:text-5xl font-bold flex items-center gap-4 cursor-pointer hover:scale-105 transition">
//             <img src={Snacks} alt="Snacks" className="h-10 lg:h-20 w-10 lg:w-20" />Snacks
//           </button>

//           <button onClick={() => setActive("Drinks")} className="text-white mr-250 text-2xl lg:text-5xl font-bold flex items-center gap-4 cursor-pointer hover:scale-105 transition">
//             <img src={Drinks} alt="Drinks" className="h-10 lg:h-20 w-10 lg:w-20" />Drinks
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
//           {filteredProducts.map((item) => (
//             <div key={item.id} className="border-2 border-red-500 rounded-2xl p-6 overflow-hidden flex flex-col items-center hover:shadow-2xl transition duration-300">
//               <img src={item.image} className="w-40 lg:w-100 h-40 lg:h-100 transition-all duration-700 ease-in-out hover:scale-110 object-contain" alt={item.title} />
//               <Link to={`/product/${item.id}`}>
//                 <h2 className="text-2xl lg:text-5xl font-bold text-center mt-6 cursor-pointer hover:text-red-500 transition">{item.title}</h2>
//               </Link>
//               <div className="flex justify-between items-center w-full mt-8">
//                 <span className="text-red-500 text-3xl lg:text-6xl font-bold">₹{item.price}</span>
//                 <button onClick={() => handleAddToCart(item)} className="bg-red-500 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-xl lg:rounded-2xl text-xl md:text-2xl lg:text-5xl font-semibold cursor-pointer ">Add to Cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 lg:px-40 min-h-screen mt-20 lg:mt-60 gap-16">
//         <div className="w-full lg:w-1/2 flex items-center justify-center">
//           <img src={Bike1} alt="Bike" className="w-full max-w-2xl h-auto" />
//         </div>

//         <div className="w-full lg:w-1/2 flex flex-col gap-10">
//           <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-blue-950">Why Fresh Bites?</h2>
//           <p className="text-gray-600 text-xl md:text-3xl lg:text-5xl leading-relaxed">
//             At Fresh Bites, we're not just a food service — we're a culinary journey. Discover the unparalleled freshness and taste that sets us apart.
//           </p>

//           <div className="space-y-12">
//             {[ {t: "Fresh and tasty foods", d: "Indulge in a world of fresh and tasty foods meticulously prepared by our talented chefs."},
//                {t: "Quality support", d: "At Fresh Bites, we pride ourselves on delivering not only exceptional food but also outstanding customer support."},
//                {t: "Order from any location", d: "With our convenient platform, delicious food is always just a tap away."}
//             ].map((point, i) => (
//               <div key={i} className="flex items-start gap-6">
//                 <span className="text-blue-950 text-3xl lg:text-5xl">✔</span>
//                 <div>
//                   <h4 className="font-bold text-blue-950 text-2xl lg:text-5xl mb-4">{point.t}</h4>
//                   <p className="text-gray-500 text-lg lg:text-5xl leading-snug">{point.d}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="bg-white py-16 px-6 md:px-12 lg:px-40 mt-20 lg:mt-40 ml-100 mr-100">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
//           <div className="w-full lg:w-1/2 space-y-10">
//             <div>
//               <h4 className="text-red-600 font-bold text-4xl lg:text-8xl mb-6">Testimonial</h4>
//               <h1 className="text-gray-600 font-bold text-xl lg:text-4xl leading-snug">
//                 Fresh Bites truly lives up to its name! Every bite bursts with freshness and flavor.
//               </h1>
//               <h2 className="text-3xl md:text-5xl lg:text-8xl flex flex-wrap font-bold text-gray-900 leading-tight mt-10">
//                 What our <span className="text-red-600 mx-3">customers</span> are saying
//               </h2>
//             </div>

//             <div className="relative min-h-[350px] ">
//               {testimonials.map((item, index) => (
//                 <div key={item.id} className={`transition-all duration-700 absolute top-0 left-0 w-full ${index === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
//                   <p className="text-gray-600 text-xl lg:text-6xl italic leading-relaxed mb-10">"{item.text}"</p>
//                   <div className="flex items-center gap-6">
//                     <img src={item.avatar} className="w-16 lg:w-30 h-16 lg:h-30 rounded-full border-2 border-red-100" alt={item.name} />
//                     <span className="font-bold text-gray-800 text-2xl lg:text-5xl">{item.name}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex gap-4 mt-90">
//               {testimonials.map((_, index) => (
//                 <button key={index} onClick={() => setCurrent(index)} className={`transition-all duration-300  lg:h-5 w-8 lg:w-17 rounded-full ${index === current ? "bg-red-600" : "bg-gray-300"}`} />
//               ))}
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2 flex justify-center">
//             <img src={Img22} alt="Network" className="w-full max-w-xl h-auto" />
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Home;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Menu, X, ShoppingBag } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem, incrementQuantity,
  decrementQuantity,
  removeItem
} from '../redux/cartSlice';

import Bike from "../assets/bike.png";
import Car from "../assets/car.png";
import Shield from "../assets/shield.png";
import Img1 from "../assets/image.png";
import Img2 from "../assets/image1.png";
import Img3 from "../assets/image2.png";
import Img4 from "../assets/image3.png";
import Img5 from "../assets/image4.png";
import Img6 from "../assets/image5.png";
import Img7 from "../assets/image6.png";
import Img8 from "../assets/image7.png";
import Img9 from "../assets/image8.png";
import Img10 from "../assets/image9.png";
import Img11 from "../assets/image10.png";
import Img12 from "../assets/image11.png";
import Img13 from "../assets/image12.png";
import Img14 from "../assets/image13.png";
// import Img15 from "../assets/image14.png";
import Img16 from "../assets/image15.png";
import Img17 from "../assets/image16.png";
import Img18 from "../assets/image17.png";
import Img19 from "../assets/image18.png";
import Img20 from "../assets/image19.png";
import Img21 from "../assets/image20.png";
import Burger from "../assets/burger.png";
import Pizza from "../assets/pizza.png";
import Drinks from "../assets/snacks.png";
import Snacks from "../assets/drinks.png";
import Bike1 from "../assets/image21.png";
import Footer from "./Footer";
import Img22 from "../assets/image22.png";

// ────────────────────────────────────────────────
// NEW IMPORTS for API fetching
import { api } from "../services/api";
// ────────────────────────────────────────────────

// Category icon mapping with Google URLs for additional categories
const getCategoryIcon = (categoryName) => {
  const iconMap = {
    'Burger': Burger,
    'Pizza': Pizza,
    'Snacks': Snacks,
    'Drinks': Drinks,
    'Desserts': 'https://cdn-icons-png.flaticon.com/512/3081/3081986.png',
    'Salad': 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
    'Sandwich': 'https://cdn-icons-png.flaticon.com/512/1046/1046751.png',
    'Pasta': 'https://cdn-icons-png.flaticon.com/512/2276/2276931.png',
    'Noodles': 'https://cdn-icons-png.flaticon.com/512/1046/1046769.png',
    'Rice': 'https://cdn-icons-png.flaticon.com/512/1046/1046786.png',
    'Soup': 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
    'Chicken': 'https://cdn-icons-png.flaticon.com/512/1046/1046748.png',
    'Seafood': 'https://cdn-icons-png.flaticon.com/512/1046/1046770.png',
    'Vegetarian': 'https://cdn-icons-png.flaticon.com/512/1046/1046747.png',
    'Coffee': 'https://cdn-icons-png.flaticon.com/512/924/924514.png',
    'Juice': 'https://cdn-icons-png.flaticon.com/512/2405/2405479.png',
    'Ice Cream': 'https://cdn-icons-png.flaticon.com/512/1046/1046751.png',
    'Cake': 'https://cdn-icons-png.flaticon.com/512/3081/3081986.png',
  };

  return iconMap[categoryName] || 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png'; // Default food icon
};

// Removed hardcoded products array
// export const products = [ ... ]  ← DELETED

const testimonials = [
  {
    id: 1,
    name: "Shivangi Joshi",
    text: "Fresh Bites lives up to its name! Every bite bursts with freshness and flavor. From the crisp salads to the hearty sandwiches, each dish is a delightful journey for the taste buds.",
    avatar: "https://tse3.mm.bing.net/th/id/OIP.cLFlG9qe5tbHezzUfrb1EQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    name: "Virat Kohli",
    text: "Fresh Bites combines convenience with quality like no other. Ordering online is a breeze, and the food arrives promptly, still retaining its freshness. It's the perfect solution for busy days without compromising on taste.",
    avatar: "https://tse1.mm.bing.net/th/id/OIP.4aM4ETKxJ5AJKORVUdEhHAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 3,
    name: "Rohit Sharma",
    text: "Fresh Bites redefines freshness with every dish. I couldn't believe the difference in taste until I tried their farm-to-table ingredients. It's like they've captured the essence of freshness in every bite.",
    avatar: "https://images.news18.com/ibnlive/uploads/2024/07/rohit-sharma-1-2024-07-f31b2b81746e93de6ab1c683fc455ff0-16x9.jpg"
  }
];

function Home() {
  const [active, setActive] = useState("All");
  const [current, setCurrent] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ────────────────────────────────────────────────
  // Changed: now comes from backend
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // ────────────────────────────────────────────────

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ────────────────────────────────────────────────
  // Fetch categories and foods from backend
  useEffect(() => {
    // Fetch categories
    api.getCategories()
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.error("Failed to load categories:", err);
      });

    // Fetch foods
    api.getFoods()
      .then(res => {
        setFetchedProducts(res.data);
      })
      .catch(err => {
        console.error("Failed to load foods:", err);
      });
  }, []);
  // ────────────────────────────────────────────────

  const filteredProducts = active === "All"
    ? fetchedProducts
    : fetchedProducts.filter(p => p.category === active);

  const handleAddToCart = (product) => {
    // Make sure Redux gets compatible shape (id, title, price, image, etc.)
    dispatch(addItem({
      id: product._id,
      title: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans overflow-x-hidden">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 md:px-20 lg:px-40 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 p-2 rounded-full"><ShoppingBag size={24} color="white" /></div>
          <span className="text-3xl font-bold text-blue-950">Fresh Bites</span>
        </div>

        <div className="hidden lg:flex gap-10 text-2xl font-bold text-blue-950">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/foods" className="hover:text-red-500 transition">Foods</Link>
          <Link to="/cart" className="hover:text-red-500 transition">Cart</Link>
          <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
        </div>

        <div className="hidden lg:flex items-center">

          <button onClick={() => setIsCartOpen(true)} className="relative">
            <ShoppingBag size={30} className="text-blue-950" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs md:text-sm rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <User size={30} className="text-blue-950 cursor-pointer" />
        </div>

        <button className="lg:hidden text-blue-950" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-10 gap-6 text-3xl font-bold text-blue-950 lg:hidden animate-in fade-in zoom-in duration-300">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/foods" onClick={() => setIsMenuOpen(false)}>Foods</Link>
            <Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative bg-white w-full max-w-md shadow-2xl h-full overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold">Your Cart ({cartCount})</h2>
              <button onClick={() => setIsCartOpen(false)}><X size={30} /></button>
            </div>

            <div className="p-6 space-y-6">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 text-xl">Your cart is empty</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 items-center border-b pb-4">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded" />
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-red-500 font-bold">₹{item.price} x {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => dispatch(decrementQuantity(item.id))} className="w-8 h-8 bg-gray-200 rounded">-</button>
                      <span className="font-bold">{item.quantity}</span>
                      <button onClick={() => dispatch(incrementQuantity(item.id))} className="w-8 h-8 bg-gray-200 rounded">+</button>
                    </div>
                    <button onClick={() => dispatch(removeItem(item.id))} className="text-red-500">×</button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t">
                <div className="flex justify-between text-xl md:text-2xl font-bold mb-4">
                  <span>Subtotal:</span>
                  <span>₹{cartTotal}</span>
                </div>
                <Link to="/checkout" onClick={() => setIsCartOpen(false)} className="block text-center bg-red-500 text-white py-4 rounded-xl text-xl md:text-2xl font-bold">
                  Checkout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}


      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20 xl:px-40 mt-20 md:mt-24 lg:mt-50">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex mt-2 md:mt-4">
              <h3 className="text-sm md:text-base lg:text-lg text-gray-600">Easy way to make an order</h3>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start mt-3 md:mt-4 gap-2">
              <span className="text-red-500 text-2xl md:text-3xl lg:text-4xl font-bold">HUNGRY?</span>
              <h1 className="text-blue-950 text-2xl md:text-3xl lg:text-4xl font-bold">Just wait</h1>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start mt-1 md:mt-2 gap-2">
              <span className="text-blue-950 text-2xl md:text-3xl lg:text-4xl font-bold">food at</span>
              <h1 className="text-red-500 text-2xl md:text-3xl lg:text-4xl font-bold">your door</h1>
            </div>

            <div className="mt-4 md:mt-6">
              <h1 className="text-gray-400 text-xs md:text-sm lg:text-base">
                Welcome to Fresh Bites, your ultimate destination for delicious and fresh online food ordering!
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 md:mt-8 gap-3 md:gap-4">
              <button className="px-4 md:px-6 lg:px-8 py-2 md:py-3 bg-red-500 text-sm md:text-base lg:text-lg font-bold border border-red-500 text-white rounded-md hover:bg-blue-950 transition cursor-pointer">
                Order Now &gt;
              </button>
              <Link to="/foods" className="px-4 md:px-6 lg:px-8 py-2 md:py-3 text-red-500 text-sm md:text-base lg:text-lg font-bold bg-white border border-red-500 rounded-md cursor-pointer text-center">
                See All Foods
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 md:mt-8 gap-4 md:gap-6">
              <h1 className="font-bold text-blue-950 text-xs md:text-sm lg:text-base flex items-center">
                <img src={Car} alt="Car" className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 mr-2 object-contain" />No Shipping Charge
              </h1>
              <h1 className="font-bold text-blue-950 text-xs md:text-sm lg:text-base flex items-center">
                <img src={Shield} alt="Shield" className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8 mr-2 object-contain" /> 100% Secure Checkout
              </h1>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <img src={Bike} alt="Bike" className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20 xl:px-40 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {[{ img: Img1, label: "Fastfood" }, { img: Img2, label: "Pizza" }, { img: Img3, label: "Asian Food" }, { img: Img4, label: "Cold Drink" }].map((category, idx) => (
            <div key={idx} className="group flex font-bold rounded-2xl text-xl md:text-3xl lg:text-4xl bg-gradient-to-br from-red-50 to-red-100 h-32 md:h-40 lg:h-48 justify-center items-center transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl cursor-pointer border-2 border-red-200 hover:border-red-400">
              <img src={category.img} alt={category.label} className="w-16 md:w-20 lg:w-28 h-20 md:h-24 lg:h-32 object-contain transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
              <h1 className="ml-3 md:ml-4 lg:ml-6 group-hover:text-red-600 transition-colors duration-300">{category.label}</h1>
            </div>
          ))}
        </div>
      </div>


      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20 xl:px-40 mt-16 md:mt-20 lg:mt-24 text-center flex flex-col items-center">
        <div>
          <h1 className="text-red-500 text-xl md:text-2xl lg:text-3xl font-bold">What We Serve</h1>
        </div>

        <div className="mt-6 md:mt-8">
          <h1 className="text-blue-950 text-2xl md:text-3xl lg:text-4xl font-bold">Just sit back at home</h1>
        </div>

        <div className="flex flex-row justify-center items-center gap-2 md:gap-3 mt-4 md:mt-6">
          <h1 className="text-blue-950 text-2xl md:text-3xl lg:text-4xl font-bold">we will</h1>
          <h1 className="text-red-500 text-2xl md:text-3xl lg:text-4xl font-bold">take care</h1>
        </div>

        <h1 className="text-gray-600 text-sm md:text-base lg:text-lg font-semibold mt-6 md:mt-8 max-w-4xl">
          At Fresh Bites, we serve a delectable array of dishes crafted with care and made with the freshest ingredients.
        </h1>

        <h1 className="text-gray-600 text-sm md:text-base lg:text-lg font-semibold mt-2 md:mt-3 max-w-4xl">
          From wholesome salads to savory entrees and delightful desserts, there's something to satisfy every craving.
        </h1>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 px-4 md:px-8 lg:px-20 xl:px-40 mt-12 md:mt-16 lg:mt-20 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center">
          <img src={Img7} alt="Quick" className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 object-contain mb-3 md:mb-4" />
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">Quick Delivery</h1>
          <h4 className="text-gray-600 text-xs md:text-sm lg:text-base font-semibold leading-relaxed px-2 md:px-4 text-center">
            Experience lightning-fast delivery with Fresh Bites, ensuring your meal arrives swiftly to your doorstep.
          </h4>
        </div>

        <div className="flex flex-col items-center">
          <img src={Img8} alt="Dine" className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 object-contain mb-3 md:mb-4" />
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">Super Dine In</h1>
          <h4 className="text-gray-600 text-xs md:text-sm lg:text-base font-semibold leading-relaxed px-2 md:px-4 text-center">
            Experience the ultimate dining convenience with Super Dine In, where delicious meals are just a click away.
          </h4>
        </div>

        <div className="flex flex-col items-center">
          <img src={Img9} alt="Pick" className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 object-contain mb-3 md:mb-4" />
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">Easy Pick Up</h1>
          <h4 className="text-gray-600 text-xs md:text-sm lg:text-base font-semibold leading-relaxed px-2 md:px-4 text-center">
            Enjoy the convenience of easy pick-up options, making your Fresh Bites experience even more seamless.
          </h4>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-20 xl:px-40 mt-16 md:mt-20 lg:mt-24 w-full max-w-screen-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 text-center mb-6 md:mb-8 lg:mb-10">Popular Foods</h1>

        {/* Category buttons with horizontal scroll */}
        <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-2xl px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 mb-6 md:mb-8 lg:mb-10 overflow-x-auto shadow-lg">
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 min-w-max">
            <button
              onClick={() => setActive("All")}
              className={`text-xs md:text-sm lg:text-base font-bold cursor-pointer transition-all duration-300 hover:scale-110 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-xl ${active === 'All'
                ? 'bg-white text-red-600 shadow-xl transform scale-105'
                : 'text-white hover:bg-red-600 hover:shadow-md'
                }`}
            >
              All
            </button>

            {categories.map(cat => (
              <button
                key={cat._id}
                onClick={() => setActive(cat.name)}
                className={`text-xs md:text-sm lg:text-base font-bold cursor-pointer transition-all duration-300 hover:scale-110 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-xl whitespace-nowrap ${active === cat.name
                  ? 'bg-white text-red-600 shadow-xl transform scale-105'
                  : 'text-white hover:bg-red-600 hover:shadow-md'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item._id} className="group border-2 border-red-300 rounded-3xl p-4 md:p-6 flex flex-col items-center hover:shadow-2xl hover:border-red-500 transition-all duration-300 bg-white transform hover:-translate-y-2">
                {/* Fixed height container for consistent image sizing */}
                <div className="w-full h-40 md:h-48 lg:h-56 flex items-center justify-center overflow-hidden mb-4 rounded-xl bg-gradient-to-br from-red-50 to-pink-50">
                  <img
                    src={item.image}
                    className="max-w-full max-h-full object-contain transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-3"
                    alt={item.name}
                  />
                </div>
                <Link to={`/product/${item._id}`} className="w-full">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center cursor-pointer hover:text-red-500 transition-colors duration-300 line-clamp-2">{item.name}</h2>
                </Link>
                <div className="flex justify-between items-center w-full mt-4 md:mt-6 gap-2">
                  <span className="text-red-500 text-xl md:text-2xl lg:text-3xl font-bold">₹{item.price}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base lg:text-lg font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 md:py-20">
              <p className="text-gray-500 text-2xl md:text-3xl lg:text-4xl font-bold">
                No Foods Available for {active}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20 xl:px-40 mt-16 md:mt-20 lg:mt-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img src={Bike1} alt="Bike" className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain" />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-950">Why Fresh Bites?</h2>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
              At Fresh Bites, we're not just a food service — we're a culinary journey. Discover the unparalleled freshness and taste that sets us apart.
            </p>

            <div className="space-y-6 md:space-y-8">
              {[{ t: "Fresh and tasty foods", d: "Indulge in a world of fresh and tasty foods meticulously prepared by our talented chefs." },
              { t: "Quality support", d: "At Fresh Bites, we pride ourselves on delivering not only exceptional food but also outstanding customer support." },
              { t: "Order from any location", d: "With our convenient platform, delicious food is always just a tap away." }
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-blue-950 text-xl md:text-2xl lg:text-3xl">✔</span>
                  <div>
                    <h4 className="font-bold text-blue-950 text-lg md:text-xl lg:text-2xl mb-2">{point.t}</h4>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed">{point.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20 xl:px-40 mt-16 md:mt-20 lg:mt-32 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div>
              <h4 className="text-red-600 font-bold text-2xl md:text-3xl lg:text-4xl mb-4">Testimonial</h4>
              <h1 className="text-gray-600 font-bold text-base md:text-lg lg:text-xl leading-relaxed">
                Fresh Bites truly lives up to its name! Every bite bursts with freshness and flavor.
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl flex flex-wrap font-bold text-gray-900 leading-tight mt-6">
                What our <span className="text-red-600 mx-2">customers</span> are saying
              </h2>
            </div>

            <div className="relative min-h-[200px] md:min-h-[250px] lg:min-h-[300px]">
              {testimonials.map((item, index) => (
                <div key={item.id} className={`transition-all duration-700 absolute top-0 left-0 w-full ${index === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg italic leading-relaxed mb-6">"{item.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={item.avatar} className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-red-100 object-cover" alt={item.name} />
                    <span className="font-bold text-gray-800 text-base md:text-lg lg:text-xl">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 md:gap-3 mt-6">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrent(index)} className={`transition-all duration-300 h-2 md:h-2.5 lg:h-3 w-8 md:w-10 lg:w-12 rounded-full ${index === current ? "bg-red-600" : "bg-gray-300"}`} />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src={Img22} alt="Network" className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain" />
          </div>
        </div>
      </div>

      <Footer />
    </div >
  );
}

export default Home;