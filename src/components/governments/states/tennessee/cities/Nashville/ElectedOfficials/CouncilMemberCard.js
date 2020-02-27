import React from "react"
import { Table } from 'reactstrap';



const CouncilMemberCard = (props) => {
    return (
        <tr>
            <th scope="row">props.id</th>
            <td>{props.councilMember.first_name + " " + props.councilMember.last_name}</td>
            <td>{props.councilMember.position}</td>
            <td>{props.councilMember.district}</td>
            <td>{props.councilMember.business_phone}</td>
            <td>{props.councilMember.email_address}</td>
            <td>{props.councilMember.business_address}</td>
        </tr>
    );

};

export default CouncilMemberCard;