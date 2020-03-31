import React from 'react';
import PersonDetails from '../../models/PersonDetails';
import RowValues from '../Table/RowValues';
import { formatShortDateOrString, formatShortAddress, formatAgeInYearsFromStringOrDate } from '../../tools/FormattingTools';

type ResultsListRowProps = {
    person: PersonDetails,
    onClickFunc?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void
}

const ResultsListRow: React.FC<ResultsListRowProps> = (props) => {
    var values = [
        props.person.cmsId,
        props.person.firstName,
        props.person.lastName,
        formatShortDateOrString(props.person.dateOfBirth),
        formatAgeInYearsFromStringOrDate(props.person.dateOfBirth),
        formatShortAddress(props.person.address)
    ]

    return (
        <RowValues rowValues={values} key={props.person.id} onClickFunc={props.onClickFunc} />
    )
}

const ResultsListHeader: React.FC = () => {
    var values = [
        "CMS ID",
        "First name",
        "Family name",
        "Date of Birth",
        "Age",
        "Address"
    ]

    var format = new Array(values.length).fill("govuk-table__header")

    return (
        <RowValues rowValues={values} format={format} />
    )
}

export {ResultsListRow, ResultsListHeader};