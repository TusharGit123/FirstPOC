import React from 'react'

const InputComponent = ({
    labeltext,
    name,
    value,
    type,
    place,
    inputclass,
    img
}) => {
    return (
        <React.Fragment>
            <div className="form-group mb-0 text-left">
            <label>{labeltext} </label>
                <div><img src={img} /></div>        
                <input name={ name } value={ value }  type={type} className={inputclass} placeholder={place}/>            
            </div>
        </React.Fragment>
    )
}

export default InputComponent
