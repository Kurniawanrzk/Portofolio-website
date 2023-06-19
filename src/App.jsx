import { 
  BrowserRouter, 
  Route, Routes 
} from "react-router-dom";
import AOS from "aos"
import 'aos/dist/aos.css';
import "./App.css";
import Home from "./pages/home";
import Header from "./components/header";
import { useEffect } from "react";

function App() {
  AOS.init()
  const ContainerStyle = {
    width:"100%",
    height:"100vh",
  }
  const description = `
    Kurniawan rizki trinanta sembiring, personal website/portofolio website programming enthusiast programming competitive
  `
  useEffect(() => {
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', description);
    document.getElementsByTagName('head')[0].appendChild(meta);
  } ,[])

  return (
    <>
    <Header />
      <div 
      className="container" style={ContainerStyle}>
      
        <BrowserRouter>
          <Routes>
            <Route 
            element={<Home />} 
            path="/" />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
