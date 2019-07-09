import React from 'react'

const VendorTableHeadSubRow = ({
    no,
    Name,
    Phone,
    // OrderType,
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
            <tr className="second-row">
                <td>{ no }</td>
                <td>{ Name }</td>
                <td>{ Phone }</td>
                <td><img src={Img} alt={Alt}/></td>
                <td>{ Adults }</td>
                <td>{ Kids }</td>
                <td>{ Total }</td>      
                <td>{ Occassion }</td> 
                <td>{ WaitTime }</td>
                <td>{ Timer }</td>
                <td>{ Status }</td>          
            </tr>
       </React.Fragment>
    )
}

export default VendorTableHeadSubRow
