import React from 'react';

const HeaderComponent = ({
    headertext
}) => {
    return (
        <React.Fragment>
        <div className="container-fluid main-header">
            <div className="row">
                <div className="divheading">        
                    <h4>{headertext}</h4>
                </div>               
            </div>
        </div>
    </React.Fragment>
    )
}

export default HeaderComponent
