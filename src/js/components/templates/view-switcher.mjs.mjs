const today = new Date().getDate()

export function monthlyViewButton() {
    return `
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 612 612" xml:space="preserve">

        <style type="text/css">
            .st4{font-family:'Helvetica-Bold';}
        </style>
        <g>
            <g>
                <path d="M169.491,105.188c13.339,0,24.15-12.842,24.15-28.688V40.798V28.688C193.641,12.842,182.83,0,169.491,0h-17.442
                    c-13.339,0-24.15,12.842-24.15,28.688v12.111V76.5c0,15.845,10.811,28.688,24.15,28.688H169.491z"/>
                <path d="M450.389,105.188c13.34,0,24.15-12.842,24.15-28.688V40.798V28.688C474.539,12.842,463.729,0,450.389,0h-17.441
                    c-13.34,0-24.15,12.842-24.15,28.688v12.111V76.5c0,15.845,10.811,28.688,24.15,28.688H450.389z"/>
                
                <path d="M222.328,52.594V76.5c0,31.638-23.701,57.375-52.837,57.375h-17.442c-29.137,0-52.837-25.737-52.837-57.375V52.594H84.15
                    c-40.836,0-73.952,33.11-73.952,73.952v411.507C10.198,578.89,43.313,612,84.15,612h443.7c40.837,0,73.952-33.11,73.952-73.951
                    V126.545c0-40.841-33.11-73.952-73.952-73.952h-24.623V76.5c0,31.638-23.7,57.375-52.838,57.375h-17.441
                    c-29.138,0-52.838-25.737-52.838-57.375V52.594H222.328z M567.057,196.031v335.644c0,20.579-16.716,37.294-37.294,37.294H82.237
                    c-20.559,0-37.293-16.715-37.293-37.294V196.031H567.057z"/>
            </g>
            <g id="inner-date-svg">
            <text transform="matrix(11 0 0 16 110 420)" class="st4">${today}</text>
                    <path d="M320,240h80v80h-80z"/>
                    <path d="M420,240h80v80h-80z"/>
                    
                    <path d="M320,340h80v80h-80z"/>
                    <path d="M420,340h80v80h-80z"/>

            <path d="M120,440h80v80h-80z"/>
            <path d="M220,440h80v80h-80z"/>
                    <path d="M320,440h80v80h-80z"/>
                    <path d="M420,440h80v80h-80z"/>
            </g>
        </g>
        </svg>
    `
}

export function dailyViewButton() {
    return `
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 612 612" xml:space="preserve">
        <g>
            <g>
                <path d="M169.491,105.188c13.339,0,24.15-12.842,24.15-28.688V40.798V28.688C193.641,12.842,182.83,0,169.491,0h-17.442
                    c-13.339,0-24.15,12.842-24.15,28.688v12.111V76.5c0,15.845,10.811,28.688,24.15,28.688H169.491z"/>
                <path d="M450.389,105.188c13.34,0,24.15-12.842,24.15-28.688V40.798V28.688C474.539,12.842,463.729,0,450.389,0h-17.441
                    c-13.34,0-24.15,12.842-24.15,28.688v12.111V76.5c0,15.845,10.811,28.688,24.15,28.688H450.389z"/>
                <path d="M222.328,52.594V76.5c0,31.638-23.701,57.375-52.837,57.375h-17.442c-29.137,0-52.837-25.737-52.837-57.375V52.594H84.15
                    c-40.836,0-73.952,33.11-73.952,73.952v411.507C10.198,578.89,43.313,612,84.15,612h443.7c40.837,0,73.952-33.11,73.952-73.951
                    V126.545c0-40.841-33.11-73.952-73.952-73.952h-24.623V76.5c0,31.638-23.7,57.375-52.838,57.375h-17.441
                    c-29.138,0-52.838-25.737-52.838-57.375V52.594H222.328z M567.057,196.031v335.644c0,20.579-16.716,37.294-37.294,37.294H82.237
                    c-20.559,0-37.293-16.715-37.293-37.294V196.031H567.057z"/>
                <path d="M133.875,323.6h344.25c10.571,0,19.125-13.56,19.125-30.313s-8.554-30.318-19.125-30.318h-344.25
                    c-10.571,0-19.125,13.56-19.125,30.313S123.304,323.6,133.875,323.6z"/>
                <path d="M133.875,419.301h344.25c10.571,0,19.125-13.56,19.125-30.312c0-16.754-8.554-30.313-19.125-30.313h-344.25
                    c-10.571,0-19.125,13.56-19.125,30.313C114.75,405.741,123.304,419.301,133.875,419.301z"/>
                <path d="M133.875,514.85h207.984c10.571,0,19.125-13.56,19.125-30.312c0-16.754-8.554-30.318-19.125-30.318H133.875
                    c-10.571,0-19.125,13.56-19.125,30.313C114.75,501.285,123.304,514.85,133.875,514.85z"/>
            </g>
        </g>
        </svg>
    `
}

export function weeklyViewButton() {
    return `
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 610.398 610.398"
            xml:space="preserve">
        <g>
            <g>
                <path d="M169.491,105.188c13.339,0,24.15-12.842,24.15-28.688V40.798V28.688C193.641,12.842,182.83,0,169.491,0h-17.442
                    c-13.339,0-24.15,12.842-24.15,28.688v12.111V76.5c0,15.845,10.811,28.688,24.15,28.688H169.491z"/>
                <path d="M450.389,105.188c13.34,0,24.15-12.842,24.15-28.688V40.798V28.688C474.539,12.842,463.729,0,450.389,0h-17.441
                    c-13.34,0-24.15,12.842-24.15,28.688v12.111V76.5c0,15.845,10.811,28.688,24.15,28.688H450.389z"/>
                <path d="M222.328,52.594V76.5c0,31.638-23.701,57.375-52.837,57.375h-17.442c-29.137,0-52.837-25.737-52.837-57.375V52.594H84.15
                    c-40.836,0-73.952,33.11-73.952,73.952v411.507C10.198,578.89,43.313,612,84.15,612h443.7c40.837,0,73.952-33.11,73.952-73.951
                    V126.545c0-40.841-33.11-73.952-73.952-73.952h-24.623V76.5c0,31.638-23.7,57.375-52.838,57.375h-17.441
                    c-29.138,0-52.838-25.737-52.838-57.375V52.594H222.328z M567.057,196.031v335.644c0,20.579-16.716,37.294-37.294,37.294H82.237
                    c-20.559,0-37.293-16.715-37.293-37.294V196.031H567.057z"/>
                
                <path d="M353,300h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759h-117.428c-10.193,0-18.437,10.179-18.437,22.759c0,12.58,8.243,22.759,18.437,22.759z"/>
                <path d="M353,400h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759h-117.428c-10.193,0-18.437,10.179-18.437,22.759c0,12.58,8.243,22.759,18.437,22.759z"/>
                <path d="M353,500h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759h-117.428c-10.193,0-18.437,10.179-18.437,22.759c0,12.58,8.243,22.759,18.437,22.759z"/>

                <path d="M145,300h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759h-117.428c-10.193,0-18.437,10.179-18.437,22.759c0,12.58,8.243,22.759,18.437,22.759z"/>
                <path d="M145,400h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759h-117.428c-10.193,0-18.437,10.179-18.437,22.759c0,12.58,8.243,22.759,18.437,22.759z"/>
                <path d="M145,500h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759h-117.428c-10.193,0-18.437,10.179-18.437,22.759c0,12.58,8.243,22.759,18.437,22.759z"/>
                
            </g>
        </g>
        </svg>
    `
}