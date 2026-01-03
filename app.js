let cvBtn = document.getElementById("cvBtn");


let internshipBtn1 = document.getElementById("internshipBtn1");
let internshipBtn2 = document.getElementById("internshipBtn2");
let internshipBtn3 = document.getElementById("internshipBtn3");






cvBtn.addEventListener("click", function () {
   alert("View Resume")
   window.open('https://drive.google.com/file/d/19d5XYts3Fe_hSFd2RCqb0KMla6Csnkca/view?usp=sharing', '_blank');
})


internshipBtn1.addEventListener("click", function () {
   alert("View Certificate ")
   window.open('https://drive.google.com/file/d/1oIJaHcXdBS1VjHQdn9_R1eHsvqUx1A2d/view?usp=sharing', '_blank');
})


internshipBtn2.addEventListener("click", function () {
   alert("View Certificate")
   window.open('https://drive.google.com/file/d/1tKsdok0gJA-dbUBd_rOfGTrxb868iWAu/view?usp=sharing', '_blank');
})



// internshipBtn3.addEventListener("click", function () {

//    alert("Download Succesfully ")
//    window.open(' https://drive.google.com/file/d/1IeASFbex_YBaHMa1dOBywqIFkKIrQqri/view?usp=drive_link ', '_blank');
// })

// internshipBtn4.addEventListener("click", function () {
//    alert("Download Succesfully")
//    window.open('https://drive.google.com/file/d/11kkXhxQGr9CfDubRGpOPfF9clTEpiteF/view?usp=drive_link', '_blank');
// })





const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
   menu.classList.toggle('active');
});


// ================= TYPEWRITER EFFECT =================

const textArray = [
   "Java Full-Stack Developer",

];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typeSpeed = 100;
const deleteSpeed = 60;
const delayBetweenTexts = 1500;

const typewriterElement = document.getElementById("typewriter");

function typeWriter() {
   if (!typewriterElement) return;

   if (!isDeleting) {
      currentText = textArray[index].substring(0, charIndex + 1);
      charIndex++;
   } else {
      currentText = textArray[index].substring(0, charIndex - 1);
      charIndex--;
   }

   typewriterElement.textContent = currentText;

   if (!isDeleting && charIndex === textArray[index].length) {
      setTimeout(() => (isDeleting = true), delayBetweenTexts);
   }
   else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
   }

   setTimeout(typeWriter, isDeleting ? deleteSpeed : typeSpeed);
}

typeWriter();


// ================= 3D SECTION SCROLL ANIMATION =================

const sections3D = document.querySelectorAll(".section-3d");

const sectionObserver = new IntersectionObserver(
   (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("show");
         }
      });
   },
   { threshold: 0.25 }
);

sections3D.forEach((section) => {
   sectionObserver.observe(section);
});

document.querySelectorAll('.flip-card').forEach(card => {
   card.addEventListener('click', () => {
      card.classList.toggle('active');
   });
});