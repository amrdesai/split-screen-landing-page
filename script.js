// Variables
const leftScreen = document.querySelector('.left');
const rightScreen = document.querySelector('.right');
const container = document.querySelector('.container');

// Event Listener: Hover Left
leftScreen.addEventListener('mouseenter', () =>
    container.classList.add('hover-left')
);

// Event Listener: Leave Hover Left
leftScreen.addEventListener('mouseleave', () =>
    container.classList.remove('hover-left')
);

// Event Listener: Hover Right
rightScreen.addEventListener('mouseenter', () =>
    container.classList.add('hover-right')
);

// Event Listener: Leave Hover Right
rightScreen.addEventListener('mouseleave', () =>
    container.classList.remove('hover-right')
);
