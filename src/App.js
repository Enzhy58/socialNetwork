import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


function App(props) {
  
  return (

      <div className="App">

        <HeaderContainer />

        <div className="container">

          <div className="wrapper">
            <Navbar />
            <div className="app__wrapper">
              <Routes>
                <Route path="/profile/:userId*" element={<ProfileContainer />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/users/*" element={<UsersContainer />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>

        </div>
      </div>

  );
}

export default App;
