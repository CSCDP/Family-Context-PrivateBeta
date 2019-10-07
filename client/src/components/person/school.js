import React from "react";

import Contact from "./contact";
import DetailsRow from "./detailsRow";
import DetailsBlock from "./detailsBlock";


const School = ({ className, serviceData }) => {
    const data = serviceData.SCHOOL;
    console.log(data)
    if(!data)return(<></>);
    return (
        <DetailsBlock className={className} data={data} title="School">
            <DetailsRow title="School">{data.schoolName}</DetailsRow>
            <Contact contact={data.contact}></Contact>
            <DetailsRow title="Service Involvement">{data.serviceInvolvement}</DetailsRow>
            <DetailsRow title="Admission Type">{data.admissionType}</DetailsRow>
        </DetailsBlock>
    );
}

export default School;