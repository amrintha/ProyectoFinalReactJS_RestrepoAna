import './App.css'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/category/:category" element={ <ItemListContainer /> } />
          <Route path="/detail/:productId" element={ <ItemDetailContainer /> } />
          <Route path="*" element={<div>Error 404</div>} />
        
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App
