// Toggle Visibility Of Navbar When Button Clicked

const navToggle = document.querySelector(".navbar-toggle");
navToggle.addEventListener("click", function () {
  document.querySelector(".portfolio-navbar").classList.toggle("show");
});


// Tab Interface For Resume

const resumeHeading = document.querySelector(".resume-heading");
const resumeTabs = document.querySelectorAll(".resume-tab");

resumeHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    resumeHeading.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    resumeTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("active");
  }
};

// Navbar Header Sticky While Scroll

function stickyNav() {
  var headerHeight = document.querySelector("#about").offsetHeight / 2;
  var navbar = document.querySelector("header");
  var scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("header-sticky");
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove("header-sticky");
  }
}

window.addEventListener("scroll", stickyNav);


// Selecting all tab buttons and content
var tabs = document.querySelectorAll('.btn');
var contents = document.querySelectorAll('.resume-tab');

// Function to remove active class from tabs and hide all content
function resetActiveContent() {
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
}

// Function to initialize default active tab and content
function initTabs() {
    resetActiveContent();
    // Set the default active tab here, e.g., Education
    document.querySelector('.btn[data-id="education"]').classList.add('active');
    document.querySelector('#education').classList.add('active');
}

// Event listener for tab buttons
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        resetActiveContent();
        var targetId = tab.getAttribute('data-id');
        tab.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});

// Initialize tabs on page load
document.addEventListener('DOMContentLoaded', initTabs);
