import React from 'react';
import styled from 'styled-components';
import NorthernLights from '../images/northern-lights.jpg';
import NorthernLightsLarge from '../images/northern-lights-large.jpg';
import { COLORS } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from "swiper";
import PaginationActive from '../images/swiper-pagination-active.svg';
import PaginationInactive from '../images/swiper-pagination-inactive.svg';
import { BREAKPOINTS } from '../constants';
import { PrimaryButton } from './Buttons';
import NavigationBack from '../images/swiper-navigation-back.svg';
import NavigationForward from '../images/swiper-navigation-forward.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperArea = styled.div`
    padding-bottom: 137px;
    background: url(${NorthernLights}) no-repeat;
    background-size: cover;
    
    @media screen and (min-width: ${BREAKPOINTS.lg}){
        background: url(${NorthernLightsLarge}) no-repeat;
        background-size: cover;
    }

    // Swiper Styling

    .custom-pagination {
        width: 150px;
    }

    .swiper-button-disabled {
        opacity: 0.3;
    }

	.swiper-pagination {
        display: flex;
        justify-content: center;
        align-items: center;
	}
    
	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.swiper-pagination-bullet {
		width: 13px;
		height: 12px;
		opacity: 1;
		background: url(${PaginationInactive}) center center;
        margin-right: 5px;
	}

	.swiper-pagination-bullet-active {
        width: 19px;
		height: 18px;
		color: #fff;
		background: url(${PaginationActive}) center center;
	}
`;

const Base = styled.section`
    padding: 120px 25px 0 25px;
    text-align: left;
    background-size: cover;

    @media screen and (min-width: ${BREAKPOINTS.lg}){
        padding: 218px 200px 0 200px;
    }
`;

const Heading = styled.h4`
    color: ${COLORS.orange.hex};
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
`;

const Paragraph = styled.p`
    color: ${COLORS.white.hex};
    font-family: 'Sora', sans-serif;
    font-size: 30px;
    margin-bottom: 20px;

    &.sub {
        opacity: 80%;
        font-size: 16px;
        margin-bottom: 40px;

        @media screen and (min-width: ${BREAKPOINTS.lg}){
            margin-bottom: 60px;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}){
        font-size: 40px;
        margin-bottom: 108px;
    }
`;

const SlideContent = ({ title, desktopTitle, text, subText, buttonText }) => (
    <Base className="d-flex flex-column">
        <Heading className="text-center d-lg-none">{title}</Heading>
        <Heading className="text-center d-none d-lg-block">{desktopTitle}</Heading>
        <div className="d-flex flex-column align-items-center pb-5">
            <Paragraph className="text-center">{text}</Paragraph>
            <Paragraph className="sub text-center">{subText}</Paragraph>
            <PrimaryButton className="position-relative" onClick={() => alert(`${buttonText} clicked`)}>
                {buttonText}
            </PrimaryButton>
        </div>
    </Base>
);

const InvisibleButton = styled.button`
    background: none;
    border: 0;
`;

const SliderSection = () => {
	return (
		<SwiperArea className="position-relative">
			<Swiper
                pagination={{
                    el: '.custom-pagination',
                    clickable: true
                }}
				modules={[Pagination, Navigation, Scrollbar]}
				spaceBetween={50}
				slidesPerView={1}
				className="mySwiper"
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
			>
				<SwiperSlide>
                    <SlideContent
                        title="Our Objectives"
                        desktopTitle="The Benefits of space solar"
                        text="Convene an international partnership for development of space based energy."
                        subText="The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources."
                        buttonText="Business Plan"
                    />
				</SwiperSlide>
				<SwiperSlide>
                    <SlideContent
                        title="Our Objectives"
                        desktopTitle="The Benefits of space solar"
                        text="Convene an international partnership for development of space based energy."
                        subText="The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources."
                        buttonText="Business Plan"
                    />
                </SwiperSlide>
				<SwiperSlide>
                    <SlideContent
                        title="Our Objectives"
                        desktopTitle="The Benefits of space solar"
                        text="Convene an international partnership for development of space based energy."
                        subText="The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources."
                        buttonText="Business Plan"
                    />
                </SwiperSlide>
				<SwiperSlide>
                    <SlideContent
                        title="Our Objectives"
                        desktopTitle="The Benefits of space solar"
                        text="Convene an international partnership for development of space based energy."
                        subText="The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources."
                        buttonText="Business Plan"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent
                        title="Our Objectives"
                        desktopTitle="The Benefits of space solar"
                        text="Convene an international partnership for development of space based energy."
                        subText="The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources."
                        buttonText="Business Plan"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent
                        title="Our Objectives"
                        desktopTitle="The Benefits of space solar"
                        text="Convene an international partnership for development of space based energy."
                        subText="The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources."
                        buttonText="Business Plan"
                    />
                </SwiperSlide>
			</Swiper>
            <div className="d-flex align-items-center justify-content-center">
                <InvisibleButton className="swiper-button-prev">
                    <img src={NavigationBack} alt="Back" />
                </InvisibleButton>
                <div className="custom-pagination d-flex align-items-center justify-content-center"></div>
                <InvisibleButton className="swiper-button-next">
                    <img src={NavigationForward} alt="Forwards" />
                </InvisibleButton>
            </div>
		</SwiperArea>
	);
};

export default SliderSection;