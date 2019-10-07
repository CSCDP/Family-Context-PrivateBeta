import React from "react";

import Contact from "./contact";
import DetailsRow from "./detailsRow";
import DetailsBlock from "./detailsBlock";


const AdultSocialCare = ({ className, serviceData }) => {
    const data = serviceData.ASC;
    if(!data)return(<></>);
    return (
        <DetailsBlock className={className} data={data} title="Adult Social Care">
            <DetailsRow title="Service Involvement">{data.serviceInvolvement}</DetailsRow>
            <Contact contact={data.contact}></Contact>
            <DetailsRow title="Start of Last Involvement">{data.startDateOfLastInvolvement}</DetailsRow>
            <DetailsRow title="Most Recent Interaction">{data.dateOfMostRecentInteraction}</DetailsRow>
        </DetailsBlock>
    );
}

export default AdultSocialCare;