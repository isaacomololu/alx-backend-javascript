import { uploadPhoto , createUser } from 'utils.js';


export default function handleProfileSignup() {
    const photo = uploadPhoto();
    const user = createUser();


    Promise.all[photo, user]
    .then((value) => {
        console.log(`${value[0].body} ${value[1].firstName} ${value[2].lastName}`);
    })
    .catch(() => {console.log('Signup system offline')});
}