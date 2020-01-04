import React, { useState } from "react";
import { Button, Typography, TextField } from "@material-ui/core/";

const EmailForm = ({classes, onSubmit}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onFormSubmit = async event => {
        event.preventDefault();
        onSubmit(email, password);
      };

    return (
        <form noValidate onSubmit={onFormSubmit}>
            <Typography>
                Please enter your details to sign in.
        </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                autoFocus
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
        </Button>
        </form>
    );
}

export default EmailForm;
