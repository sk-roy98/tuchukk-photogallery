import React from 'react';
import {motion} from 'framer-motion';

const Modal = ({selectedImg, setSelectedImg}) => {
    
const handleClick = (e) => { 
    if(e.target.classList.contains('Modal__display')){

    setSelectedImg(null);

}
}

    return (
        <motion.div className="Modal__display" onClick= {handleClick }
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
        >
            <motion.img src= {selectedImg} alt="enlarged pic"
                initial = {{x: "-100vw"}}
                animate = {{x: 0}}

            />
        </motion.div>
    )
}
export default Modal;