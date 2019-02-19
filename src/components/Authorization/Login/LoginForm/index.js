import React from 'react';

import {
  Box,
  Button,
  CheckBox,
  Grommet,
  Form,
  FormField,
  RadioButton,
  RangeInput,
  Select,
  TextArea
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

const LoginForm = () => (
  <Grommet full theme={grommet}>
    <Box fill align="center" justify="center">
      <Box width="medium">
        <Form onSubmit={({value}) => console.log("Submit", value)}>
          <FormField label="Email" name="email" type="email" required/>
          <FormField
            label="Password"
            name="password"
            required
            validate={{regexp: /^[a-z]/i}}
          />
          <Box direction="row" justify="between" margin={{top: "medium"}}>
            <Button label="Cancel"/>
            <Button type="submit" label="Update" primary/>
          </Box>
        </Form>
      </Box>
    </Box>
  </Grommet>
);

export default LoginForm;