import React from 'react';

/** Import Styled Components */
import Style from './style';

/** Import Components */
import MainHomeGrid from '../../Organism/MainHomeGrid';


export default function RootTemplate() {
    return(
        <Style >
            <MainHomeGrid className="o-mainhome" />
        </Style>
    );
}