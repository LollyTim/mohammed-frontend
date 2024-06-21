import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
	  --body-font: "Jost", Helvetica, Arial, sans-serif;
	  --title-font: "Jost", Helvetica, Arial, sans-serif;
	}
	body, section {
        background-color: #fff;
        color: #404040;
    }
	h1, h2, h3, h4, h5, h6, .h1, blockquote.q-big, .d_timeline-text .d_title {
	  font-weight: 400;
	}
	#mainpreloader{
	  	.preloader{
	  		background: #fff;
		}
	}
	.mainpreloader {
		border: 3px solid rgba(0,0,0,.1);
	}
	.mainpreloader span {
		border-top: 4px solid #d70d1f;
	}
	#header-wrap nav.navbar .navbar-nav .nav-item a{
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 12px !important;
	}
	#header-wrap nav.navbar .navbar-nav .nav-item a.active, .float-text .de_social-icons span.buton, 
	blockquote.q-big .d-big,
	.de_3d-box i, .color
	{
		color: #d70d1f;
	}
	#hero-area{
		h6{
			font-size: 12px;
			letter-spacing: 5px;
			font-weight: 400;
			text-transform: uppercase;
			color: #000;
		}
		.h1_big {
		  color: #000;
		  position: relative;
		  left: -3px;
		  top: -10px;
		  font-size: 50px;
		  font-weight: 400;
		  line-height: 70px;
		  text-transform: none;
		  margin-bottom: 0;
		}
		.btn-main{
			z-index:999;
		}
	}
    section.bg-bottom::before, .section.bg-bottom::before{
    	background: linear-gradient(0deg, rgba(255, 255, 255,1) 25%, rgba(255, 255, 255,0) 100%);
    	height: 30%;
    }
    .section.bg-bottom::before{
    	background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
    }
    .section.bg-top::after, .section.bg-top::after {
    	background-image: linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0));
    }
    .space-border{
    	background: #d70d1f;
    }
    .CircularProgressbar .CircularProgressbar-path{
    	stroke: #d70d1f !important;
    }
    .de_3d-box .d-inner{
    	display: block;
    	padding: 0px;
    }
    .de_3d-box span.number{
    	position: absolute;
    	top: 0;
		left: 0;
		display: block;
		font-size: 80px;
		width: 80px;
		height: 80px;
		text-align: center;
		padding: 25px;
		border-radius: 60px;
    }
    .de_3d-box .text{
    	margin-left: 100px;
    }
    .de_3d-box h3{
    	font-weight: 400;
    	font-size: 22px;
    	margin-left: 0;
    	margin-bottom: 10px;
    	color: #d70d1f;
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
	    background-color: #d70d1f;
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
		font-weight: 400 !important;
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
    .navbar-brand .imgdesigner{
    	display: block;
    }
    #header-wrap nav.navbar .navbar-nav .nav-item a{
    	color: #222;
    	font-family: var(--body-font);
    	font-size: 15px;
    }
    #header-wrap.sticky nav.navbar{
    	background: rgba(255, 255, 255, 1);
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
    	border-left: solid 1px rgba(0, 0, 0, 0);
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