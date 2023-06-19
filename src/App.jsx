import { 
  BrowserRouter, 
  Route, Routes 
} from "react-router-dom";
import AOS from "aos"
import 'aos/dist/aos.css';
import "./App.css";
import Home from "./pages/home";
import Header from "./components/header";

function App() {
  AOS.init()
  const ContainerStyle = {
    width:"100%",
    height:"100vh",
  }

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
