import sendRequest from "./send-request";
const BASE_URL = '/api/collections';

export async function createCollection(collection) {   
    return sendRequest(BASE_URL, 'POST', collection);
}

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function deleteCollection(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

/*export async function editCollectionFunction(id, updatedData) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', updatedData)
}*/
