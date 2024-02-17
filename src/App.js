import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


function App(props) {
  
  return (

      <div className="App">

        <Header />

        <div className="container">

          <div className="wrapper">
            <Navbar />
            <div className="app__wrapper">
              <Routes>
                <Route path="/profile/*" element={<ProfileContainer />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/users/*" element={<UsersContainer />} />
              </Routes>
            </div>
          </div>

        </div>
      </div>

  );
}

export default App;
