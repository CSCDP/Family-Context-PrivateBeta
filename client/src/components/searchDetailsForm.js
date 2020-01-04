import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { Button, Typography, TextField } from "@material-ui/core/";
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy', {minYear: 1910, maxYear: 2020})

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            pipe={autoCorrectedDatePipe}
            keepCharPositions={true}
            showMask
        />
    );
}

export default function Form() {
    const [values, setValues] = useState({});
    const history = useHistory();

    const handleChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const onFormSubmit = async event => {
        event.preventDefault();
        history.push("/search/person")
        // onSubmit(email, password);
    };

    return (
        <form noValidate onSubmit={onFormSubmit} autoComplete="off">
            <Typography>
                Search by name and date of birth
            </Typography>
            <div>
                <TextField
                    margin="normal"
                    required
                    id="firstName"
                    label="First name"
                    name="firstName"
                    value={values["firstName"]}
                    autoComplete="firstName"
                    onChange={handleChange('firstName')}
                />
            </div>
            <div>
                <TextField
                    margin="normal"
                    required
                    id="lastName"
                    label="Last name"
                    name="lastName"
                    value={values["lastName"]}
                    autoComplete="lastName"
                    onChange={handleChange('lastName')}
                />
            </div>
            <div>
                <TextField
                    margin="normal"
                    id="dateOfBirth"
                    label="Date of birth"
                    name="dateOfBirth"
                    value={values["dateOfBirth"]}
                    autoComplete="dateOfBirth"
                    onChange={handleChange('dateOfBirth')}
                    InputProps={{
                        inputComponent: TextMaskCustom,
                    }}
                />
            </div>
            <Button type="submit" variant="contained" color="primary">
                Search
            </Button>
        </form>
    );
}