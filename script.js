"use strict";

const scrl = (id) => {
    const element = document.getElementById(id);
    const yOffset = -150;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
    //el.scrollIntoView();
};
