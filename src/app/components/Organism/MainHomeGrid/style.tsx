import styled from 'styled-components';

/** Imports from Basics */
import { colors } from '../../../../styles/colors';
import { devices } from '../../../../styles/devices';
import { paragraph, titles } from '../../../../styles/fonts';


const StyleMenuGridHome = styled.div`
    
    &.o-mainhome{
        padding: 2.5vh 5vw;    
        
        .o-row--container{
            flex-direction: column;

            @media ${devices.sm} {
                flex-direction: row;
            }

            .o-card--div{
                flex: 0 0 auto;
                width: 100%;

                @media ${devices.sm} {
                    flex: 0 0 auto;
                    width: 33.3333333333%;
                }
            }
        }
    }

`;

export default StyleMenuGridHome;