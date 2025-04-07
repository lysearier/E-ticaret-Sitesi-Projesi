import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { toast, ToastContainer } from 'react-toastify';
import React from 'react';
import { Home, Search, User } from "lucide-react";

function App() {
  const handleClick = () => {
    toast.success('İşlem başarılı 🎉');
  };
  
  
  return (
    <>
      <Home size={24} color="#4f46e5" />
      <Search size={24} className="text-blue-500" />
      <User size={32} strokeWidth={1.5} />
      <div className="text-3xl font-bold text-blue-500 p-4">
        Tailwind çalışıyor 🎉
      </div>

      <button onClick={handleClick}>Bildirim Göster</button>
      <ToastContainer />
    </>
  )
}

export default App
