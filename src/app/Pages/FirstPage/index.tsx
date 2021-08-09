import React from 'react';

/** Import General Styles */
import GlobalStyle from '../../../styles/basics';

/** Import Styled Components */
import Style from './style';

/** Import Template Page */
import RootTemplate from '../../components/Templates/Root';

/** Import Layout */
import Layout from '../../components/Templates/Layout';

export default function FirstScreen() {
    return(
        <div className="App" >
            <GlobalStyle />
            <Style >
                <Layout className="t-home" isHomePage >
                    <RootTemplate/>
                </Layout>
            </Style>
        </div>
    );
}