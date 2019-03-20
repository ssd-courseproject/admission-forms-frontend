import React, {Component} from 'react';
import './index.less';
import {Link} from "react-router-dom";
import '../../common/common_style.less';
import {Box, Grid, Grommet} from 'grommet';
import api from '../../common/api';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    }
  }

  componentDidMount() {
    const profileData = this.fetchData();

    this.setState(
      {
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        email: profileData.email,
      });
  }

  fetchData() {
    return api.profile.fetchMock();
  }

  render() {
    return (
      <Grommet full={true}>
        <Box full={true}>
          <Grid
            className="grid"
            rows={['0%', '90%']}
            columns={['30%', '69%']}
            gap="small"
            areas={[
              {name: 'header', start: [0, 0], end: [1, 0]},
              {name: 'nav', start: [0, 1], end: [0, 1]},
              {name: 'main', start: [1, 1], end: [1, 1]},
            ]}
          >
            <Box gridArea="nav" background="light-2">
              <div className="user-pic"/>
              <p className="user-name">{this.state.firstName} {this.state.lastName}</p>
              <p className="user-detail">
                Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </Box>
            <Box gridArea="main" background="light-2">
              <p className="titles">
                About
              </p>
              <p className="data">First Name: {this.state.firstName}</p>
              <p className="data">Last Name: {this.state.lastName}</p>
              <p className="data">Email: {this.state.email}</p>
              <p className="user-description">
                Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p className="titles">Education</p>
              <p className="education">
                Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p className="titles">Experience</p>
              <p className="experience">
                Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </Box>
          </Grid>
        </Box>
      </Grommet>
    );
  }
}

export default Profile;