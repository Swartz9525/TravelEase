'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});



document.querySelectorAll('.scroll-to').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('data-target'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Get today's date
let currentDate = new Date();
currentDate.setMonth(currentDate.getMonth() - 3); // Add one month

// Format the date (DD MMM)
let formattedDate = currentDate.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'short'
});

// Select all elements with class "future-date" and update them
document.querySelectorAll('.future-date').forEach(el => {
  el.innerText = formattedDate;
});
