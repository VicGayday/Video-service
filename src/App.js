// import { Link } from 'react-router-dom'

import Routes from "./routes/Routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Switcher from './components/switcher/Switcher'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switcher />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
