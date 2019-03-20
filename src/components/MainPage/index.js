import React, {Component} from 'react';
import './index.less';
import '../../common/common_style.less';
import {Link} from "react-router-dom";


function MainPage() {
    return (
        <div className="bg-opacity">
            <div className="hero-image">
                <div className="title">
                    <h1>Bone of Nation Education</h1>
                    <p>Lorem ipsum consecteadipisicing elit, Im sed do eiusmo magna aliqua. siconsectetur adipisicing
                        elit, seUt enim ad minim.</p>
                </div>
                <Link to="/register">
                    <button type="submit">Apply now</button>
                </Link>
            </div>
            <div className="university-description">
                <h4> our courses </h4>
                <div className="line"/>
                <p className="course-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className='course-examples'>
                <div className='row'>
                    <div className='column'>
                        <div className='first-column'>
                            <p>Aeronautical Engineering</p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='second-column'>
                            <p>Complet Guied of Business</p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='third-column'>
                            <p>Learning Ui&Ux Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default MainPage;
