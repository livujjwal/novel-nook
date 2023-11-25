import { useState } from "react";
import {
  FaBell,
  FaBook,
  FaBookOpen,
  FaHeart,
  FaSearch,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetch_data } from "../redux/action/fetchAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  function handleQuery() {
    dispatch(fetch_data(query));
  }
  return (
    <div className="navbar">
      <div className="navbar-1">
        <h2>NovelHook</h2>
        <p>BOOKS</p>
        <FaBookOpen />
      </div>
      <div className="navbar-2">
        <div>
          <FaSearch />
        </div>

        <input
          type="text"
          placeholder={`Search for the book you want and read it now... `}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button onClick={handleQuery}>Search</button>
      </div>
      <div className="navbar-3">
        <FaHeart />
        <FaBell />
        <FaWallet />
        <FaUser />
      </div>
    </div>
  );
};

export default Navbar;
