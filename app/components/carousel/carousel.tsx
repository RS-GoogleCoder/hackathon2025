﻿import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselProps {
    children: React.ReactNode[];
    interval?: number;
    showControls: boolean;
}

const CustomCarousel: React.FC<CarouselProps> = ({children, interval = 3000, showControls = false}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={interval}
            infinite={true}
            showDots={showControls}
            arrows={showControls}
            pauseOnHover={false}
        >
            {children}
        </Carousel>
    );
};

export default CustomCarousel;