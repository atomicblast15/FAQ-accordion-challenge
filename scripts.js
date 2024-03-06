var acc = document.getElementsByClassName("question");
console.log({ acc });

function kelev() {
  console.log("i run 1 ", acc.length);
  for (let i = 0; i < acc.length; i++) {
    console.log("i run 2");
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var answers = document.getElementsByClassName("answer");
      if (answers[i].style.display === "block") {
        answers[i].style.display = "none";
      } else {
        answers[i].style.display = "block";
      }
    });
  }
}
kelev();
