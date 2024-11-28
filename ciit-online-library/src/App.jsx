import './App.css'
import Navbar from './component/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'

function App() {
 

  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
