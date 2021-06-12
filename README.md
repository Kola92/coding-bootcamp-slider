# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![Mobile View 1](./images/mobile-view1.png)

#### Mobile View 1

![Mobile View 2](./images/mobile-view2.png)

#### Mobile View 2

![Desktop View 1](./images/desktop-view1.png)

#### Desktop View 1

![Desktop View 2](./images/desktop-view2.png)

#### Desktop View 2

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Media Queries
- Mobile-first workflow
- JavaScript

### What I learned

It took some time to  achieve the slider effect with JavaScript but I finally did. I was able to get it done with OOP(Object Oriented Programming) via the help of a YouTube creator called The Fiery Coder. 
I placed the contents, images, author's name, text and jpob title in an array of objects containing the each author's testimonial, then I removed the image, testimoanial text, and author's name and job title from the markup in the HTML.
This will make it easier to be able to retrieve the testimonial content dynamically from the array of content, this was achieved by adding a click event listener to navigation buttons.

```js
const users = [
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    feedback:
      " I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ",
    image: "./images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    feedback:
      " If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ",
    image: "./images/image-john.jpg",
  },
];

let slide = 0;

const navigation = () => {
  // Check slide number
  if (slide>users.length - 1) {
    slide = 0;
  }
  image.innerHTML = `
    <img src="${users[slide].image}" alt="tanya testimonial image" />
  `;
  testimonial.innerHTML = `
    <p class="testimonial-text">
      ${users[slide].feedback}
    </p>
    <p class="author-text">${users[slide].name} <span>${users[slide].role}</span></p>
  `;
  slide++;
}

navigation();

prev.addEventListener("click", navigation);
next.addEventListener("click", navigation);
```


### Continued development

I want to keep learning how different ways to achieved the slider functionality.

### Useful resources

- [The Fiery Code](https://www.youtube.com/watch?v=7td4nJ083KA) - This solution helped me understand asimpler way to achieved to slider effect using OOP.

## Author

- Website - [Adekola Olawale](https://studiogenix.netlify.app)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@olawale_adekola](https://www.twitter.com/olawale_adekola)