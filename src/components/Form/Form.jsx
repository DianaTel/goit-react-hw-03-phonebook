import { Component } from "react";
import { FormStyle } from "./Form.styled";
import { InputStyle, LabelStyle, ButtonStyle } from "components/App.styled";
import PropTypes from 'prop-types'

export class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    handleSubmit = e => {
        e.preventDefault();

        const { name, number } = this.state;

      this.props.onSubmit({ name, number });
    this.setState({ name: "", number: "" });
        }

        render() {
            const { name, number } = this.state;

            return (
                <FormStyle onSubmit={this.handleSubmit}>
                    <LabelStyle>
                        Name:
                        <InputStyle
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            onChange={this.handleChange}
                            required
                        />
                    </LabelStyle>
                    <LabelStyle>
                        Number:
                        <InputStyle
                            type="tel"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                            onChange={this.handleChange}
                            required
                        />
                    </LabelStyle>

                    <ButtonStyle type="submit">Add Contact</ButtonStyle>
                </FormStyle>
            );
        }
    }
