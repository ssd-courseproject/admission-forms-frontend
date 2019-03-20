import React, {Component} from 'react';
import './index.less';
import {Link} from "react-router-dom";
import '../../common/common_style.less';
import {Box, Grid, Grommet} from 'grommet';

import {
    Button,
    CheckBox,
    Form,
    FormField,
    RadioButton,
    RangeInput,
    Select,
    TextArea
} from "grommet";
import {grommet} from "grommet/themes";

function Profile() {

    return (
        <Grommet full={true}>
            <Box full={true}>
                <Grid
                    className="grid"
                    rows={['0%', '80%']}
                    columns={['30%', '69%']}
                    gap="small"
                    areas={[
                        {name: 'header', start: [0, 0], end: [1, 0]},
                        {name: 'nav', start: [0, 1], end: [0, 1]},
                        {name: 'main', start: [1, 1], end: [1, 1]},
                    ]}
                >
                    <Box gridArea="header" background="brand"/>
                    <Box gridArea="nav" background="light-5"/>
                    <Box gridArea="main" background="light-2"/>
                </Grid>
            </Box>
        </Grommet>
    );
}

export default Profile;