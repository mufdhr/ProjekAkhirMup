import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { SayContext } from './SayContext';
import Home from "./pages/Home";
import CreateSay from "./pages/CreateSay"; 
import Edit from "./pages/Edit";
import Navbar from "./components/Navbar";
import ViewSay from "./pages/Viewsay";
import SaveSay from "./pages/SaveSay";
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function App() { 
  const [says, setSays] = useState(() => { 
    const savedSays = localStorage.getItem('says'); 
    return savedSays ? JSON.parse(savedSays) : []; 
  }); 

  useEffect(() => { 
    const fetchData = async () => { 
      const querySnapshot = await getDocs(collection(db, "collection_name")); 
      const dataList = querySnapshot.docs.map(doc => doc.data()); 
      setData(dataList); 
    }; 
    
    fetchData(); 
  }, []);

  useEffect(() => { 
    localStorage.setItem('says', JSON.stringify(says)); 
  }, [says]);

  // Fungsi untuk menambah task baru
  const addTask = (newTask) => {
    setSays([...says, newTask]);
  };

  // Fungsi untuk mengedit task berdasarkan ID
  const updateTask = (updatedTask, id) => {
    const newSays = [...says];
    newSays[id] = updatedTask;
    setSays(newSays);
  };

  // Fungsi untuk menghapus task berdasarkan ID
  const deleteTask = (id) => {
    setSays(says.filter((task, index) => index !== id));
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home tasks={says} deleteTask={deleteTask} />} />
          <Route path="/create" element={<CreateSay addTask={addTask} />} />
          <Route path="/edit/:id" element={<Edit updateTask={updateTask} />} /> {/* Pastikan updateTask diteruskan sebagai prop */}
          <Route path="/view" element={<ViewSay deleteTask={deleteTask} />} />
          <Route path="/save" element={<SaveSay />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;