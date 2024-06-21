import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	.react-parallax-background-children {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  video {
		  width: 100%;
		  height: 100%;
		}
	}
	.navbar-brand .imginit{
      display: block ;
    }
    .navbar-brand .imgsaly{
      display: none !important;
    }
`;