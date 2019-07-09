import React, { Component } from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import ButtonComponent from '../SmallComponents/ButtonComponent';
import DefaultWaitTime from './DefaultWaitTime';
import VendorTableHeadRow from '../VendorDetails/VendorTableHeadRow';
import VendorTableHeadSubRow from '../VendorDetails/VendorTableHeadSubRow';


class VendorDetails extends Component {

    handleShowAll = () => {
        alert("hello");
    }

    render() {
        return (
            <React.Fragment>
                <HeaderComponent headertext={'Logo'} vendorDashboard ={true} addVendorBtn = {true} editVendorbtn={true} />
                <div className="container-fluid vendor-details-container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <h1 className="font-36-black">Akhil</h1>
                            <span className="gray-border"></span>
                            <p className="gray-text-block-p">
                                Shop no.5 Vrindavan Garden, Lane Number 6,
                                <br />
                                Koregaon Park,
                                <br />Pune,
                                <br />Maharashtra.
                            </p>
                        </div>

                        <div className="col-12 col-md-9">

                            <ButtonComponent buttontype={'button'}
                                buttonclass={'login-button login-button--vendor-details-show mr-30 mb-30'}
                                buttontext={'Show Non Seated'}
                                handleOnClick={this.handleShowAll} />

                            <ButtonComponent buttontype={'button'}
                                buttonclass={'login-button login-button--vendor-details-show-all mr-30 mb-30'}
                                buttontext={'Show All'}
                                handleOnClick={this.handleShowAll} />


                            <div className="table-time-outer-block">
                                <div>
                                    <h3 className="font-28-medium">
                                        Default Wait Time {" "}
                                        <span className="font-21-medium dark-gray-text">&#40;Mins&#41;</span>
                                    </h3>
                                    <DefaultWaitTime
                                        arrayNumber={["00", "5-10", "10-20", "30-45", "45+"]}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-28-medium">
                                        Filter By Party Size {" "}
                                    </h3>

                                    <DefaultWaitTime
                                        arrayNumber={["2", "4", "6", "8","8<", "All"]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container vendordetail-table-container">
                    <div className="row">
                        <div className="col">
                            <table>
                                <tbody>
                                   
            
                                        <VendorTableHeadRow
                                        no={'sr. No'}
                                        Name={'Name'}
                                        Phone={'Phone Number'}
                                        OrderType={'Order Type'}
                                        Adults={'Adults'}
                                        Kids={'Kids'}
                                        Total={'Total'}
                                        Occassion={'Special Occassion'}
                                        WaitTime={'WaitTime'}
                                        Timer={'Timer'}
                                        Status={'Status'}
                                        />
            
                                   
                                        <VendorTableHeadSubRow
                                        no={'102'}
                                        Name={'Akhil'}
                                        Phone={'+911234567890'}
                                        Img={require("./../../assets/Images/walking-img.svg")}
                                        Adults={'2'}
                                        Kids={'0'}
                                        Total={'2'}
                                        Occassion={'Wedding'}
                                        WaitTime={'25'}
                                        Timer={'10:00'}
                                        Status={'Not Seated'}/>          
                                </tbody>
                            </table>
                        </div>    
                    </div>    
                </div>
            </React.Fragment>
        )
    }
}

export default VendorDetails;
