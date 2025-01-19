import React, {useState, useEffect} from 'react';
import './carousel.scss';

interface CarouselProps {
    children: React.ReactNode[];
    interval?: number;
    showControls: boolean;
    reverse: boolean;
}

const Carousel: React.FC<CarouselProps> = ({children, interval = 3000, showControls = false, reverse = false}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
        }, interval);

        return () => clearInterval(timer);
    }, [children.length, interval]);

    const handlePrevious = () => {
        if (!reverse) setCurrentIndex((currentIndex - 1 + children.length) % children.length);
        else setCurrentIndex((currentIndex + 1) % children.length);
    };

    const handleNext = () => {
        if (!reverse) setCurrentIndex((currentIndex + 1) % children.length);
        else setCurrentIndex((currentIndex - 1 + children.length) % children.length);
    };

    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            items.push(children[(currentIndex + i) % children.length]);
        }
        return items;
    };

    return (
        <div className="carousel">
            {getVisibleItems().map((child, index) => (
                <div key={index} className="carousel-item active">
                    {child}
                </div>
            ))}
            {showControls && <div className="carousel-controls">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>}
        </div>
    );
};

export default Carousel;