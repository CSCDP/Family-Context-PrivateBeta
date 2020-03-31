import React from 'react';
import PersonRelationshipDetails from '../../models/PersonRelationshipDetails';
import RowValues from '../Table/RowValues';
import { formatShortDateOrString } from '../../tools/FormattingTools';
import ViewButton from '../Buttons/ViewButton';

type RelatedIndividualsRowProps = {
    relation: PersonRelationshipDetails,
    onView: (id: string) => void
}

const RelatedIndividualsRow: React.FC<RelatedIndividualsRowProps> = (props: RelatedIndividualsRowProps) => {
    var values = [
        props.relation.relationship,
        props.relation.cmsId,
        props.relation.firstName,
        props.relation.lastName,
        formatShortDateOrString(props.relation.dateOfBirth),
        <ViewButton action={() => props.onView(props.relation.id)}/>
    ]

    return (
        <RowValues rowValues={values} key={props.relation.id} />
    )
}

const RelatedIndividualsHeader: React.FC = () => {
    var values = [
        "Relationship",
        "CMS Case ID",
        "First Name",
        "Family Name",
        "Date of Birth"
    ]

    var format = new Array(values.length).fill("govuk-table__header")

    return (
        <RowValues rowValues={values} format={format} />
    )
}

export {RelatedIndividualsRow, RelatedIndividualsHeader};