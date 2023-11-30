import { signUpUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName ) {
    const signUpUserPromise = signUpUser(firstName, lastName);
    const uploadPhotoPromise = uploadPhoto(fileName);

    return Promise.allSettled([signUpUserPromise, uploadPhotoPromise])
        .then((values) => {
            values.forEach((element) => {
                if (element.status === 'fulfilled') {
                  result.push({ status: element.status, value: element.value });
                } else {
                  result.push({ status: element.status, value: `${element.reason}` });
                }
              });
              return result;
            });
       
}