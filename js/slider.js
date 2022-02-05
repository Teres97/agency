$(document).ready(function(){
    let position = 0;
    let count = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.slider__container');
    const track = $('.slider__track');
    const item = $('.slider__item');
    const lenghtItem = item.length;
    const buttonPrev = $('.button__prev');
    const buttonNext = $('.button__next');
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;
    item.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,
        });
    });
    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        }); 
    };
    function nextSlide(){
        position -= movePosition;
        count += 1;
        if(count >= lenghtItem){
            position = 0; 
            count = 0;
        }
        setPosition();
    };
    setInterval(nextSlide,5000);
});
