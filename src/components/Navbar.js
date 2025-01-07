import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-400 text-white p-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo-container flex items-center">
          <img src={`${process.env.PUBLIC_URL}/notes.jpg`} alt="Deskripsi gambar" className="gambar-kecil mr-1 w-10" />
          <h1 className="text-lg font-bold">SendASay</h1>
        </div>
        <div>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
