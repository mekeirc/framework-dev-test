import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from "swiper";
import Heading from "./Heading";
import { BREAKPOINTS, COLORS } from "../constants";
import MediaCardArrow from '../images/media-card-arrow.svg';
import MediaCard1 from '../images/media-card-1.jpg';
import MediaCard2 from '../images/media-card-2.jpg';
import MediaCard3 from '../images/media-card-3.jpg';
import MediaCard4 from '../images/media-card-4.jpg';
import MediaNavigationBack from '../images/media-navigation-back.svg';
import MediaNavigationForward from '../images/media-navigation-forward.svg';
import { InvisibleButton } from "./Buttons";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Paragraph from "./Paragraph";

const Card = styled.div(({ image }) => css`
    background: url(${image}) no-repeat;
    min-height: 587px;
    padding: 20px;

    p { opacity: 0.6 }
`);

const Badge = styled.div(({ color }) => css`
    border-radius: 25px;
    background: ${COLORS[color].hex};
    padding: 9px 16px;
`);

const Base = styled.div`
    background: ${COLORS.navy.hex};
    padding: 20px;

    .swiper-button-disabled {
        opacity: 0.3;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}){
        padding: 0 0 120px 111px;
    }
`;

const MediaCard = ({ tag, date, title, text, link, image, color }) => (
	<Card className="d-flex flex-column align-items-between justify-content-between" image={image}>
		<div className="d-inline-flex">
			<Badge className="d-flex align-items-center justify-content-center" color={color}>
				<Heading
					text={tag}
					size="12px"
					color={`${COLORS.white.hex}`}
					pt="0"
					pb="0"
					uppercase
					className="fw-bold pb-0 mb-0"
				/>
			</Badge>
		</div>
		<div>
			<Heading text={date} size="14px" color={`${COLORS.white.hex}`} pt="0" pb="0" />
			<Heading text={title} size="24px" color={`${COLORS.white.hex}`} pt="0" pb="20px" />
			<Paragraph text={text} size="16px" color={`${COLORS.white.hex}`} pt="0" pb="70px" />
			<a href={link} alt={link} className="text-decoration-none">
				<div className="d-flex align-items-center">
					<Heading
						text="Read More"
						size="14px"
						color={`${COLORS.white.hex}`}
						pt="0"
						pb="20px"
						uppercase
						className="mb-0 pb-0 me-2"
					/>
					<img src={MediaCardArrow} alt="Read More" />
				</div>
			</a>
		</div>
	</Card>
);

const MediaSection = () => (
	<Base>
		<Swiper
			pagination={{
				el: ".custom-pagination2",
				clickable: true,
			}}
            breakpoints={{
                0: {
                  width: 375,
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                992: {
                  width: 992,
                  slidesPerView: 2,
                  centeredSlides: false,
                },
              }}
			modules={[Navigation, Scrollbar]}
			spaceBetween={20}
			slidesPerView={3}
			className="mySwiper2"
			navigation={{
				nextEl: ".swiper-button-next2",
				prevEl: ".swiper-button-prev2",
			}}
		>
			<SwiperSlide>
				<MediaCard
					tag="Events"
					date="22/02/2022"
					title="Convene an International Partnership for development."
					text="Helping nations achieve Net Zero and creating new commercial opportunities"
					link="#ashd"
					image={MediaCard1}
					color="blue"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<MediaCard
					tag="Events"
					date="22/02/2022"
					title="Convene an International Partnership for development."
					text="Helping nations achieve Net Zero and creating new commercial opportunities"
					link="#ashd"
					image={MediaCard2}
					color="green"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<MediaCard
					tag="Events"
					date="22/02/2022"
					title="Convene an International Partnership for development."
					text="Helping nations achieve Net Zero and creating new commercial opportunities"
					link="#ashd"
					image={MediaCard3}
					color="orange"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<MediaCard
					tag="Events"
					date="22/02/2022"
					title="Convene an International Partnership for development."
					text="Helping nations achieve Net Zero and creating new commercial opportunities"
					link="#ashd"
					image={MediaCard4}
					color="orange"
				/>
			</SwiperSlide>
            <SwiperSlide>
				<MediaCard
					tag="Events"
					date="22/02/2022"
					title="Convene an International Partnership for development."
					text="Helping nations achieve Net Zero and creating new commercial opportunities"
					link="#ashd"
					image={MediaCard2}
					color="green"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<MediaCard
					tag="Events"
					date="22/02/2022"
					title="Convene an International Partnership for development."
					text="Helping nations achieve Net Zero and creating new commercial opportunities"
					link="#ashd"
					image={MediaCard3}
					color="orange"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<MediaCard
					tag="Events"
					date="22/02/2022"
					title="Convene an International Partnership for development."
					text="Helping nations achieve Net Zero and creating new commercial opportunities"
					link="#ashd"
					image={MediaCard4}
					color="orange"
				/>
			</SwiperSlide>
		</Swiper>
        <div className="d-flex mt-5">
            <InvisibleButton className="swiper-button-prev2">
                <img src={MediaNavigationBack} alt="Back" />
            </InvisibleButton>
            <InvisibleButton className="swiper-button-next2">
                <img src={MediaNavigationForward} alt="Forwards" />
            </InvisibleButton>
        </div>
	</Base>
);

export default MediaSection;