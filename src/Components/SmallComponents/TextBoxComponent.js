import React from 'react'

const TextBoxComponent = ({
    name,
    text,
    labeltext,
    Textareaclass,
    place,
    img,
    alt
}) => {
    return (
       <React.Fragment>
       <form className="form-group mb-0 text-left username-login-form-group">
            <label>{labeltext} </label>
                <div><img src={img} alt={alt} /></div>
                    <textarea name={name} className={Textareaclass} placeholder={place} cols="40" rows="4">
                        {text}
                    </textarea>       
       </form>     
       </React.Fragment>
    )
}

export default TextBoxComponent
