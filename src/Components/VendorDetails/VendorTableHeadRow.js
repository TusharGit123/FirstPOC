import React from 'react'

const VendorTableHeadRow = ({
    no,
    Name,
    Phone,
    OrderType,
    Adults,
    Kids,
    Total,
    Occassion,
    WaitTime,
    Timer,
    Status,
    Img,
    Alt
}) => {
    return (
        <React.Fragment>      
            <tr className="first-row">                                  
                <th>{ no }</th>
                <th>{ Name }</th>
                <th>{ Phone }</th>
                <th>{ OrderType }</th>
                <th>{ Adults }</th>
                <th>{ Kids }</th>
                <th>{ Total }</th>      
                <th>{ Occassion }</th> 
                <th>{ WaitTime }</th>
                <th>{ Timer }</th>
                <th>{ Status }</th>                                         
            </tr>
        </React.Fragment>
    )
}

export default VendorTableHeadRow
