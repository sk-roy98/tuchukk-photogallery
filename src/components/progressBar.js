import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress} = useStorage(file);
     console.log(url, progress);

     useEffect(() => {
        if(url){

            setFile(null);

        }
     }, [url, setFile])   //why setFile

    return(

        <div className = "progressBar" style = {{width : progress + '%'}}></div>

    )

}

export default ProgressBar;