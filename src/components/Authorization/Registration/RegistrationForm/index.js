import React from 'react';

import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  RadioButton, RoutedButton,
} from "grommet";
import {grommet} from "grommet/themes";

const RadioButtonGroup = ({name, onChange, options, value}) => (
  <Box gap="small">
    {options.map(option => (
      <Box key={option}>
        <RadioButton
          name={name}
          value={option}
          label={option}
          checked={value === option}
          onChange={() => onChange({value: option})}
        />
      </Box>
    ))}
  </Box>
);

const RegistrationForm = () => (
  <Grommet full theme={grommet}>
    <Box fill align="center" justify="center" background="light-3">
      <Box background="white" width="medium" style={{padding: 20, borderRadius: 10}}>
        <Form onSubmit={({value}) => console.log("Submit", value)}>
          <FormField
            label="First name"
            name="first_name"
            required
            validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            label="Last name"
            name="last_name"
            required
            validate={{regexp: /^[a-z]/i}}
          />
          <FormField label="Email" name="email" type="email" required/>
          <FormField
            label="Password"
            name="password1"
            required
            validate={{regexp: /^[a-z]/i}}
          />
          <FormField
            label="Repeat password"
            name="password2"
            required
            validate={{regexp: /^[a-z]/i}}
          />
        </Form>
        <Button type="submit" label="Register" primary/>
      </Box>
      <Box width="medium" direction="row" justify="around" margin={{top: "medium"}}>
        <RoutedButton label="Cancel" path="/" primary/>
        <RoutedButton label="Login" path="/login" primary/>
      </Box>
    </Box>
  </Grommet>
);

export default RegistrationForm;