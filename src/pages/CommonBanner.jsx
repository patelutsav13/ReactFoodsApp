import React from 'react';

const CommonBanner = ({ title }) => {
  const bannerImage =
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden shadow-xl">
      <img
        src={bannerImage}
        alt="Page Banner"
        className="
          absolute inset-0 
          w-full h-full 
          object-cover 
          object-center 
          transition-transform duration-700
          hover:scale-105
        "
        onError={(e) => {
          e.target.src =
            'https://images.unsplash.com/photo-1495195129352-aec325b55b65?q=80&w=2070&auto=format&fit=crop';
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center justify-center lg:justify-start px-6 lg:px-40">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-2xl capitalize animate-in fade-in slide-in-from-left duration-500">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default CommonBanner;
