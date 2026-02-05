

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import CommonBanner from './CommonBanner';
// import Footer from './Footer';

// const Account = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Signup Data:', formData);
//   };

//   return (
//     <>
//       <div className="mt-28 md:mt-40 lg:mt-80">
//         <CommonBanner title="Signup" />
//       </div>
//       <div className="flex flex-col items-center justify-center bg-white font-sans font-bold px-6 py-10 md:py-20 lg:py-30">
//         {/* Card width is dynamic based on screen size */}
//         <div className="w-full max-w-[1000px] mt-10 md:mt-20 lg:mt-30 p-6 md:p-12 lg:p-16 bg-[#FDE8E8] rounded-lg shadow-sm">
//           <form onSubmit={handleSubmit} className="space-y-10 lg:space-y-14">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Full name"
//                 className="mt-6 md:mt-10 lg:mt-15 text-2xl md:text-4xl lg:text-5xl w-full bg-transparent border-b border-gray-400 py-4 focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
//                 onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//               />
//             </div>
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="text-2xl md:text-4xl lg:text-5xl w-full bg-transparent border-b border-gray-400 py-4 focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               />
//             </div>
//             <div className="relative">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="text-2xl md:text-4xl lg:text-5xl w-full bg-transparent border-b border-gray-400 py-4 focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               />
//             </div>
//             <div className="flex justify-center pt-6 lg:pt-10">
//               <button
//                 type="submit"
//                 className="bg-[#D92D2D] h-16 md:h-20 lg:h-24 w-full md:w-72 lg:w-96 cursor-pointer text-white px-8 py-2 rounded-md hover:bg-red-700 transition-colors text-2xl md:text-4xl lg:text-5xl font-bold shadow-md"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>
//         </div>

//         <div className="mt-12 text-gray-800 text-2xl md:text-4xl lg:text-5xl text-center mb-20 px-4">
//           Already have an account?{" "}
//           <Link to="/admin" className="text-red-600 cursor-pointer hover:underline transition-all">
//             Login
//           </Link>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Account;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CommonBanner from './CommonBanner';
import Footer from './Footer';

import { api } from "../services/api";

const Account = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const payload = {
        name: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password
      };

      console.log("Sending register payload:", payload); // debug

      const res = await api.register(payload);

      console.log("Register response:", res.data); // debug

      if (res.data?.user) {
        localStorage.setItem('customerUser', JSON.stringify(res.data.user));
        alert("Account created! Redirecting...");
        navigate('/');
      } else {
        setError("Registration failed - unexpected response");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(
        err.response?.data?.msg ||
        err.response?.data?.message ||
        err.message ||
        "Cannot connect to server. Is backend running?"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-28 md:mt-40 lg:mt-80">
        <CommonBanner title="Signup" />
      </div>
      <div className="flex flex-col items-center justify-center bg-white font-sans font-bold px-6 py-10 md:py-20 lg:py-30">
        <div className="w-full max-w-[900px] mt-10 md:mt-20 lg:mt-30 p-8 md:p-12 lg:p-16 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-2xl border border-red-100">
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded-lg shadow-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8 lg:space-y-10">
            <div className="relative group">
              <input
                type="text"
                placeholder="Full name"
                className="mt-4 md:mt-6 lg:mt-8 text-xl md:text-2xl lg:text-3xl w-full bg-white/50 border-b-2 border-gray-300 py-4 px-2 focus:outline-none focus:border-red-500 focus:bg-white placeholder-gray-400 transition-all duration-300 rounded-t-lg group-hover:border-red-400"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email"
                className="text-xl md:text-2xl lg:text-3xl w-full bg-white/50 border-b-2 border-gray-300 py-4 px-2 focus:outline-none focus:border-red-500 focus:bg-white placeholder-gray-400 transition-all duration-300 rounded-t-lg group-hover:border-red-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="relative group">
              <input
                type="password"
                placeholder="Password"
                className="text-xl md:text-2xl lg:text-3xl w-full bg-white/50 border-b-2 border-gray-300 py-4 px-2 focus:outline-none focus:border-red-500 focus:bg-white placeholder-gray-400 transition-all duration-300 rounded-t-lg group-hover:border-red-400"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <div className="flex justify-center pt-6 lg:pt-8">
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#D92D2D] h-14 md:h-16 lg:h-20 w-full md:w-64 lg:w-80 cursor-pointer text-white px-8 py-2 rounded-xl hover:bg-red-700 transition-all duration-300 text-xl md:text-2xl lg:text-3xl font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-gray-800 text-xl md:text-2xl lg:text-3xl text-center mb-20 px-4">
          Already have an account?{" "}
          <Link to="/admin" className="text-red-600 cursor-pointer hover:underline transition-all duration-300 font-bold hover:text-red-700">
            Login
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;