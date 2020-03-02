import React from 'react';
import PersonRelationshipDetails from '../../models/PersonRelationshipDetails';
import {RelatedIndividualsRow, RelatedIndividualsHeader} from "./RelatedIndividualsRow";
import TableBody from "../Table/TableBody";
import Table from "../Table/Table";
import TableHeader from "../Table/TableHeader";

type RelatedIndividualsListProps = {
    related: PersonRelationshipDetails[],
    navigate: (id: number) => void
}

const RelatedIndividualsList: React.FC<RelatedIndividualsListProps> = (props) => {
    return (
        <div className="RelatedIndividualsInfo">
            <Table>
                <TableHeader> 
                    <RelatedIndividualsHeader />
                </TableHeader>
                <TableBody>
                    {props.related.map(person =>  
                        <RelatedIndividualsRow relation={person} key={person.id} onClickFunc={(event) => {event.preventDefault(); props.navigate(person.id)}} />
                    )}
                </TableBody>
            </Table>
        </div>
    );
}

export default RelatedIndividualsList;