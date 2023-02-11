import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Componets/Navbar/Navbar';
import PublishBlog from './Pages/PublishBlog/PublishBlog';
import BlogPost from './Pages/BlogPost/BlogPost';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      {/* <PublishBlog/> */}
      {/* <BlogPost/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<BlogPost/>}/>
        <Route path='/publishblog' element={<PublishBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;
