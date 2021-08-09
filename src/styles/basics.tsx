import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { paragraph, titles } from "./fonts";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
	${styledNormalize}
    body {
		overflow-x: hidden;
		background: ${colors.white};
	}

	label {
		font-size: 1rem;
		line-height: 20px;
	}

	p, ul, li, span, a, input, input.ant-input, button span, button.ant-btn span {
		font-family: ${paragraph.fontFamily};
	}

	h1, h2, h3, h4, h5, h6, strong, b {
		font-family: ${titles.fontFamily};
	}

	strong {
		font-weight: bold !important;
	}
`;

export default GlobalStyle;