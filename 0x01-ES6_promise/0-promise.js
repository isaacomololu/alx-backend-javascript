/* eslint-disable */
export default function getResponseFromAPI() {
    const value = new Promise((resolve, reject) => {
        resolve(true);
        reject();
    }) 
    return value
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);
