import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/Pages/About/About';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import NotFound from './Components/Pages/NotFound/NotFound';
import Order from './Components/Pages/Order/Order';
import Register from './Components/Pages/Register/Register';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
