import React, { useState, useEffect } from 'react';

import slide01 from '../Home/slide01.jpg';
import slide02 from '../Home/slide02.jpg';
import slide03 from '../Home/slide03.jpg';
import slide04 from '../Home/slide04.jpg';

const slides = [
    slide01,
    slide02,
    slide03,
    slide04,
];

const SlideHome = (props) => {
    let [state, setState] = useState(0);
    const getNext = (state) => {
        switch (state) {
            case 0: return 1;
            case 1: return 2;
            case 2: return 3;
            case 3: return 0;
            default:
                return 0;
        }
    };

    useEffect(() => {
        let setSlide = setInterval(() => {
            setState(getNext(state));
        }, 2000);

        return () => {
            clearInterval(setSlide);
        }

    }, [state]);

    console.log(state);
    return <>
        <img src={slides[state]} alt="" />

    </>
}

export default SlideHome;