//LATER: import { useNavigate } from 'react-router-dom';
//LATER: import'./CollectionForm
import * as collectionsAPI from '../../utilities/collections-api';


export default function CollectionForm({ collections, name, id, setCollections }) {
    async function handleDelete() {
        try {
            await collectionsAPI.deleteCollection(id);
            setCollections(prevCollections => prevCollections.filter(collection => collection._id !== id));
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div autoComplete='off' className='CollectionForm'>
            
            <div className='collection-form'>
                <div className='text-container'>
                    <h4>{collections.name}</h4>
                </div>
                <button onClick={handleDelete}>delete</button>
            </div>
            
        </div>
    )
}