import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress} = useStorage(file);
     console.log(url, progress);

     useEffect(() => {
        if(url){

            setFile(null);

        }
     }, [url, setFile])   //why setFile

    return(

        <motion.div className = "progressBar"
            initial = {{width:0}}
            animate = {{width: progress + '%'}} 
        ></motion.div>

    )

}

export default ProgressBar;