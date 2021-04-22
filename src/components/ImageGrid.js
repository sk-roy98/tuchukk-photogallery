import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () =>{
    const { docs } = useFirestore('images');

    return (
        <div className="imageGrid" >
            {docs && docs.map(doc =>
                <div className="imageWrap" key = {doc.id}>
                    <img src={doc.url} alt="uploaded pic"/>
                </div>
            )}            
        </div>
    )

}

export default ImageGrid;