import BookDetail from "./Components/BookDetail";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Home />
        <BookDetail/>
      
    </div>
  );
}

export default App;
