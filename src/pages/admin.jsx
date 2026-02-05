
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import CommonBanner from './CommonBanner';
// import Footer from './Footer';

// const Admin = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('Login Data:', loginData);
//   };

//   return (
//     <>
//       <div className="mt-28 md:mt-40 lg:mt-80">
//         <CommonBanner title="Login" />
//       </div>
//       <div className="flex flex-col items-center justify-center bg-white font-sans font-bold px-6 py-10 md:py-20 lg:py-30">
//         {/* Responsive Container: Full width on mobile, max 1000px on desktop */}
//         <div className="w-full max-w-[1000px] mt-10 md:mt-20 lg:mt-30 p-6 md:p-12 lg:p-16 bg-[#FDE8E8] rounded-lg shadow-sm">
//           <form onSubmit={handleLogin} className="space-y-10 lg:space-y-14">
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="mt-6 md:mt-10 lg:mt-15 text-2xl md:text-4xl lg:text-5xl w-full bg-transparent border-b border-gray-400 py-4 focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
//                 onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//               />
//             </div>
//             <div className="relative">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="text-2xl md:text-4xl lg:text-5xl w-full bg-transparent border-b border-gray-400 py-4 focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
//                 onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//               />
//             </div>
//             <div className="flex justify-center pt-6 lg:pt-10">
//               <button
//                 type="submit"
//                 className="bg-[#D92D2D] h-16 md:h-20 lg:h-24 w-full md:w-60 lg:w-80 cursor-pointer text-white px-8 py-2 rounded-md hover:bg-red-700 transition-colors text-2xl md:text-4xl lg:text-5xl font-bold shadow-md"
//               >
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>

//         <div className="mt-12 text-gray-800 text-2xl md:text-4xl lg:text-5xl text-center mb-20 px-4">
//           Don't have an account?{" "}
//           <Link to='/account' className="text-red-600 cursor-pointer hover:underline transition-all">
//             Create an account
//           </Link>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Admin;




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CommonBanner from './CommonBanner';
import Footer from './Footer';

import { api } from "../services/api";
import { loadCartFromDB } from '../redux/cartSlice';

const Admin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await api.login(loginData);

      if (res.data?.user) {
        localStorage.setItem('customerUser', JSON.stringify(res.data.user));

        // Load user's cart from database
        dispatch(loadCartFromDB(res.data.user._id));

        alert("Logged in successfully!");
        navigate('/');
      } else {
        setError("Login failed - no user data returned");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.msg ||
        err.response?.data?.error ||
        err.message ||
        "Invalid credentials or server error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-28 md:mt-40 lg:mt-80">
        <CommonBanner title="Login" />
      </div>
      <div className="flex flex-col items-center justify-center bg-white font-sans font-bold px-6 py-10 md:py-20 lg:py-30">
        <div className="w-full max-w-[1000px] mt-10 md:mt-20 lg:mt-30 p-6 md:p-12 lg:p-16 bg-[#FDE8E8] rounded-lg shadow-sm">
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-10 lg:space-y-14">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="mt-6 md:mt-10 lg:mt-15 text-2xl md:text-4xl lg:text-5xl w-full bg-transparent border-b border-gray-400 py-4 focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="text-2xl md:text-4xl lg:text-5xl w-full bg-transparent border-b border-gray-400 py-4 focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </div>
            <div className="flex justify-center pt-6 lg:pt-10">
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#D92D2D] h-16 md:h-20 lg:h-24 w-full md:w-60 lg:w-80 cursor-pointer text-white px-8 py-2 rounded-md hover:bg-red-700 transition-colors text-2xl md:text-4xl lg:text-5xl font-bold shadow-md ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-gray-800 text-2xl md:text-4xl lg:text-5xl text-center mb-20 px-4">
          Don't have an account?{" "}
          <Link to='/account' className="text-red-600 cursor-pointer hover:underline transition-all">
            Create an account
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;