
const solutionList = () => {
  const list = document.getElementById("solution-container");
  const solutionButton = document.querySelector(".solution");

  if (list.style.display === "none") {
    list.style.display = "block";
    solutionButton.classList.add("open");
  } else {
    list.style.display = "none";
    solutionButton.classList.remove("open");
  }
};


