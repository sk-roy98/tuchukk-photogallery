import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ setSelectedImg }) =>{
    const { docs } = useFirestore('images');

    return (
        <div className="ImageGrid" >
            {docs && docs.map(doc =>
                <div className="ImageGrid__wrap" key = {doc.id} 
                onClick={() => setSelectedImg(doc.url)}>  {/*why key is used*/}
                    <img src={doc.url} alt="uploaded pic"/>
                </div>
            )}            
        </div>
    )

}

export default ImageGrid;