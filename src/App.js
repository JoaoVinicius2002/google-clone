import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import Search from "./Components/Search";
import Sites from "./Components/Sites";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Logo />
        <Search />
        <Sites />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
