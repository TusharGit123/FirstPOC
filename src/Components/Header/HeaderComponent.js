import React from 'react';
import ButtonComponent from "../SmallComponents/ButtonComponent";

const HeaderComponent = ({
    headertext,
    vendorDashboard,
    addVendorBtn,
    editVendorbtn
}) => {
    return (
        <React.Fragment>
        <div className="container-fluid main-header ">
            <div className="row">
                <div className="divheading">        
                    <h4>{headertext}</h4>
                    <h4>{vendorDashboard ? "Dashboard" :""}</h4>                  
                    <div className="d-flex justify-content-between align-items-center">
                    {vendorDashboard === true && addVendorBtn === true && editVendorbtn === true ? <ButtonComponent buttonclass={"add-vendor-button"} buttontext={"add vendor"}/> :""}
                    {vendorDashboard ? <img src={require("./../../assets/Images/logout.svg")} alt="logout-img"/> : ""}
                    </div>  
                                                                   
                </div>              
            </div>
        </div>
    </React.Fragment>
    )
}

export default HeaderComponent
