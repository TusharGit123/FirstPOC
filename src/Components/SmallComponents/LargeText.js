import React from 'react'

const LargeText = ({
    largetext,
    largetextclass
}) => {
    return (
        <React.Fragment>
            <div className="col-12 my-3">
             <h4 className={largetextclass}>{largetext}</h4>
            </div>           
        </React.Fragment>
    )
}

export default LargeText;
