import React from 'react'

const InputComponent = ({
    labeltext,
    name,
    value,
    type,
    place,
    inputclass,
    img,
    formGroupClass
}) => {
    return (
        <React.Fragment>
            <div className={formGroupClass}>
                <label>{labeltext} </label>
                <div><img src={img} /></div>
                <input name={name} value={value} type={type} className={inputclass} placeholder={place} />
            </div>
        </React.Fragment>
    )
}

export default InputComponent
