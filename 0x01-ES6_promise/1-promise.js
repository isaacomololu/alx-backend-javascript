/* eslint-disable */
export default function getFullResponseFromAPI(success) {
    const value = new Promise((resolve, reject) => {
        if (success) {resolve({ status: 200, body: 'Success' })} 
        reject('Error: The fake API is not working currently');
    });
    return value
}