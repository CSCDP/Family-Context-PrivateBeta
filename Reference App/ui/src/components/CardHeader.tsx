import React from 'react';

const CardHeader: React.FC<{ title: string }> = (props: { title: string }) => {

    return (
        <div className="govuk-heading-m">
            {props.title}
            <strong className="govuk-tag">
                NO RECORDS FOUND
            </strong>
        </div>
    )
}

export default CardHeader;