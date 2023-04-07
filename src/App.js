import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import store from './redux/store';


function App(props) {
  
  return (

      <div className="App">

        <Header />

        <div className="container">

          <div className="wrapper">
            <Navbar />
            <div className="app__wrapper">
              <Routes>
                <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
                <Route path="/dialogs/*" element={<Dialogs store={store} />} />
              </Routes>
            </div>
          </div>

        </div>
      </div>

  );
}

export default App;
