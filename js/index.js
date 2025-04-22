document.addEventListener("DOMContentLoaded", () => {
  initHideElements();
});

function initHideElements() {
  const experienceRowElements =
    document.getElementsByClassName("experience-row");
  const educationRowElements = document.getElementsByClassName("education-row");

  function revealExperienceRow() {
    revealElementsOnScroll(
      revealExperienceRow,
      experienceRowElements,
      "hide-left"
    );
  }
  function revealEducationRow() {
    revealElementsOnScroll(
      revealEducationRow,
      educationRowElements,
      "hide-left"
    );
  }

  window.addEventListener("scroll", revealExperienceRow);
  window.addEventListener("scroll", revealEducationRow);
}

function revealElementsOnScroll(functionListened, elements, classToRemove) {
  let arePendingClassesToRemove = false;
  const OffsetY = 1000; // To get 'value' earlier

  Array.prototype.forEach.call(elements, (element) => {
    if (!element.classList.contains(classToRemove)) {
      return;
    }

    arePendingClassesToRemove = true;

    const hideAnimRect = element.getBoundingClientRect();
    if (window.scrollY >= hideAnimRect.top - OffsetY + window.scrollY) {
      element.classList.remove(classToRemove);
    }
  });

  if (!arePendingClassesToRemove) {
    window.removeEventListener("scroll", functionListened);
  }
}
