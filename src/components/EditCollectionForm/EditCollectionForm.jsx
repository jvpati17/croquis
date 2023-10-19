import { useState, useEffect } from 'react';
import './EditCollectionForm.css';

export default function EditCollectionForm({ isEditing, editedCollection, onSubmit }) {
    const [name, setName] = useState(editedCollection ? editedCollection.name : '');

    function handleSubmit(evt) {
        evt.preventDefault();
        if (isEditing) {

            onSubmit({ id: editedCollection._id, name });
        } else {
            onSubmit({ name });
        }
    }

    return (
        <div className='EditCollectionForm'>
            <form
            onSubmit={handleSubmit}>
                <input
                type='text'
                value={name}
                onChange={(evt) =>
                setName(evt.target.value)}
                />
                <button type='submit'>
                    {isEditing ? 'submit edited collection' : 'create collection'}
                </button>
            </form>
        </div>
    )
}