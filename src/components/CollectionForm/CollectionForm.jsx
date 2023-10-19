//import { useState } from 'react';
import * as collectionsAPI from '../../utilities/collections-api';
import './CollectionForm.css';
export default function CollectionForm({  name, id, collections, setCollections }) {
    
    async function handleDelete() {
        try {
            await collectionsAPI.deleteCollection(id);
            setCollections(prevCollections => prevCollections.filter(collection => collection._id !== id));
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div autoComplete='off'
        className='CollectionForm'>          
            <div className='collection-form'>
                <div className='text-container'>      
                    {name}                   
                </div>
                
                <button
                    className='editBtn'
                    >
                    edit
                </button>
                <button
                    className='deleteBtn'
                    onClick={handleDelete}>
                    delete
                </button>   
                                                
            </div>       
        </div>
    )
}