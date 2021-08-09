import styled from 'styled-components';

/** Imports from Basics */
import { colors } from '../../../../styles/colors';
import { devices } from '../../../../styles/devices';
import { paragraph, titles } from '../../../../styles/fonts';


export const StyleMenuHeader = styled.div`

    &.o-menu--header{
        display: none;

        @media ${devices.lg} {
            display: ${ props => props.ishome ? 'none' : 'block'};
        }

        .logo-site{
            width: 5vw;
            position: absolute;
            left: 5vw;
        }

        .navbar{
            width: 100%;
            padding: 2.5vh 5vw;
            justify-content: flex-end;
        }
    }
  
`;

export const StyleMenuMobile = styled.div`

    &.o-menu__mobile--header{

        display: ${ props => props.ishome ? 'none' : 'block'};

        @media ${devices.lg} {
            display: none;
        }

        .navbar{
            width: 100%;
            padding: 2.5vh 5vw;
        }

        .logo-site{
            width: 10vw;
        }
    }
`;