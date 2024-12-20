import React, { useState } from "react";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk update data
    console.log("Data berhasil diperbarui:", { name, age });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-pink-500 font-bold mb-4">Edit Data</h1>
      <form onSubmit={handleSubmit}>
        <label>Nama:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="block border p-2 mb-4"
        />
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
            Simpan
          </button>
        </form>
      </div>
    );
  }
  
  export default Edit;
  