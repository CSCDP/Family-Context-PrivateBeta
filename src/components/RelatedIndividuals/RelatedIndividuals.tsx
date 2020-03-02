import React from 'react';
import PersonDetails from '../../models/PersonDetails';
import RelatedIndividualsInfo from './RelatedIndividualsInfo';
import RelatedIndividualsList from './RelatedIndividualsList';
import PersonRelationshipDetails from '../../models/PersonRelationshipDetails';

type RelatedIndividualsProps = {
    person: PersonDetails,
    related: PersonRelationshipDetails[],
    navigate: (id: number) => void
}

const RelatedIndividuals: React.FC<RelatedIndividualsProps> = (props) => {
    return (
        <div className="RelatedIndividuals">
            <RelatedIndividualsInfo person={props.person} matches={props.related.length} />
            {props.related.length ? <RelatedIndividualsList related={props.related} navigate={props.navigate} /> : <></>}
        </div>
    );
}

export default RelatedIndividuals;