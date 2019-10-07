import React from "react";

import Contact from "./contact";
import DetailsRow from "./detailsRow";
import DetailsBlock from "./detailsBlock";

const Police = ({ className, serviceData }) => {
    const data = serviceData.POLICE;
    if(!data)return(<></>);
    return (
        <DetailsBlock className={className} data={data} title="Police">
            <DetailsRow title="Service Involvement">{data.serviceInvolvement}</DetailsRow>
            <DetailsRow title="Police Station">{data.policeStation}</DetailsRow>
            <Contact contact={data.contact}></Contact>
            { data.offences.map((offence, ix) => (
                <DetailsRow key={ix} title={ix===0?"Involvement":""}>
                    {offence.dateOfOffence}
                    {" - "}{offence.natureOfInvolvement}
                    {" - "}{offence.typeOfOffence}
                </DetailsRow>
            ))}
        </DetailsBlock>
    );

}

export default Police;