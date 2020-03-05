import React from 'react';

type OpenAllButtonProps = {
    containerId: string,
    amountOpen: number
}

const OpenAllButton: React.FC<OpenAllButtonProps> = (props: OpenAllButtonProps) => {
    var containerElement = document.getElementById(props.containerId);
    var accordionElements = containerElement?.getElementsByClassName("govuk-accordion__section");

    var allOpen = (accordionElements?.length === props.amountOpen)

    return (
        <div className="govuk-accordion__controls" key={allOpen.toString()}>
            <button type="button" className="govuk-accordion__open-all" aria-expanded={allOpen ? 'true' : 'false'} onClick={event => onButtonClick(event, props.containerId)}>
                {allOpen ? 'Close' : 'Open'} all
                <span className="govuk-visually-hidden"> sections</span>
            </button>
        </div>
    )
}

const onButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, containerId: string) => {
    var containerElement = document.getElementById(containerId);
    
    var accordionElements = containerElement?.getElementsByClassName("govuk-accordion__section") || new HTMLCollection();
    var expandedAccordionElements = containerElement?.getElementsByClassName("govuk-accordion__section--expanded") || new HTMLCollection();

    var target = event.currentTarget as Element;
    if (target.getAttribute('aria-expanded') === 'false') {
        for (let index = 0; index < (accordionElements?.length || 0); index++) {
            if (accordionElements[index].className.search('expanded') === -1) {
                (accordionElements[index].getElementsByClassName('govuk-accordion__section-header')[0] as HTMLElement).click()
            }
        }
    } else {
        while (expandedAccordionElements.length !== 0) {
            (expandedAccordionElements[0].getElementsByClassName('govuk-accordion__section-header')[0] as HTMLElement).click()
        }
    }
}

export default OpenAllButton;