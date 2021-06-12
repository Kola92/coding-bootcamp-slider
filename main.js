const prev = document.querySelector(".prev-icon");
const next = document.querySelector(".next-icon");

const image = document.querySelector(".slide-img");
const testimonial = document.querySelector(".slide-text");

 

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