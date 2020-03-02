import React from 'react';
import PersonRelationshipDetails from '../../models/PersonRelationshipDetails';
import RowValues from '../Table/RowValues';
import { formatShortDateOrString } from '../../tools/FormattingTools';

type RelatedIndividualsRowProps = {
    relation: PersonRelationshipDetails,
    onClickFunc?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void
}

const RelatedIndividualsRow: React.FC<RelatedIndividualsRowProps> = (props) => {
    var values = [
        props.relation.relationship,
        props.relation.id,
        props.relation.firstName,
        props.relation.lastName,
        formatShortDateOrString(props.relation.dateOfBirth)
    ]

    return (
        <RowValues rowValues={values} key={props.relation.id} />
    )
}

const RelatedIndividualsHeader: React.FC = () => {
    var values = [
        "Relationship",
        "Mosaic Case ID",
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