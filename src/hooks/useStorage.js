import {useState , useeffect} from 'react';
import tuchukkStorage from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(null);
    const [error, setError] = useState("");
    const [url, setUrl] = useState("");

    useeffect(() => {

        const storageRef = tuchukkStorage.ref(file.name);
//need to understand the snap part.
        tuchukkStorage.put(file).on('state_change', (snap) =>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; //can be error
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async() => {     //need to understand
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    }, [file]);
    return { progress, error, url }  
}

export default useStorage;