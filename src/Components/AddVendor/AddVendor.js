import React, { Component } from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import LargeText from '../SmallComponents/LargeText';
import InputComponent from '../SmallComponents/InputComponent';
import ButtonComponent from '../SmallComponents/ButtonComponent';
import TextBoxComponent from '../SmallComponents/TextBoxComponent';



export class AddVendor extends Component {

    handleShowAll = () => {
        alert("Next");
    }

    render() {
        return (
           <React.Fragment>
            <HeaderComponent headertext={'Logo'} vendorDashboard={true} addVendorBtn={false}/>
            <div className="container text-center">
            <div className="row">
                <div className="col-md-4"></div>

                <div className="col-md-4 add-vendor-align">

                <LargeText 
                largetext={'Add Vendor'} 
                largetextclass={'addvendor-text'}/>

                <InputComponent
                        img={require("./../../assets/Images/usernamepic.svg")}  
                        alt={'user-img'}                       
                        labeltext={'Vendor Name'} 
                        name={'Username'} 
                        type={"Username"} 
                        place={"eg. James Bond"} 
                        inputclass={ 'form-control input-bottomblack ' }/>

                <InputComponent
                        img={require("./../../assets/Images/email-img.svg")}  
                        alt={'Email-img'}                       
                        labeltext={'Email'} 
                        name={'Email'} 
                        type={"Email"} 
                        place={"eg. something@something.com"} 
                        inputclass={ 'form-control input-bottomblack ' }/>   
                        
                <InputComponent
                        img={require("./../../assets/Images/phone-img.svg")}  
                        alt={'Phone-img'}                       
                        labeltext={'Phone Number'} 
                        name={'Phone'} 
                        type={"Number"} 
                        place={"eg. 123567890"} 
                        inputclass={ 'form-control input-bottomblack ' }/>

                        <TextBoxComponent
                        img={require("./../../assets/Images/location-img.svg")}
                        name={'Address'} 
                        type={"Username"}
                        labeltext={'Address'}
                        place={"eg. Riverdale"}
                        Textareaclass={ 'form-control textarea-bottomblack ' } />
                        
                        <ButtonComponent 
                        buttontype={'button'} 
                        buttonclass={'login-button'}
                        buttontext={'Next'} 
                        handleOnClick={this.handleShowAll}/>   
                        
                        <ButtonComponent 
                        buttontype={'button'} 
                        buttonclass={'cancel-button'}
                        buttontext={'Cancel'} 
                        handleOnClick={this.handleShowAll}/>   
                </div>
                <div className="col-md-4"></div>
            </div>

            </div>
           </React.Fragment>
        )
    }
}

export default AddVendor
