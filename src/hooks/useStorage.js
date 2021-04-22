import {useState , useEffect} from 'react';
import {tuchukkFirestore, tuchukkStorage, timestamp} from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(null);
    const [error, setError] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {

        const storageRef = tuchukkStorage.ref(file.name);
        const collectionRef = tuchukkFirestore.collection('images')

//need to understand the snap part.
        storageRef.put(file).on('state_change', (snap) =>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; 
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async() => {     
            const url = await storageRef.getDownloadURL();
            setUrl(url);
            const createdAt = timestamp();
            collectionRef.add( {url, createdAt} )
        })
    }, [file]);
    return { progress, error, url }  
}

export default useStorage;