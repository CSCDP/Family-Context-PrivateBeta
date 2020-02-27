import React from 'react';
import PersonDetails from '../../models/PersonDetails';
import RowValues from '../Table/RowValues';
import { formatDateOrString, formatShortAddress, formatAgeInYearsFromStringOrDate } from '../../tools/FormattingTools';

type ResultsListBodyProps = {
    person: PersonDetails,
    onClickFunc?: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void
}

const ResultsListBody: React.FC<ResultsListBodyProps> = (props) => {
    var values = [
        props.person.id.toString(),
        props.person.firstName,
        props.person.lastName,
        formatDateOrString(props.person.dateOfBirth),
        formatAgeInYearsFromStringOrDate(props.person.dateOfBirth),
        formatShortAddress(props.person.address)
    ]

    return (
        <RowValues rowValues={values} key={props.person.id} onClickFunc={props.onClickFunc} />
    )
}

export default ResultsListBody;