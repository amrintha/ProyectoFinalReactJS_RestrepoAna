import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <ItemListContainer saludo ={"Deja que la magia llene tus días de sonrisas!git"}/>

    </div>
  )
}

export default App
