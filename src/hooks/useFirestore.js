import  {useState,  useEffect} from 'react';
import {tuchukkFirestore} from '../firebase/config'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        
        const unsub = tuchukkFirestore.collection(collection) // the collection as a parameter is basically 'images' collection

        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = [] ; 
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);

        });
        return() => unsub();       //why?
    }, [collection])

    return { docs };  //why this braces.. for object?.. array is passed
}

export default useFirestore;