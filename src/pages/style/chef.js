import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	.mainpreloader {
	  position: relative;
	  animation: rotate 1s infinite linear;
	  border: 3px solid rgba(255,255,255,.1);
	 }
	.mainpreloader span {
	  border-top: 4px solid rgba(255,215,0,.7);
	 }
	#hero-area{
		.container{
			z-index: 2;
		}
	}
	.navbar-brand .imginit{
    	display: none !important;
    }
    .navbar-brand .imgsaly, .navbar-brand .imggrey{
    	display: none;
    }
    .navbar-brand .imgchef{
    	display: block;
    }
	.float-text .de_social-icons span.buton, .color, blockquote.q-big .d-big, .de_count h3, .slick-dots li.slick-active button::before {
		color: #ffd700 !important;
	}
	#header-wrap nav.navbar .navbar-nav .nav-item a.active, .d_timeline-text .d_company, #blog-comment ol li .comment-info .c_date, #blog-comment ol li .comment-info .c_reply{
		color: #ffd700;
	}
	.space-border, .btn-main{
		color: #202020;
		background: #ffd700 !important;
	}
	.CircularProgressbar .CircularProgressbar-path{
    	stroke: #ffd700 !important;
    }
    .de_count {
	  padding: 20px 0 10px 0;
	  background: none;
	  span {
		  font-size: 12px;
		  text-transform: uppercase;
		  color: rgba(255, 255, 255, .5);
		}
	}
	.de_3d-box{
		border-left: none;
		.d-inner{
			display: block;
			text-align: center;
			img{
				margin: 10px auto;
			}
		}
		h3{
			margin-left: 0;
		}
	}
	.de_modal .card-image-1 .d-text{
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		background-size: auto;
		width: 88%;
		height: 88%;
		margin: 4%;
		transform: scale(1);
		border: solid 1px rgba(255, 255, 255, .5);
	}
	.de_modal .card-image-1{
		position: unset
	}
	.de_modal .card-image-1 .initimages{
		position: relative;
		top: 0;
		left: 0;
	}
	.de_modal .card-image-1 .images{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		opacity: 0;
	}
	.de_modal .card-image-1 h3{
		opacity: 1;
	}
	.de_modal .card-image-1:hover h3{
		opacity: 0;
	}
	.de_modal .card-image-1:hover .d-text {
	  background: rgba(30, 30, 30, 0);
	}
	.de_modal .card-image-1 img{
		filter: grayscale(0%);
	}
	#react-modal-image-img{
			width: 600px;
	}
	html:not(.no-js) [data-aos^="fade"][data-aos^="fade"].aos-animate{
		overflow: hidden;
	}
	[data-aos].aos-animate{
		.__react_modal_image__modal_container{
			position: fixed;
		}
	}
	.de_modal .card-image-1:hover{
		box-shadow: 8px 8px 40px 0px rgba(0, 0, 0, 0);
	}
	.d_timeline-title {
	  color: #ffffff;
	  font-weight: 400;
	  font-size: 14px;
	  margin: 0;
	  background: linear-gradient(90deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,0) 100%);
	  &:before {
	    color: #202020;
	    position: relative;
	    left: -22px;
	    display: inline-block;
	    width: 40px;
	    height: 40px;
	    line-height: 40px;
	    text-align: center;
	    background-color: #ffd700;
	    counter-increment: list;
	    content: counter(list)
	  }
	}
	.slick-dots {
		position: relative;
		bottom: 0;
	}
	#btnsubmit{
		margin-top: 20px;
		.btn-main{
			color: #fff !important;
			box-shadow: 2px 2px 20px 0px rgba(var(--primary-color-rgb), 0) !important;
		}
	}
`;