import React from 'react';

const Modal = ({selectedImg, setSelectedImg}) => {
    
const handleClick = (e) => { 
    if(e.target.classList.contains('Modal__display')){

    setSelectedImg(null);

}
}

    return (
        <div className="Modal__display" onClick= {handleClick }>
            <img src= {selectedImg} alt="enlarged pic"/>
        </div>
    )
}
export default Modal;