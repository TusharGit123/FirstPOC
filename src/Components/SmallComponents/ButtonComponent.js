import React from 'react'

const ButtonComponent = ({
    buttontype,
    buttonclass,
    buttontext,
    handleOnClick
}) => {
    return (
        <React.Fragment>
            <button
                type={buttontype}
                className={buttonclass}
                onClick={handleOnClick}>
                {buttontext}
            </button>
        </React.Fragment>
    )
}

export default ButtonComponent;
