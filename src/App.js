import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';


function App(props) {
  
  return (

      <div className="App">

        <Header />

        <div className="container">

          <div className="wrapper">
            <Navbar />
            <div className="app__wrapper">
              <Routes>
                <Route path="/profile/*" element={<Profile store={props.store} />} />
                <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
              </Routes>
            </div>
          </div>

        </div>
      </div>

  );
}

export default App;
