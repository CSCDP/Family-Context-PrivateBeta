import React, { useState, useEffect } from 'react';
import { Button, Typography, TextField } from "@material-ui/core/";

export default function Form() {
    const [caseID, setCaseID] = useState();
    const [password, setPassword] = useState();

    const onFormSubmit = async event => {
        event.preventDefault();
        // onSubmit(email, password);
    };

    return (
        <form noValidate onSubmit={onFormSubmit} autoComplete="off" >
            <Typography>
                To view a child with a known case, enter case ID below
            </Typography>
            <div>
                <TextField
                    margin="normal"
                    required
                    id="caseID"
                    label="Case ID"
                    name="caseID"
                    value={caseID}
                    autoComplete="caseID"
                    onChange={e => setCaseID(e.target.value)}
                />
            </div>
            <Button type="submit" variant="contained" color="primary">
                View Child Details
            </Button>
        </form>
    );
}