import React, { Component } from 'react';
import InputComponent from '../SmallComponents/InputComponent';
import ButtonComponent from '../SmallComponents/ButtonComponent';
import HeaderComponent from '../Header/HeaderComponent';
import Largetext from '../SmallComponents/LargeText';



export class Login extends Component {
    render() {
        return (
          <React.Fragment>
            <HeaderComponent headertext={'Logo'}/>
              <div className="container text-center">
                  <div className="row">
                  <div className="col-4"></div>
                      <div className="col-4 login-align">
                        <Largetext largetext={'Welcome!'} largetextclass={'welcome-text'}/>
                        <p>It's nice to see you again!<br/>Login to continue to your account</p> 
                        <Largetext largetext={'Login'} largetextclass={'login-text'}/>                    
                        <InputComponent img={require("./../../assets/Images/usernamepic.svg")} 
                        formGroupClass="form-group mb-0 text-left username-login-form-group"
                        labeltext={'Username'} 
                        name={'Username'} 
                        type={"Username"} 
                        place={"eg. James Bond"} 
                        inputclass={ 'form-control input-bottomblack ' }/>
                        <InputComponent
                         img={require("./../../assets/Images/passwordpic.svg")}
                         formGroupClass="form-group mb-0 text-left username-login-form-group"
                         labeltext={'Password'}
                          name={'password'} 
                          type={"password"} 
                          place={"*****"} 
                          inputclass={ 'form-control input-bottomblack' }/>                       
                        <ButtonComponent buttontype={'button'} buttonclass={'login-button'} buttontext={'Login'} />                    
                      </div>
                      <div className="col-4"></div>
                  </div>
              </div>          
          </React.Fragment>
        )
    }
}

export default Login

