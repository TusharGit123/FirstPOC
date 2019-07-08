import React, { Component } from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import InputComponent from '../SmallComponents/InputComponent';
import { Link } from 'react-router-dom';

export class VendorList extends Component {
    render() {
        return (
           <React.Fragment>
           <HeaderComponent headertext={'Logo'}/>          
           <div className="container table-container pl-0">
                <div className="col-12 vendor-search my-3 px-0 d-flex justify-content-between align-items-center">
                    <div><h4 className={'vendor'}>All Vendors</h4></div>
                    <div className="d-flex justify-content-between w-25">
                        <InputComponent 
                        img={require("./../../assets/Images/search.svg")} 
                        searchClass={'search-label'} 
                        place={'search'} 
                        inputclass={ 'form-control input-bottomblack mb-0 input-search'}/>
                        <img src={require("./../../assets/Images/sort-button-with-three-lines.svg")} alt="sort-button-with-three-lines"/>
                        <img src={require("./../../assets/Images/filter.svg")} alt="filter-img"/>   
                    </div>
                </div>                    
                <div className="row">
                    <div className="col">
                        <table>
                            <tbody>                          
                                <tr className="first-row">                                  
                                        <th>sr. No.</th>
                                        <th>Vendor Name</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Total Seated</th>
                                        <th>Total Non-Seated</th>
                                        <th>Total People</th>      
                                        <th></th>                             
                                </tr>
                
                                <tr className="second-row">
                                    <td>102</td>
                                    <td>Akhil</td>
                                    <td>Ashil123</td>
                                    <td>Ashil123</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td><img src={require("./../../assets/Images/penimg.svg")} alt="penimg"/></td>
                                </tr>
                            </tbody>                 
                        </table>
                    </div>
                </div>              
           </div>
           </React.Fragment>
        )
    }
}

export default VendorList;
