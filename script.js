//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const notes = document.getElementById("notes").value;

  if (name && number && email) {
    alert(`Thank you, ${name}! Your details have been saved.`);
    document.getElementById("contactForm").reset(); // Reset the form
  } else {
    alert("Please fill in all required fields.");
  }
});



// swiperjs

var swiper = new Swiper(".image-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop:true,
    autoplay: {
          delay: 2000,
          disableOnInteraction: false,
    },
});