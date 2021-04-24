import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) =>{
    const { docs } = useFirestore('images');

    return (
        <div className="ImageGrid" >
            {docs && docs.map(doc =>
                <motion.div className="ImageGrid__wrap" key = {doc.id} 
                layout
                whileHover = {{opacity: 1}}
                onClick={() => setSelectedImg(doc.url)}>  {/*why key is used*/}
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial = {{opacity: 0.3}}
                        animate = {{opacity: 1}}
                        transition = {{delay: 0.8}}
                    />
                </motion.div>
            )}            
        </div>
    )

}

export default ImageGrid;