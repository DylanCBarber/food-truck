var truckAnimation = anime({
    targets: '.taco-truck',
    translateX: [-1000, 0],
    duration: 3000
});

var titleAnimation = anime({
    targets: '.title-greeting',
    translateY: [-300, 0],
    easing: 'easeOutCirc',
    duration: 1500,
    delay: 1700,
    opacity: [0, 1]
});


