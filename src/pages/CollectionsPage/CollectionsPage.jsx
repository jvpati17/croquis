import {useState, useEffect } from 'react';
import * as collectionsAPI from '../../utilities/collections-api';
import CollectionForm from '../../components/CollectionForm/CollectionForm';
import NewCollectionForm from '../../components/NewCollectionForm/NewCollectionForm';
//LATER: import './CollectionsPage.css';

export default function CollectionsPage() {
    const [collections, setCollections] = useState([]);

    async function getCollections() {
        try {
          const fetchedCollections = await collectionsAPI.getAll();
          setCollections(fetchedCollections);
        } catch (error) {
          console.error('Error fetching collections:', error);
        }
      }
    
      useEffect(() => {
        getCollections();  // Initial fetch
        const intervalId = setInterval(() => {
          getCollections();  // Fetch collections periodically
        }, 1000); // Adjust the interval as needed
    
        return () => clearInterval(intervalId);
      }, []);

    /*useEffect(function() {
        const intervalId = setInterval(() => {
            getCollections();
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);*/
    
    /* ORIGINAL HERE: useEffect(function() {
        async function getCollections() {
            const collections = await collectionsAPI.getAll();
            setCollections(collections);
           
            
        }
        getCollections();
    }, []);*/

    const collectionForms = collections.map((collections, idx) =>
    <CollectionForm
    collections={ collections } 
    setCollections={ setCollections }
    key={idx} 
    name={ collections.name } 
    id={ collections._id } />)

    return (
        <div className='CollectionsPage'>
            
            <p>new collections form</p>
            <NewCollectionForm collections={collections} setCollections={setCollections} />   
            
               <p>collections form</p>
                
                <div> { collectionForms }</div>
                
                
                
               
            
        </div>
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