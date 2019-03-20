import React from 'react';

import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
} from "grommet";
import {grommet} from "grommet/themes";
import Link from "react-router-dom/es/Link";

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
            <Link to="/"><Button label="Cancel"/></Link>
            <Button type="submit" label="Login" primary/>
          </Box>
        </Form>
      </Box>
    </Box>
  </Grommet>
);

export default LoginForm;