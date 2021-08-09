import React from 'react';

/** Import General Styles */
import GlobalStyle from '../../../styles/basics';

/** Import Styled Components */
import Style from './style';

/** Import Template Page */
import CategoriasTemplate from '../../components/Templates/Categorias';

export default function Categorias() {
    return(
        <div className="App" >
            <GlobalStyle />
            <Style >
                <CategoriasTemplate />
            </Style>
        </div>
    );
}