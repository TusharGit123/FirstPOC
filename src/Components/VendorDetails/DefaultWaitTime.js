import React, { Component } from 'react';

const DefaultWaitTime = ({
    arrayNumber
}) => {

    const divElement = arrayNumber.map((number, index) =>
        <span key={index} className="font-28-medium">
            {number}
        </span>
    );
    return (
        <div className="default-wait-time-block">
            {divElement}
        </div>
    );
}

export default DefaultWaitTime;