import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
	  --body-font: "Nunito", Helvetica, Arial, sans-serif;
	  --title-font: "Saira", Helvetica, Arial, sans-serif;
	}
	body, section {
        background-color: #fff;
    }
    .v-center{
    	min-height: auto;
    }
    .color {
	  color: #CB7C6F;
	}
	.space-border{
		background: #CB7C6F;
	}
	.btn-main{
		background: #CB7C6F;
		border-radius: 8px;
	}
	#mainpreloader{
	  	.preloader{
	  		background: #fff;
		}
	}
    section.bg-bottom::before, .section.bg-bottom::before{
    	background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
    	height: 25%;
    }
    .section.bg-bottom::before{
    	background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
    }
    .section.bg-top::after, .section.bg-top::after {
    	background-image: linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0));
    }
    .list_location li{
    	color: #202020;
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
    	display: block;
    }
    #header-wrap nav.navbar .navbar-nav .nav-item a.active{
    	color: #CB7C6F !important;
    }
    #header-wrap nav.navbar .navbar-nav .nav-item a{
    	color: #222;
    }
    #header-wrap.sticky nav.navbar{
    	background: #ffffff;
    }
    h1, h2, h4, h3, h5, h6{
    	font-weight: 600;
    }
    h1, h2, h4, h3, h5, h6, .h1_big, .h1, .h2, .h3, .h4, .h5, .h6, footer.footer-light h5, .burgermenu, blockquote.q-big, 
    .d_timeline-title, .d_timeline-text .d_title, .d-skills-bar .d-bar .d-info{
    	color: #202020;
    }
    h6.color {
	  font-size: 12px;
	  letter-spacing: 5px;
	  font-weight: 400;
	  text-transform: uppercase;
	  color: #202020;
	}
    .h1_big{
    	font-size: 50px;
    	text-transform: unset;
    }
    .mouse {
    	border: 2px solid rgba(0, 0, 0, 0.9);
    	.scroll{
	    	background: #202020;
	    }
    }
    .progress-bar{
    	background: #f0f0f0 !important;
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
	    background-color: #CB7C6F;
	    counter-increment: list;
	    content: counter(list)
	  }
	}
	.d_timeline-text .d_company{
		color: #CB7C6F;	
	}
    .d_timeline-title{
    	color: #202020;
    	background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
    }
    .d_timeline-item {
	  list-style: none;
	  border-left: 1px solid rgba(0, 0, 0, .2);
	  &:last-child{
	    border-left: 1px solid rgba(0, 0, 0, 0);
	  }
	}
	.de_count.text-center{
		.small{
			font-size: 12px;
			text-transform: uppercase;
			color: #202020;
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
		color: rgba(0, 0, 0, 0.3) !important;
	}
	.slick-dots li.slick-active button::befor{
		color: #CB7C6F !important;
	}
	#scroll-to-top div{
		background: none;
		border: solid 1px rgba(0, 0, 0, 0.2);
		&:hover{
			background: none;
		}
		i{
			color: #202020;
		}
	}
	.de_modal .card-image-1{
		border-radius: 8px;
	}
	.de_modal .card-image-1 img{
		filter: grayscale(0%);
	}
	.LightboxGal{
		background: #fff;
	}
	#blog-comment ol li .comment-info .c_reply{
		border-left-color: rgba(0, 0, 0, 0.2);
	}
	#blog-comment ol li{
		border-bottom-color: rgba(0, 0, 0, 0.1);
	}
	.form-border input[type="text"], .form-border input[type="text"]:focus{
		color: #202020;
		border: solid 1px rgba(0, 0, 0, 0.2);
	}
	#contact_form textarea, #contact_form textarea:focus{
		color: #202020;
		border: solid 1px rgba(0, 0, 0, 0.2);
	}
	#btnsubmit{
		margin-top: 20px;
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
	.mobilemenu{
		background: #fff;
	}
	@media only screen and (max-width: 992px){
		.v-center{
			margin-top: 120px;
		}
	}
	.mainreveal{
		background: #fff;
	}
	#de-menu-reveal .lt, #de-menu-reveal .lm, #de-menu-reveal .lb{
		background: #202020;
	}
`;