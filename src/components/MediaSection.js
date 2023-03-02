import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from "swiper";
import Heading from "./Heading";
import { COLORS } from "../constants";
import MediaCard1 from '../images/media-card-1.jpg';
import MediaCardArrow from '../images/media-card-arrow.svg';

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
    padding: 4px 16px;
`);

const MediaCard = ({ tag, date, title, text, link, image, color }) => (
    <Card className="d-flex flex-column align-items-between justify-content-between" image={image}>
        <div className="d-inline-flex">
            <Badge className="d-flex align-items-center justify-content-center" color={color}>{tag}</Badge>
        </div>
        <div>
            <Heading
                text={date}
                size="14px"
                color={`${COLORS.white.hex}`}
                pt="0"
                pb="0"
            />
            <Heading
                text={title}
                size="24px"
                color={`${COLORS.white.hex}`}
                pt="0"
                pb="20px"
            />
            <Paragraph
                text={text}
                size="16px"
                color={`${COLORS.white.hex}`}
                pt="0"
                pb="70px"
            />
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
    <Swiper
    pagination={{
        el: '.custom-pagination',
        clickable: true
    }}
    modules={[Pagination, Navigation, Scrollbar]}
    spaceBetween={50}
    slidesPerView={3}
    className="mySwiper"
    navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
            color="orange"
        />
    </SwiperSlide>
</Swiper>
);

export default MediaSection;