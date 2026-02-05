

// // src/pages/foods.jsx in ReactFoodsApp/foodApp (updated to fetch from localStorage)
// import React, { useState, useMemo, useEffect } from "react";
// import { Link } from "react-router-dom"; 
// import CommonBanner from "./CommonBanner";
// import Footer from "./Footer";
// import Search from "../assets/search.png";
// import { products } from "./home"; 

// import { useDispatch } from 'react-redux';
// import { addItem } from '../redux/cartSlice';

// const Foods = () => {
//   const ALL_FOOD_DATA = products;
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortType, setSortType] = useState("Default");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;
//   const [fetchedProducts, setFetchedProducts] = useState(ALL_FOOD_DATA);

//   useEffect(() => {
//     const savedItems = localStorage.getItem('foodItems');
//     if (savedItems) {
//       setFetchedProducts(JSON.parse(savedItems));
//     }
//   }, []);

//   const filteredFoods = useMemo(() => {
//     let result = fetchedProducts.filter((item) =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     if (sortType === "Alphabetically, A-Z") result.sort((a, b) => a.title.localeCompare(b.title));
//     if (sortType === "Alphabetically, Z-A") result.sort((a, b) => b.title.localeCompare(a.title));
//     if (sortType === "High Price") result.sort((a, b) => b.price - a.price);
//     if (sortType === "Low Price") result.sort((a, b) => a.price - b.price);
//     return result;
//   }, [searchTerm, sortType, fetchedProducts]);

//   const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredFoods.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//       window.scrollTo(0, 450);
//     }
//   };

//   const handleAddToCart = (food) => {
//     dispatch(addItem(food));
//   };

//   return (
//     <div className="font-sans font-bold bg-white overflow-x-hidden">
//       <div className="pt-32 md:pt-60 lg:pt-80">
//         <CommonBanner title="All Foods" />
//       </div>

//       <div className="px-6 md:px-20 lg:px-[100px] py-12 lg:py-24 ml-0 md:ml-20 lg:ml-100 mr-0 md:mr-20 lg:mr-100">

//         <div className="flex flex-col lg:flex-row justify-between items-center mb-12 lg:mb-24 gap-6 lg:gap-12">
//           <div className="relative flex items-center border-2 md:border-4 border-red-500 rounded-2xl px-4 lg:px-6 w-full lg:w-[1000px] h-[70px] lg:h-[100px]">
//             <input
//               type="text"
//               placeholder="I'm looking for...."
//               className="w-full text-2xl md:text-3xl lg:text-5xl font-bold outline-none placeholder-gray-400 bg-transparent"
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//             <img src={Search} alt="search" className="h-8 lg:h-16 w-8 lg:w-16 ml-2 lg:ml-4 cursor-pointer" />
//           </div>

//           <select
//             className="w-full lg:w-[400px] h-[70px] lg:h-[100px] px-4 lg:px-6 text-2xl md:text-3xl lg:text-4xl font-bold border-2 md:border-4 border-red-500 rounded-2xl outline-none bg-white cursor-pointer"
//             value={searchTerm}
//             onChange={(e) => setSortType(e.target.value)}
//           >
//             <option>Default</option>
//             <option>Alphabetically, A-Z</option>
//             <option>Alphabetically, Z-A</option>
//             <option>High Price</option>
//             <option>Low Price</option>
//           </select>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-16">
//           {currentItems.map((food) => (
//             <div key={food.id} className="border-2 md:border-4 border-red-500 rounded-3xl p-6 lg:p-8 overflow-hidden flex flex-col justify-between h-[550px] md:h-[650px] lg:h-[750px] hover:shadow-2xl transition-shadow">
//               <div className="overflow-hidden">
//                 <img
//                   src={food.image}
//                   alt={food.title}
//                   className="mx-auto w-[200px] md:w-[280px] lg:w-[350px] h-[200px] md:h-[280px] lg:h-[350px] object-contain transition-all duration-700 ease-in-out hover:scale-110"
//                 />
//               </div>

//               <Link to={`/product/${food.id}`}>
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 lg:mt-6 cursor-pointer hover:text-red-500 transition-colors">
//                   {food.title}
//                 </h2>
//               </Link>

//               <div className="flex justify-between items-center mt-auto pt-6 lg:pt-10 flex-nowrap gap-2">
//                 <span className="text-red-500 text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap">₹{food.price}</span>
//                 <button onClick={() => handleAddToCart(food)} className="bg-red-500 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-xl lg:rounded-2xl text-xl md:text-2xl lg:text-5xl font-semibold cursor-pointer ">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20 lg:mt-40 flex flex-wrap justify-center items-center gap-4 lg:gap-10">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className={`px-8 lg:px-16 py-3 lg:py-6 text-xl lg:text-4xl rounded-xl lg:rounded-2xl shadow-xl font-bold transition-all ${
//               currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 text-white cursor-pointer hover:scale-105"
//             }`}
//           >
//             Prev
//           </button>

//           <div className="flex gap-2 lg:gap-10">
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`px-6 lg:px-16 py-3 lg:py-6 text-xl lg:text-4xl rounded-xl lg:rounded-2xl font-bold shadow-xl transition-all cursor-pointer ${
//                   currentPage === index + 1 ? "bg-red-500 text-white scale-110" : "bg-gray-100 text-gray-800 border-2 md:border-4 border-red-500"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className={`px-8 lg:px-16 py-3 lg:py-6 text-xl lg:text-4xl rounded-xl lg:rounded-2xl shadow-xl font-bold transition-all ${
//               currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 text-white cursor-pointer hover:scale-105"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Foods;



import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonBanner from "./CommonBanner";
import Footer from "./Footer";
import Search from "../assets/search.png";

import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

// ────────────────────────────────────────────────
import { api } from "../services/api";
// ────────────────────────────────────────────────

const Foods = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // ────────────────────────────────────────────────
  const [fetchedProducts, setFetchedProducts] = useState([]);
  // ────────────────────────────────────────────────

  useEffect(() => {
    api.getFoods()
      .then(res => setFetchedProducts(res.data))
      .catch(err => console.error("Failed to load foods:", err));
  }, []);

  const filteredFoods = useMemo(() => {
    let result = fetchedProducts.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortType === "Alphabetically, A-Z") result.sort((a, b) => a.name.localeCompare(b.name));
    if (sortType === "Alphabetically, Z-A") result.sort((a, b) => b.name.localeCompare(a.name));
    if (sortType === "High Price") result.sort((a, b) => b.price - a.price);
    if (sortType === "Low Price") result.sort((a, b) => a.price - b.price);
    return result;
  }, [searchTerm, sortType, fetchedProducts]);

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFoods.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 450);
    }
  };

  const handleAddToCart = (food) => {
    dispatch(addItem({
      id: food._id,
      title: food.name,
      price: food.price,
      image: food.image,
      category: food.category
    }));
  };

  return (
    <div className="font-sans font-bold bg-white overflow-x-hidden">
      <div className="pt-32 md:pt-60 lg:pt-80">
        <CommonBanner title="All Foods" />
      </div>

      <div className="px-4 md:px-8 lg:px-20 xl:px-40 py-8 md:py-12 lg:py-16 w-full max-w-screen-2xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 md:mb-12 lg:mb-16 gap-4 md:gap-6">
          <div className="relative flex items-center border-2 border-red-500 rounded-xl md:rounded-2xl px-3 md:px-4 lg:px-6 w-full lg:max-w-3xl h-14 md:h-16 lg:h-20">
            <input
              type="text"
              placeholder="I'm looking for...."
              className="w-full text-base md:text-lg lg:text-2xl font-bold outline-none placeholder-gray-400 bg-transparent"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <img src={Search} alt="search" className="h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 ml-2 cursor-pointer" />
          </div>

          <select
            className="w-full lg:w-80 h-14 md:h-16 lg:h-20 px-3 md:px-4 lg:px-6 text-base md:text-lg lg:text-xl font-bold border-2 border-red-500 rounded-xl md:rounded-2xl outline-none bg-white cursor-pointer"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option>Default</option>
            <option>Alphabetically, A-Z</option>
            <option>Alphabetically, Z-A</option>
            <option>High Price</option>
            <option>Low Price</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full">
          {currentItems.map((food) => (
            <div key={food._id} className="border-2 border-red-500 rounded-2xl p-4 md:p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 bg-white">
              {/* Fixed height container for consistent image sizing */}
              <div className="w-full h-40 md:h-48 lg:h-56 flex items-center justify-center overflow-hidden mb-4">
                <img
                  src={food.image}
                  alt={food.name}
                  className="max-w-full max-h-full object-contain transition-all duration-500 ease-in-out hover:scale-110"
                />
              </div>

              <Link to={`/product/${food._id}`}>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center cursor-pointer hover:text-red-500 transition-colors line-clamp-2">
                  {food.name}
                </h2>
              </Link>

              <div className="flex justify-between items-center mt-4 md:mt-6 gap-2">
                <span className="text-red-500 text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">₹{food.price}</span>
                <button
                  onClick={() => handleAddToCart(food)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base lg:text-lg font-semibold cursor-pointer transition-colors whitespace-nowrap"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 lg:mt-20 flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 text-base md:text-lg lg:text-xl rounded-lg md:rounded-xl shadow-lg font-bold transition-all ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 text-white cursor-pointer hover:scale-105"
              }`}
          >
            Prev
          </button>

          <div className="flex gap-2 md:gap-3 lg:gap-4">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-base md:text-lg lg:text-xl rounded-lg md:rounded-xl font-bold shadow-lg transition-all cursor-pointer ${currentPage === index + 1 ? "bg-red-500 text-white scale-110" : "bg-gray-100 text-gray-800 border-2 border-red-500"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 text-base md:text-lg lg:text-xl rounded-lg md:rounded-xl shadow-lg font-bold transition-all ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 text-white cursor-pointer hover:scale-105"
              }`}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Foods;