import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/message", { state: { name, age } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-pink-500 font-bold mb-4">
        Selamat Datang di Program PersonASay
      </h1>
      <form onSubmit={handleSubmit} className="p-4">
        <label>Nama:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="block border p-2 mb-4"        />
          <label>Usia:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="block border p-2 mb-4"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white p-2 rounded hover:bg-pink-700"
          >
            Tampilkan Pesan
          </button>
        </form>
      </div>
    );
  }
  
  export default Form;
  
