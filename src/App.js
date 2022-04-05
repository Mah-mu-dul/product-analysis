import './App.css';
import Header from './components/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './hooks/Home/Home'
import Review from './hooks/Review/Review';
import Dashboard from './hooks/Dashboard/Dashboard';
import Blogs from './hooks/Blogs/Blogs';
import About from './hooks/About/About';
import Error from './hooks/Error/Error';

function App() {
  return (
    <div className="App">
      <Header>
          <Header></Header>
      </Header>
      <Routes>  
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Review" element={<Review></Review>}></Route>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="*" element={<Error></Error>}></Route>



      </Routes>
    </div>
  );
}

export default App;
