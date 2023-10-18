import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import CollectionsPage from '../CollectionsPage/CollectionsPage';


 export default function App() {
  const [user, setUser] = useState(getUser());
  const [collections, setCollections] = useState([]);
  
  return (
    <main className="App">
      { user ?
          <> 
          <p>cro·​quis welcome { user.username }  krō-ˈkē </p>
        <NavBar user={ user } setUser={ setUser } />
        <Routes>
          <Route path="/" element={ <CollectionsPage user={user} collections={ collections } setCollections= { setCollections }/>} />
        </Routes>
          </>
       :
      <AuthPage setUser={ setUser } />
      }
    </main>
  );
}


