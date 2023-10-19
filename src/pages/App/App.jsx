import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import CollectionsPage from '../CollectionsPage/CollectionsPage';

import EditCollectionForm from '../../components/EditCollectionForm/EditCollectionForm';

 export default function App() {
  const [user, setUser] = useState(getUser());
  const [collections, setCollections] = useState([]);
  //const [editCollection, setEditCollection] = useState(false);
  //const [editMode, setEditMode ]  = useState(false);

  return (
    <main className="App">
      { user ?
          <> 
          <p>cro·​quis krō-ˈkē </p>
          <NavBar user={ user } setUser={ setUser } />
          
          
          <Routes>
            <Route
              path="/"
              element={ <CollectionsPage
              user={user}
              collections={ collections }
              setCollections= { setCollections }
              setUser={ setUser }
              /*editCollection={ editCollection }
              setEditCollection={ setEditCollection }
              editMode={editMode}*//>}
            /> 
          </Routes>
          </>
       :
      <AuthPage setUser={ setUser } />
      }
    </main>
  );
}


