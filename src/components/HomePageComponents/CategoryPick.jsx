import accessories from "../../assets/photos/accessories.jpg";
import kids from "../../assets/photos/kids.jpg";
import men from "../../assets/photos/men.jpg";
import women from "../../assets/photos/women.jpg";

import React from "react";
 
 const ShopCard = () => {
   return (
     <>
       <section className="text-center my-10">
         <h2 className="text-2xl font-bold tracking-wide my-4">EDITOR'S PICK</h2>
         <p className=" text-gray-600">
           Problems trying resolve <br /> the conflict between
         </p>
       </section>
 
       <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-gray-50">
         <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl">
           {/* MEN Card - Sol */}
           <div className="relative w-full md:w-2/4 h-80 md:h-96 lg:h-[32rem] r group overflow-hidden">
             <img
               src={men}
               alt="Men's Fashion"
               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
             />
             <div className="absolute bottom-6 left-6">
               <button className="bg-white py-2 px-8 font-semibold hover:bg-gray-100 transition-colors">
                 MEN
               </button>
             </div>
           </div>
 
           {/* WOMEN ve ka */}
           <div className="w-full md:w-2/4 flex flex-col md:flex-row gap-4">
             {/* WOMEN Kartı */}
             <div className="relative w-full md:w-1/2 h-80 md:h-96 lg:h-[32rem] r group overflow-hidden">
               <img
                 src={women}
                 alt="Women's Fashion"
                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
               />
               <div className="absolute bottom-6 left-6">
                 <button className="bg-white py-2 px-6 font-semibold hover:bg-gray-100 transition-colors">
                   WOMEN
                 </button>
               </div>
             </div>
 
             {/* KIDS ve ACCESSORIES Kartlar */}
             <div className="w-full md:w-1/2 flex flex-col gap-4">
              {/* ACCESSORIES Kartı */}
              <div className="relative h-40 md:h-44 lg:h-60 r group overflow-hidden">
                 <img
                   src={accessories}
                   alt="Accessories"
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                 />
                 <div className="absolute bottom-6 left-6">
                   <button className="bg-white py-2 px-4 font-semibold text-sm hover:bg-gray-100 transition-colors">
                     ACCESSORIES
                   </button>
                 </div>
               </div>
               {/* KIDS Kartı */}
               <div className="relative h-40 md:h-48 lg:h-64 r group overflow-hidden">
                 <img
                   src={kids}
                   alt="Kids' Fashion"
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                 />
                 <div className="absolute bottom-6 left-6">
                   <button className="bg-white py-2 px-6 font-semibold hover:bg-gray-100 transition-colors">
                     KIDS
                   </button>
                 </div>
               </div>
 
             </div>
           </div>
         </div>
       </div>
     </>
   );
 };
 
 export default ShopCard;