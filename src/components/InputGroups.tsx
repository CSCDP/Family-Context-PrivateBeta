import React from 'react';

export const TextInputGroup: React.FC<{ onChange: (text: string) => void, name: string, id: string, format: string }> = (props) => {
    return (
        <div className="govuk-form-group">
            <label className="govuk-label" htmlFor={props.format}>
                <b>{props.name}</b>
            </label>
            <input
                className={`govuk-input ${props.format}`}
                id={props.id} name={props.name}
                type="text"
                onChange={event => props.onChange(event.target.value)}
            />
        </div>
    );
}

export class DobInputGroup extends React.Component<{ onChange: (year: string, month: string, day: string) => void, format?: string }, any> {

    constructor(props: { onChange: (year: string, month: string, day: string) => void, format?: string }) {
        super(props);
        this.state = { day: "", month: "", year: "" };
    }


    updateDob(day: string, month: string, year: string) {
        this.props.onChange(year, month, day);
    }
    render() {
        return (
            <>
                <label className="govuk-label" htmlFor="one-quarter">
                    <b>Date of birth (optional)</b>
                </label>
                <div className="row">
                    <div className="column" id="Day">
                        <input
                            className={"govuk-input govuk-date-input__input govuk-input--width-2 " + this.props.format}
                            id="Day" name="Day"
                            type="text"
                            pattern="[0-9]*"
                            onChange={event => {
                                this.setState({ ...this.state, day: event.target.value });
                                this.updateDob(event.target.value, this.state.month, this.state.year)
                            }}
                        />
                    </div>
                    <div className="column" id="Month">
                        <input
                            className={"govuk-input govuk-date-input__input govuk-input--width-2 " + this.props.format}
                            id="Month" name="Month"
                            type="text"
                            pattern="[0-9]*"
                            onChange={event => {
                                this.setState({ ...this.state, month: event.target.value });
                                this.updateDob(this.state.day, event.target.value, this.state.year)
                            }}
                        />
                    </div>
                    <div className="column" id="Year">
                        <input
                            className={"govuk-input govuk-date-input__input govuk-input--width-4 " + this.props.format}
                            id="Year" name="Year"
                            type="text"
                            pattern="[0-9]*"
                            onChange={event => {
                                this.setState({ ...this.state, year: event.target.value });
                                this.updateDob(this.state.day, this.state.month, event.target.value)
                            }}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export const PasswordInputGroup: React.FC<{ onChange: (text: string) => void, format?: string }> = (props) => {
    return (
        <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="one-quarter">
                <b>Password</b>
            </label>
            <input
                className={"govuk-input govuk-!-width-one-quarter " + props.format}
                id="password" name="password"
                type="password"
                onChange={event => props.onChange(event.target.value)}
            />
        </div>
    );
}