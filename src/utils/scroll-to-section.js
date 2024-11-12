import { scroller } from 'react-scroll';

const scrollToSection = (section) => {
    scroller.scrollTo(section, {
        duration: 800, // Duration of the scroll
        delay: 0,
        smooth: 'easeInOutQuart', // Easing function for smoothness
        offset: -100 // Offset for fixed headers, if necessary
    });
};

export default scrollToSection