import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
	  --body-font: "Nunito", Helvetica, Arial, sans-serif;
	  --title-font: "Saira", Helvetica, Arial, sans-serif;
	}
	body, section {
        background-color: #171A1D;
    }
    .v-center{
    	min-height: auto;
    }
    .color, .float-text .de_social-icons span.buton, .de_3d-box i, blockquote.q-big .d-big {
	  color: #50BEC2;
	}
	.space-border{
		background: #50BEC2;
	}
	.btn-main{
		background: #50BEC2;
		border-radius: 8px;
	}
	.btn-main:hover{
		box-shadow: 2px 2px 20px 0px rgba(80, 190, 194, 0.5);
	}
	#mainpreloader{
		.mainpreloader{
			border: 3px solid rgba(80, 190, 194,.1);
		  	.preloader{
		  		background: #171A1D;
			}
			span{
				border-top: 4px solid rgba(80, 190, 194,.7);
			}
		}
	}
    section.bg-bottom::before, .section.bg-bottom::before{
    	background-image: linear-gradient(rgba(23, 26, 29, 0), rgb(23, 26, 29));
    	height: 25%;
    }
    .section.bg-bottom::before{
    	background-image: linear-gradient(rgba(23, 26, 29, 0), rgb(23, 26, 29));
    }
    .section.bg-top::after, .section.bg-top::after {
    	background-image: linear-gradient(rgb(23, 26, 29), rgba(23, 26, 29, 0));
    }
    .list_location li{
    	color: #202020;
    	span{
    		color:#202020;
    	}
    }
    .float-text span{
    	color: rgba(255,255,255,.5);
    }
    .navbar-brand .imginit{
    	display: none !important;
    }
    .navbar-brand .imgdark{
    	display: block;
    }
    #header-wrap nav.navbar .navbar-nav .nav-item a.active{
    	color: #50BEC2 !important;
    }
    #header-wrap nav.navbar .navbar-nav .nav-item a{
    	color: #fff;
    }
    #header-wrap.sticky nav.navbar{
    	background: #171A1D;
    }
    h1, h2, h4, h3, h5, h6{
    	font-weight: 600;
    }
    h1, h2, h4, h3, h5, h6, .h1_big, .h1, .h2, .h3, .h4, .h5, .h6, footer.footer-light h5, .burgermenu, blockquote.q-big, 
    .d_timeline-title, .d_timeline-text .d_title, .d-skills-bar .d-bar .d-info{
    	color: #fff;
    }
    h6.color {
	  font-size: 12px;
	  letter-spacing: 5px;
	  font-weight: 400;
	  text-transform: uppercase;
	  color: #fff;
	}
    .h1_big{
    	font-size: 50px;
    	text-transform: unset;
    }
    .mouse {
    	border: 2px solid rgba(255, 255, 255, 0.9);
    	.scroll{
	    	background: #fff;
	    }
    }
    .progress-bar{
    	background: #303030 !important;
    }
    .main-bar{
    	padding: 8px;
    }
    .main-bar::before {
		position: absolute;
		content: "";
		height: 0;
		right: 0;
		bottom: -5px;
		width: 0;
		border: 7px solid transparent;
		border-top-color: transparent;
		border-right-width: 7px;
		border-bottom-width: 7px;
		border-bottom-width: 0px;
		border-right-width: 0px;
		border-top-style: #202020;
		border-top-color: #202020;
	}
    .d-quote-by, .de_3d-box {
    	border-left: solid 1px rgba(255, 255, 255, 0.2);
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
	    background-color: #50BEC2;
	    counter-increment: list;
	    content: counter(list)
	  }
	}
	.d_timeline-text .d_company{
		color: #50BEC2;	
	}
    .d_timeline-title{
    	color: #fff;
    	background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
    }
    .d_timeline-item {
	  list-style: none;
	  border-left: 1px solid rgba(255, 255, 255, .2);
	  &:last-child{
	    border-left: 1px solid rgba(255, 255, 255, 0);
	  }
	}
	.de_count.text-center{
		.small{
			font-size: 12px;
			text-transform: uppercase;
			color: rgba(255,255,255,.5);
		}
	}
	.post-image{
		border-radius: 8px;
		img{filter: grayscale(0%);}
	}
	.slick-dots{
		position: relative;
		bottom: 0;
		margin-top: 10px;
	}
	.slick-dots li button::before{
		color: rgba(255, 255, 255, 0.3) !important;
	}
	.slick-dots li.slick-active button::before{
		color: #50BEC2 !important;
	}
	#scroll-to-top div{
		background: none;
		border: solid 1px rgba(255, 255, 255, 0.2);
		&:hover{
			background: none;
		}
		i{
			color: #fff;
		}
	}
	.de_modal .card-image-1{
		border-radius: 8px;
	}
	.de_modal .card-image-1 img{
		filter: grayscale(0%);
	}
	.LightboxGal{
		background: #171A1D;
	}
	#blog-comment ol li .comment-info .c_reply{
		border-left-color: rgba(255, 255, 255, 0.2);
	}
	#blog-comment ol li{
		border-bottom-color: rgba(255, 255, 255, 0.1);
	}
	.form-border input[type="text"], .form-border input[type="text"]:focus{
		color: #202020;
		border: solid 1px rgba(255, 255, 255, 0.2);
	}
	#contact_form textarea, #contact_form textarea:focus{
		color: #202020;
		border: solid 1px rgba(255, 255, 255, 0.2);
	}
	#btnsubmit{
		margin-top: 20px;
	}
	.btn:hover, .btn:focus{
		color: #fff;
		background: rgba(80, 190, 194, 1);
	}
	.LightboxGal .closeGal .button-close{
		border: 1px solid rgba(255, 255, 255, 0.5);
		&:before{
			border-left: 8px solid #fff;
			border-right: 8px solid #fff;
		}
		&:after{
			border-left: 8px solid #fff;
			border-right: 8px solid #fff;
		}
	}
	.de_project-details .d-field{
		border-bottom: solid 1px rgba(255, 255, 255, 0.1);
		i {
		  color: #fff;
		}
	}
	.LightboxGal .mainLightbox blockquote{
		color: #fff;
	}
	.LightboxGal .mainLightbox blockquote span::before{
		background: #606060;
	}
	.de_project-info p{
		color: #aaa;
	}
	.de_project-details{
		color: #fff;
	}
	.de_project-details span a{
		color: #50BEC2;
	}
	#blog-comment ol li .comment-info .c_date, #blog-comment ol li .comment-info .c_reply{
		color: #50BEC2;
	}
	footer{
		border-top: solid 1px rgba(255, 255, 255, .1);
		color: rgba(255, 255, 255, .8) !important;
		background: rgba(0, 0, 0, 0.1);
		a{
			color: rgba(255, 255, 255, .8) !important;
			i{
				color: rgba(255, 255, 255, .8) !important;
			}
		}
	}
	.mobilemenu{
		background: #171A1D;
	}
	@media only screen and (max-width: 992px){
		.v-center{
			margin-top: 120px;
		}
	}
`;