import React from 'react'

const InputComponent = ({
    labeltext,
    name,
    value,
    type,
    place,
    inputclass,
    img,
    alt,
    searchClass
}) => {
    return (
        <React.Fragment>
            <div className={`form-group mb-0 text-left username-login-form-group ${searchClass}`}>
            <label>{labeltext} </label>
                <div><img src={img} alt={alt}/></div>        
                <input name={ name } value={ value }  type={type} className={inputclass} placeholder={place}/>            
            </div>
        </React.Fragment>
    )
}

export default InputComponent
