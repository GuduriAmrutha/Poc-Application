import React, { Component } from 'react';
import HeaderPage from './Header';
import Main from './Main';

class WelcomePage extends Component {
    render() {
        return (
            <div>
                <div className='login-header-postion'>
                    <HeaderPage></HeaderPage>
                </div>
                <div>
                    <Main></Main>
                </div>
            </div>
        );
    }
}
export default WelcomePage;