import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
	  --body-font: "Roboto", Helvetica, Arial, sans-serif;
	  --title-font: "Roboto", Helvetica, Arial, sans-serif;
	}
	body, section {
        background-color: rgb(23, 26, 29);
        color: #999187;
    }
    h1, h2, h3, h4, h5, h6, .h1 {
	  font-weight: 600;
	}
	h3.s_border{
		color: #fff;
	}
	#mainpreloader{
	  	.preloader{
	  		background: rgb(23, 26, 29);
		}
	}
	.mainpreloader {
		border: 3px solid rgba(173, 142, 109,.1);
	}
	.mainpreloader span {
		border-top: 4px solid rgba(173, 142, 109,.7);
	}
	#header-wrap nav.navbar .navbar-nav .nav-item a.active, .float-text .de_social-icons span.buton, 
	blockquote.q-big .d-big,
	.de_3d-box i
	{
		color: #ad8e6d;
	}
	#hero-area{
		h6{
			font-size: 12px;
			letter-spacing: 5px;
			font-weight: 400;
			text-transform: uppercase;
			color: #fff;
		}
		.h1_big {
		  color: #fff;
		  position: relative;
		  left: -3px;
		  top: -10px;
		  font-size: 50px;
		  font-weight: 600;
		  line-height: 70px;
		  text-transform: none;
		  margin-bottom: 0;
		}
		.btn-main{
			z-index:999;
		}
	}
    section.bg-bottom::before, .section.bg-bottom::before{
    	background: linear-gradient(0deg, rgba(23, 26, 29,1) 25%, rgba(23, 26, 29,0) 100%);
    	height: 30%;
    }
    .section.bg-bottom::before{
    	background-image: linear-gradient(rgba(23, 26, 29, 0), rgb(23, 26, 29));
    }
    .section.bg-top::after, .section.bg-top::after {
    	background-image: linear-gradient(rgb(23, 26, 29), rgba(23, 26, 29, 0));
    }
    .space-border{
    	background: #ad8e6d;
    }
    .de_3d-box .d-inner{
    	display: block;
    	padding: 0;
    }
    .de_3d-box i{
    	position: relative;
    	top: 0;
		left: 0;
    }
    .de_3d-box h3{
    	color: #fff;
    	font-weight: 600;
    	font-size: 22px;
    	margin-left: 0;
    	margin-bottom: 10px;
    }
    .d-inner i{
    	font-size: 40px;
		margin-bottom: 20px;
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
	    background-color: #ad8e6d;
	    counter-increment: list;
	    content: counter(list)
	  }
	}
	.d_timeline-text .d_company{
		color: #ad8e6d;
		font-weight: 300;
	}
	.de_count span{
		font-size: 12px;
		text-transform: uppercase;
		color: rgba(255, 255, 255, .5);
		font-weight: 300;
	}
	.de_count h3 span{
		font-size: 32px;
		color: #fff;
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
    	color: rgba(255, 255, 255, .5);
    }
    .navbar-brand .imginit{
    	display: none !important;
    }
    .navbar-brand .imgsaly{
    	display: none;
    }
    .navbar-brand .imglawyer{
    	display: block;
    }
    #header-wrap nav.navbar .navbar-nav .nav-item a{
    	color: #fff;
    	font-family: var(--body-font);
    	font-size: 13px;
    }
    #header-wrap.sticky nav.navbar{
    	background: #171A1D;
    }
    .mobilemenu{
	    background: #171A1D;
	}
	@media only screen and (max-width: 992px){
		#header-wrap {
			position: relative;
			background: #171A1D;
		}
		#header-wrap nav.navbar{
			padding: 10px 0;
		}
		.burgermenu{
			position: absolute;
		}
	}
	.mobilemenu .navbar-nav .nav-item{
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}
    footer.footer-light h5, .burgermenu, 
    .color{
    	color: #ad8e6d;
    }
    .mouse {
    	border: 2px solid rgba(255, 255, 255, 0.3);
    	.scroll{
	    	background: #fff;
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
    	background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
    }
    .d_timeline-item {
	  list-style: none;
	  border-left: 1px solid rgba(173, 142, 109, .3);
	  &:last-child{
	    border-left: 1px solid rgba(0, 0, 0, 0);
	  }
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
	.LightboxGal{
		background-color: rgb(23, 26, 29);
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
		p{ color: #999187; }
	}
	.form-border input[type="text"], .form-border input[type="text"]:focus{
		color: #fff;
		border: solid 1px rgba(255, 255, 255, 0.3);
	}
	.form-border input[type="text"]::placeholder, #contact_form textarea::placeholder{
		color: rgba(255,255,255,.3);
	}
	#contact_form textarea, #contact_form textarea:focus{
		color: #fff;
		border: solid 1px rgba(255, 255, 255, 0.3);
	}
	#contact h6 {
	  color: #fff;
	}
	#btnsubmit{
		margin-top: 20px;
	}
	.btn-main{
		padding: 4px 35px;
		border-radius: 5px;
		background: #ad8e6d !important;
		&:hover{
		box-shadow: 2px 2px 20px 0px rgba(173, 142, 109, 0.5);
		}
	}
	.btn:hover, .btn:focus{
		color: #fff;
		background: rgba(var(--primary-color-rgb), 1);
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
	.post-image{
		border-radius: 4px;
		.de_modal img {
		  filter: grayscale(0);
		}
	}
	.slick-dots li button::before {
	  color: rgba(255,255,255,0.3) !important;
	}
	.slick-dots li.slick-active button::before{
		color: #ad8e6d !important;
	}
	footer{
		color: rgba(255, 255, 255, .8) !important;
		background: rgba(0, 0, 0, .1);
		border-top: solid 1px rgba(255, 255, 255, .1);
		a{
			color: rgba(255, 255, 255, .8) !important;
			i{
				color: rgba(255, 255, 255, 1) !important;
			}
		}
	}
`;