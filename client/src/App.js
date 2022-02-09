import './App.css';
import { Main } from './Views/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from './Views/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/:id' element={<Detail />}/>
        </Routes>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
