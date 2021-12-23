import {Fragment} from 'react';

//Stylesheet
import './Icon.css'

export const Icon = ({ type, size, id, className, fillColor, viewBox }:IconProps) =>{
    return(
        <svg
            id={id || ''}
            className={`icon ${type || ''} ${className || ''}`}
            width={size || '2rem'}
            height={size || '2rem'}
            fill={fillColor || "currentColor"}
            viewBox={viewBox || "0 0 16 16"}
        >
            {(paths as any)[type]}
        </svg>
    )
};

interface IconProps {
    type: string,
    size?: string,
    id?: string,
    className?: string,
    fillColor?: string,
    viewBox?: string
}

// Find more icons at:
// https://icons.getbootstrap.com/
const paths = {
    cart: (
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    ),
    check: (
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    ),
    arrowLeftCircle: (
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
    ),
    arrowRightCircle: (
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    ),
    exit: (
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
    ),
    fullscreen: (
        <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
    ),
    fullscreenExit: (
        <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
    ),
    starEmpty: (
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
    ),
    starFull: (
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    ),
    starHalf: (
        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
    ),
    starOneQuart: (
        <path d="M 5.354,5.119 7.538,0.792 C 7.6235765,0.61440432 7.8028646,0.50108802 8,0.5 c 0.183,0 0.366,0.097 0.465,0.292 l 2.184,4.327 4.898,0.696 C 15.798674,5.854565 15.987909,6.0655218 16,6.32 16.01414,6.4864936 15.95155,6.6503418 15.83,6.765 l -3.523,3.356 0.83,4.73 c 0.078,0.443 -0.36,0.79 -0.746,0.592 L 8,13.187 3.611,15.443 c -0.045909,0.02384 -0.095117,0.04069 -0.146,0.05 -0.342,0.06 -0.668,-0.254 -0.6,-0.642 L 3.695,10.121 0.173,6.765 C 0.06232185,6.6602892 3.8756528e-5,6.5143584 0.001,6.362 0.00105201,6.2554363 0.03046135,6.1509466 0.086,6.06 0.16580361,5.9264548 0.30189741,5.8363386 0.456,5.815 Z M 8,12.027 c 0.08072,-3.34e-4 0.1603208,0.01888 0.232,0.056 l 3.686,1.894 -0.694,-3.957 C 11.19073,9.8352056 11.25144,9.6459574 11.386,9.515 L 14.293,6.745 10.241,6.169 C 10.070688,6.1432807 9.9238245,6.0356558 9.848,5.881 L 8.001,2.223 6.3420455,5.7644123 5.9727031,6.119337 4.9133858,6.379773 l 0.00178,7.154368 z" />
    ),
    starThreeQuart: (
        <path d="M 5.354,5.119 7.538,0.792 C 7.6235765,0.61440432 7.8028646,0.50108802 8,0.5 c 0.183,0 0.366,0.097 0.465,0.292 l 2.184,4.327 4.898,0.696 C 15.798674,5.854565 15.987909,6.0655218 16,6.32 16.01414,6.4864936 15.95155,6.6503418 15.83,6.765 l -3.523,3.356 0.83,4.73 c 0.078,0.443 -0.36,0.79 -0.746,0.592 L 8,13.187 3.611,15.443 c -0.045909,0.02384 -0.095117,0.04069 -0.146,0.05 -0.342,0.06 -0.668,-0.254 -0.6,-0.642 L 3.695,10.121 0.173,6.765 C 0.06232185,6.6602892 3.8756528e-5,6.5143584 0.001,6.362 0.00105201,6.2554363 0.03046135,6.1509466 0.086,6.06 0.16580361,5.9264548 0.30189741,5.8363386 0.456,5.815 Z M 10.677165,13.333 11.918,13.977 11.224,10.02 C 11.19073,9.8352056 11.25144,9.6459574 11.386,9.515 l 2.907,-2.77 -3.6145,-0.404125 z" />
    ),
    triangleDown: (
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
    ),
    zoomIn: (
        <Fragment>
            <path fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
            />
            <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
            <path fillRule="evenodd"
                  d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z" />
        </Fragment>
    ),
    zoomOut: (
        <Fragment>
            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
            <path fillRule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
        </Fragment>
    ),
    plus: (
        <Fragment>
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </Fragment>
    )
};
