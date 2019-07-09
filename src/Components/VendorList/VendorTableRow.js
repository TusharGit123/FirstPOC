import React from 'react'

const VendorTableRow = ({
    no,
    vendorName,
    venderUser,
    vendorPassword,
    totalSeated,
    totalNonSeated,
    totalPeople,
    img,
    alt

}) => {
    return (
        <React.Fragment>
            <tr className="second-row">
                    <td>{no}</td>
                    <td>{vendorName}</td>
                    <td>{venderUser}</td>
                    <td>{vendorPassword}</td>
                    <td>{totalSeated}</td>
                    <td>{totalNonSeated}</td>
                    <td>{totalPeople}</td>              
                    <td><img src={img} alt={alt}/></td>
                </tr>
        </React.Fragment>
    )
}

export default VendorTableRow
