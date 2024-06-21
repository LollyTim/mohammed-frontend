import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
	  --title-font: "Urbanist", Helvetica, Arial, sans-serif;
	  --body-font: "Roboto Slab", Helvetica, Arial, sans-serif;
	    --arabic-font: "Noto Kufi Arabic", sans-serif;
	}
	body, section {
        background-color: #E9E9E9;
        color: #404040;
		font-family: var(--arabic-font);

    }
    h1, h2, h3, h4, h5, h6, .h1 {
	  font-weight: 800;
		font-family: var(--arabic-font);

	}
	#mainpreloader{
	  	.preloader{
	  		background: #E9E9E9;
		}
	}
	.mainpreloader {
		border: 3px solid rgba(0,0,0,.1);
	}
	.mainpreloader span {
		border-top: 4px solid rgba(0,0,0,.7);
	}
	#header-wrap nav.navbar .navbar-nav .nav-item a.active, .float-text .de_social-icons span.buton, 
	blockquote.q-big .d-big,
	.de_3d-box i
	{
		color: #000;
		/* font-family: var(--arabic-font); */
		
	}
	.fontar {
		font-family: var(--arabic-font);
	}

	.rtl-center {
  direction: rtl;
  justify-content: center;
  
  text-align: center;
}

	.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  background: #f9f9f9;
  cursor: pointer;
}

.pagination button:disabled {
  background: #ddd;
  cursor: not-allowed;
}

	#hero-area{
		h6{
			font-size: 12px;
			letter-spacing: 5px;
			font-weight: 400;
			text-transform: uppercase;
			color: #000;
			font-family: var(--arabic-font) ;
		}
		.h1_big {
		  color: #000;
		  position: relative;
		  left: -3px;
		  top: -10px;
		  font-size: 33px;
		  font-weight: 800;
		  line-height: 70px;
		  text-transform: none;
		font-family: var(--arabic-font);

		  margin-bottom: 0;
		}
		.btn-main{
			z-index:999;
		}
	}
    section.bg-bottom::before, .section.bg-bottom::before{
    	background: linear-gradient(0deg, rgba(233, 233, 233,1) 25%, rgba(233, 233, 233,0) 100%);
    	height: 30%;
    }
    .section.bg-bottom::before{
    	background-image: linear-gradient(rgba(233, 233, 233, 0), rgb(233, 233, 233));
    }
    .section.bg-top::after, .section.bg-top::after {
    	background-image: linear-gradient(rgb(233, 233, 233), rgba(233, 233, 233, 0));
    }
    .space-border{
    	background: #000;
    }
    .CircularProgressbar .CircularProgressbar-path{
    	stroke: rgba(0,0,0,.8) !important;
    }
    .de_3d-box .d-inner{
    	display: block;
    }
    .de_3d-box i{
    	position: relative;
    	top: 0;
		left: 0;
    }
    .de_3d-box h3{
    	font-weight: 800;
    	font-size: 22px;
    	margin-left: 0;
    	margin-bottom: 10px;
    }
    .d_timeline-title {
	  color: #ffffff;
	  font-weight: 400;
	  font-size: 14px;
	  margin: 0;
	  background: linear-gradient(90deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,0) 100%);
	  &:before {
	    color: #fff;
	    position: relative;
	    left: -22px;
	    display: inline-block;
	    width: 40px;
	    height: 40px;
	    line-height: 40px;
	    text-align: center;
	    border-radius: 0;
	    background-color: #000;
	    counter-increment: list;
	    content: counter(list)
	  }
	}
	.d_timeline-text .d_company{
		color: #000;
		font-weight: 300;
	}
	.de_count span{
		font-size: 12px;
		text-transform: uppercase;
		color: #202020;
		font-weight: 300;
	}
	.de_count h3 span{
		font-size: 32px;
		color: #000;
		font-weight: 800 !important;
	}
    .list_location li{
    	color: #202020;
    	border-left-color: rgba(0, 0, 0, 0.25);
    	span{
    		color:#202020;
    	}
    }
    .float-text span{
    	color: #222;
    }
    .navbar-brand .imginit{
    	display: none !important;
    }
    .navbar-brand .imgsaly{
    	display: none;
    }
    .navbar-brand .imggrey{
    	display: block;
    }
    #header-wrap nav.navbar .navbar-nav .nav-item a{
    	color: #222;
    	font-family: var(--body-font);
    	font-size: 15px;
    }
    #header-wrap.sticky nav.navbar{
    	background: rgba(233, 233, 233, .8);
    }
    .mobilemenu{
	    background: rgba(255, 255, 255, 1);
	}
	@media only screen and (max-width: 992px){
		#header-wrap {
			position: relative;
			background: white;
		}
		#header-wrap nav.navbar{
			padding: 10px 0;
		}
		.burgermenu{
			position: absolute;
		}
	}
	.mobilemenu .navbar-nav .nav-item{
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
    h1, h2, h4, h3, h5, h6, .h1_big, .h1, .h2, .h3, .h4, .h5, .h6, footer.footer-light h5, .burgermenu, blockquote.q-big, 
    .d_timeline-title, .d_timeline-text .d_title{
    	color: #202020;
    }
    .mouse {
    	border: 2px solid rgba(0, 0, 0, 0.9);
    	.scroll{
	    	background: #202020;
	    }
    }
    .d-quote-by, .de_3d-box {
    	border-left: solid 1px rgba(0, 0, 0, 0.2);
    }
    .de_modal .card-image-1 h3{
    	color: #fff;
    }
    .CircularProgressbar .CircularProgressbar-text{
    	fill: #202020 !important;
    }
    .CircularProgressbar-trail{
    	stroke: rgba(0, 0, 0, .1) !important;
    }
    .d_timeline-title{
    	background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
    }
    .d_timeline-item {
	  list-style: none;
	  border-left: 1px solid rgba(0, 0, 0, .2);
	  &:last-child{
	    border-left: 1px solid rgba(0, 0, 0, 0);
	  }
	}
	#scroll-to-top div{
		background: none;
		border: solid 1px rgba(0, 0, 0, 0.2);
		border-radius: 0;
		&:hover{
			background: none;
		}
		i{
			color: #202020;
		}
	}
	.LightboxGal{
		background: #fff;
	}
	.slick-dots li{
		z-index:2;
	}
	.slick-dots li button::before{
		color: rgba(0, 0, 0, 0.3) !important;
	}
	.slick-dots li.slick-active button::before{
		color: #000 !important;
	}
	#blog-comment ol li .comment-info .c_reply{
		border-left-color: rgba(0, 0, 0, 0.2);
	}
	#blog-comment ol li{
		border-bottom-color: rgba(0, 0, 0, 0.1);
	}
	.post-text{
		padding-top: 20px;
		p{ color: #404040; }
	}
	.form-border input[type="text"], .form-border input[type="text"]:focus{
		color: #202020;
		border: solid 1px rgba(0, 0, 0, 0.8);
	}
	#contact_form textarea, #contact_form textarea:focus{
		color: #202020;
		border: solid 1px rgba(0, 0, 0, 0.8);
	}
	#btnsubmit{
		margin-top: 20px;
	}
	.btn-main{
		background: #000 !important;
		&:hover{
		box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.5);
		}
	}
	.btn:hover, .btn:focus{
		color: #fff;
		background: rgba(var(--primary-color-rgb), 1);
	}
	.LightboxGal .closeGal .button-close{
		border: 1px solid rgba(0, 0, 0, 0.5);
		&:before{
			border-left: 8px solid #202020;
			border-right: 8px solid #202020;
		}
		&:after{
			border-left: 8px solid #202020;
			border-right: 8px solid #202020;
		}
	}
	.de_project-details .d-field{
		border-bottom: solid 1px rgba(0, 0, 0, 0.1);
		i {
		  color: #202020;
		}
	}
	.LightboxGal .mainLightbox blockquote{
		color: #606060;
	}
	.LightboxGal .mainLightbox blockquote span::before{
		background: #606060;
	}
	.de_project-info p{
		color: #909090;
	}
	.de_project-details{
		color: #202020;
	}
	footer{
		border-top: solid 1px rgba(0, 0, 0, .1);
		color: rgba(0, 0, 0, .8) !important;
		background: rgba(255, 255, 255, 0.1);
		a{
			color: rgba(0, 0, 0, .8) !important;
			i{
				color: rgba(0, 0, 0, .8) !important;
			}
		}
	}
`;
