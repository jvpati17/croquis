import {useState, useEffect } from 'react';
import * as collectionsAPI from '../../utilities/collections-api';
import CollectionForm from '../../components/CollectionForm/CollectionForm';
import NewCollectionForm from '../../components/NewCollectionForm/NewCollectionForm';
import './CollectionsPage.css';

export default function CollectionsPage({ user }) {
    const [collections, setCollections] = useState([]);
    //const [editCollection,  editedCollection] = useState(false);
    //const editMode  = useState(false);

    async function getCollections() {
        try {
          const fetchedCollections = await collectionsAPI.getAll();
          setCollections(fetchedCollections);
        } catch (error) {
          console.error('Error fetching collections:', error);
        }
      }
    
      useEffect(() => {
        getCollections(); 
        const intervalId = setInterval(() => {
          getCollections();  
        }, 237000); 
        return () => clearInterval(intervalId);
      }, []);

    const collectionForms = collections.map((collections, idx) =>
    <CollectionForm
    collections={ collections } 
    setCollections={ setCollections }
    key={idx} 
    name={ collections.name } 
    id={ collections._id }
    //user= { user }
    /*editCollection={editCollection}
    editMode={editMode}*/ />) 

    return (
        <main className='CollectionsPage'>
            
                <NewCollectionForm
                    collections={collections}
                    setCollections={setCollections}             
                />   
               
            <div> { collectionForms }</div>           
        </main>
    )
}


























//import { useRef } from 'react';
//import * as collectionsService from '../../utilities/collections-service';
/*import NewCollectionForm from '../../components/NewCollectionForm/NewCollectionForm';

export default async function CollectionsPage() {
    const createCollection = (name); {
        try {
            const response = await fetch('./collections', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name })
            });

            if (response.ok) {
                const newCollection = await response.json();
                console.log('new collection created', newCollection);
            } else {
                console.error('collection creation failed');
            } 
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <h1>my collections</h1>
            <NewCollectionForm createCollection={createCollection} />
        </div>
    );
};*/

/*export default function CollectionsPage({ collection, setCollection }) {
    const collectionsRef = useRef([]);
    //const [collection, setCollection] = useState('');

    function handleInputChange(evt) {
        setCollection({
            ...collection,
            [evt.target.name]: evt.target.value});
        //setError('');
};

async function handleCreateCollection(evt) {
    //evt.preventDefault();
    try {
        const formData = {collection};
        const collection = await collectionsService.newCollection(formData);
        setCollection(collection); 
    } catch {
        //setError('collection failed to create');
    }
}
    return (
        <>
        <h1>my collections</h1>
        <NewCollectionForm collection={collection} setCollection={setCollection}
        setUser={setUser} handleInputChange={handleInputChange} handleCreateCollection={handleCreateCollection}
        />       
        </>       
    )
}*/