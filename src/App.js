import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './Components/Body';
import ShowDetails from './Components/ShowDetails';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Body/>}
          />
          <Route
            path="/show/:showId"
            element={<ShowDetails /> }
          />
      </Routes>

    </BrowserRouter>

    </div >
  );
}

export default App;
