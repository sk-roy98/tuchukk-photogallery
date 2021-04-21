import React, {useState} from 'react';
import ProgressBar from './progressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null) ;
    const [error, setError] = useState(null) ;
    const types = ["image/png" , "image/jpeg", "image/jpg"];        //image types allowed

    const changeHandler = (e) => {
        
        let selected = e.target.files[0];
        //console.log(selected)
        if(selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        }
        else{
            setFile(null)
            setError("Please select a file in 'png' 'jpeg' or 'jpg' format ")
        }
    }

    return(
        <form>

            <label>
                <input type="file" onChange= {changeHandler} style= {{display: 'none'}}/>
                <span className="addButton">+</span>
            </label> 
            <div className = "output">
              {error && <div className = "error">{error}</div>}
              {file && <div className = "file">{file.name}</div>}
              {file && <ProgressBar file = {file} setfile = {setFile} />}
            </div>     
        </form>

    )

}
export default UploadForm;