import React from "react";
import {Link} from "@material-ui/core/";

import DetailsRow from "./detailsRow";


const Contact = ({contact, title="Contact"}) => {
    return (
        <DetailsRow title={title}>
            {contact.name}
            {contact.role && (<>, {contact.role}</>) }
            {contact.email && (<> - <Link href={"mailto:"+contact.email} color="inherit" >{contact.email}</Link></>) }
            {contact.phone && (<> - <Link href={"tel:"+contact.phone} color="inherit" >{contact.phone}</Link></>) }
        </DetailsRow>
    );
}

export default Contact;