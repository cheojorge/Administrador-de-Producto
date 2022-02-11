
import { Main } from './Views/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from './Views/Detail';
import Update from './Views/Update';
import { MyProvide } from './Context/myContext';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <MyProvide>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/:id' element={<Detail />}/>
            <Route path='/:id/edit' element={<Update />}/>
          </Routes>
        </MyProvide>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
