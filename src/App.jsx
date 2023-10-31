import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Content from './Pages/Content';
// import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Culture from './Pages/Culture';
import Sports from './Pages/Sports';
import Politics from './Pages/Politics';
import Celebrity from './Pages/Celebrity';
import Education from './Pages/Education';

function App() {
return(
  <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/content' element={<Content />} />
      <Route exact path='/content/culture' element={<Culture/>} />
      <Route exact path='/content/sports' element={<Sports/>} />
      <Route exact path='/content/politics' element={<Politics/>} />
      <Route exact path='/content/celebrity' element={<Celebrity/>} />
      <Route exact path='/content/education' element={<Education/>} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;
