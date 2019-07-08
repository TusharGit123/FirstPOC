import React, { Component } from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import ButtonComponent from '../SmallComponents/ButtonComponent';
import DefaultWaitTime from './DefaultWaitTime';


class VendorDetails extends Component {

    handleShowAll = () => {
        alert("hello");
    }

    render() {
        return (
            <React.Fragment>
                <HeaderComponent headertext={'Logo'} />
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
                                        Default Wait time {" "}
                                        <span className="font-21-medium dark-gray-text">&#40;Mins&#41;</span>
                                    </h3>
                                    <DefaultWaitTime
                                        arrayNumber={["00", "5-10", "10-20", "30-45", "45+"]}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-28-medium">
                                        Filter by party size {" "}
                                    </h3>

                                    <DefaultWaitTime
                                        arrayNumber={["2", "4", "6", "8", "All"]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default VendorDetails;
