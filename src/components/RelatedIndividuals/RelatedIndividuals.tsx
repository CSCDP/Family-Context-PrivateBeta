import React from 'react';
import PersonDetails from '../../models/PersonDetails';
import RelatedIndividualsInfo from './RelatedIndividualsInfo';
import RelatedIndividualsList from './RelatedIndividualsList';
import PersonRelationshipDetails from '../../models/PersonRelationshipDetails';

type RelatedIndividualsProps = {
    person: PersonDetails,
    related: PersonRelationshipDetails[],
    onView: (id: string) => void
}

const RelatedIndividuals: React.FC<RelatedIndividualsProps> = (props) => {
    return (
        <div className="RelatedIndividuals">
            <RelatedIndividualsInfo person={props.person} matches={props.related.length} />
            {props.related.length > 0 ? <RelatedIndividualsList related={props.related} onView={props.onView} /> : <></>}
        </div>
    );
}

export default RelatedIndividuals;