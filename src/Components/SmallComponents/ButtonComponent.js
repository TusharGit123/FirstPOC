import React from 'react'

const ButtonComponent = ({
    buttontype,
    buttonclass,
    buttontext,
}) => {
    return (
          <React.Fragment>
                 <button type={buttontype} className={buttonclass} >{buttontext}</button>         
          </React.Fragment>
    )
}

export default ButtonComponent
