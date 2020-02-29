import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import nashvilleAPImodule from "../nashvilleAPImodule"
import CouncilMemberCard from "./CouncilMemberCard"

const CouncilMembersList = () => {

    const [councilMembers, setCouncilMembers] = useState([]);

    const getCouncilMembers = () => {
        return nashvilleAPImodule.getEmployees.getCouncilMembers().then(councilMemberArray => {
            console.log('rendering')
            setCouncilMembers(councilMemberArray);
        });
    };

    useEffect(() => {
        getCouncilMembers();
    }, []);

    return (
        <Table hover>
            <thead>
                <tr>
                    {/* "dataKeys": ["last_name", "first_name", "position", "district", "business_phone","business_address", "email_address"] */}
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>District</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                    <th>Business Address</th>  
                </tr>
            </thead>
            <tbody>
                {councilMembers.map((councilMember, i) => <CouncilMemberCard key={i} councilMember={councilMember} onClick={console.log(i)}/>)}
            </tbody>
        </Table>
    );
};

export default CouncilMembersList;