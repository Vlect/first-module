const showPdf = (pdf) => {
  const currentPdf = document.getElementById(pdf);
  currentPdf.classList.remove('pdf-less');
  currentPdf.innerHTML += `<button onclick="closePdf('${pdf}')" class="close-pdf-button"><img src="course/en/images/Lessons/FirstLesson/close-icon-back.png"/></button>`;
  console.log(currentPdf);

};

const closePdf = (pdf) => {
  const currentPdf = document.getElementById(pdf);
  currentPdf.classList.add('pdf-less');

};
