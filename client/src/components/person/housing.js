import React from "react";

import Contact from "./contact";
import DetailsRow from "./detailsRow";
import DetailsBlock from "./detailsBlock";


const Housing = ({ className, serviceData }) => {
    const data = serviceData.HOUSING;
    if(!data)return(<></>);
    return (
        <DetailsBlock className={className} data={data} title="Housing">
            <DetailsRow title="Service Involvement">{data.serviceInvolvement}</DetailsRow>
            <Contact contact={data.contact}></Contact>
            <DetailsRow title="Anti-social Behaviour">{data.antiSocialBehaviour}</DetailsRow>
            <DetailsRow title="Rent Arrears">{data.rentArrears}</DetailsRow>
            <DetailsRow title="Notice Seeking Possession">{data.noticeSeekingPossession}</DetailsRow>
            <DetailsRow title="Eviction">{data.eviction}</DetailsRow>
        </DetailsBlock>
    );
}

export default Housing;