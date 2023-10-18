import { useState } from 'react';
//possibly useEffect as well
//LATER: import { useNavigate } from 'react-router-dom';
import * as collectionsAPI from '../../utilities/collections-api';
//LATER: import './NewCollectionForm.css';

export default function NewCollectionForm({ setCollections }) {
    const [newCollection, setNewCollection] = useState({
        collection: ''
    });

    function handleChange(evt) {
        const updateCollection = { ...newCollection, [evt.target.name]: evt.target.value };
        setNewCollection(updateCollection);  
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          const newCollectionData = await collectionsAPI.createCollection({ name: newCollection.collection });
          setCollections(prevCollections => [newCollectionData, ...prevCollections]);
          setNewCollection({ collection: '' });
        } catch (err) {
          console.log(err);
        }
      }

    /*async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            await collectionsAPI.createCollection({ name: newCollection.collection })
            setNewCollection({collection: ''})
            
        } catch (err) {
            console.log(err);
        }
    }*/
   

    return (
        <div className='NewCollectionForm'>
            <form
            autoComplete='off'
            onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='collection name' 
                name='collection'
                required
                value={ newCollection.collection }
                onChange={handleChange} 
                /> <button type='submit'>start collection</button> 
            </form>
        </div>
    )
}














/*import { useState } from 'react';
//import * as collectionsService from '../../utilities/collections-service';

/*export default function NewCollectionForm({ setCollection }) {
    state = {
        collectionname: ''
    }*/


//export default function NewCollectionForm({ setCollection, handleCreateCollection, handleInputChange }) {
    //const collection = useState('');
    //const [error, setError] = useState('');
    //const [collections, setCollections] = useState([]);

    /*function handleInputChange(evt) {
            setCollection({
                ...collection,
                [evt.target.collectionname]: evt.target.value});
            setError('');
    };

    async function handleCreateCollection(evt) {
        evt.preventDefault();
        try {
            const formData = {collection};
            const collection = await collectionsService.newCollection(formData);
            setCollection(collection); 
        } catch {
            setError('collection failed to create');
        }
    };*/

    /*return (
        <div>
            <form autoComplete="off" onSubmit={handleCreateCollection}>
            <input 
                type="text"
                name="collectionname"
                placeholder='name your collection'
                value={collection.collectionname}
                onChange={handleInputChange}
                required />
            <button type="submit">start collection</button>          
            </form>
            <ul>
                {collection.map((collection, index) => (
                    <li key={index}>{collection}</li>
                ))}
            </ul>
            
        </div>
    );
};*/


