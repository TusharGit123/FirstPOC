import React from 'react'

const LargeText = ({
    largetext,
    largetextclass
}) => {
    return (
        <React.Fragment>
            <div className="col-12 my-3 px-0">
             {largetext ? <h4 className={largetextclass}>{largetext}</h4> : null }
            </div>           
        </React.Fragment>
    )
}

export default LargeText;
