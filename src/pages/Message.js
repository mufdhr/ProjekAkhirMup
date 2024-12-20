import React from "react";
import { useLocation } from "react-router-dom";

function Message() {
  const location = useLocation();
  const { name, age } = location.state || { name: "", age: "" };

  const generateMessage = () => {
    if (age < 18) {
      return "Kamu masih muda! Tetap semangat belajar.";
    } else if (age >= 18 && age < 30) {
      return "Masa muda adalah waktu terbaik untuk berkarya!";
    } else {
      return "Hidup adalah perjalanan panjang, teruslah berusaha!";
    }
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-pink-500 font-bold text-xl mb-4">
        Hai, {name}!
      </h1>
      <p className="text-gray-700 text-lg animate-bounce">{generateMessage()}</p>
      </div>
  );
}

<div className="bg-custom">
      <h1 className="text-white text-center p-10 text-3xl">Selamat Datang di PersonASay</h1>
    </div>

export default Message;


