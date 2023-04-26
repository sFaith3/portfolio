document.addEventListener("DOMContentLoaded", () => {
    InitHideElements();
});

function InitHideElements() {
    const experienceRowElements = document.getElementsByClassName("experience-row");
    const educationRowElements = document.getElementsByClassName("education-row");

    function ExperienceRow(event) {
        AreVisibleInScreen(ExperienceRow, experienceRowElements, "hide-left");
    }
    function EducationRow(event) {
        AreVisibleInScreen(EducationRow, educationRowElements, "hide-left");
    }

    window.addEventListener("scroll", ExperienceRow);
    window.addEventListener("scroll", EducationRow);
}

function AreVisibleInScreen(functionListened, elements, classToRemove) {
    let arePendingClassesToRemove = false;
    const OffsetY = 950; // To get 'value' earlier

    Array.prototype.forEach.call(elements, element => {
        if (!element.classList.contains(classToRemove)) { return; }

        arePendingClassesToRemove = true;

        const hideAnimRect = element.getBoundingClientRect();
        if (window.scrollY >= (hideAnimRect.top - OffsetY) + window.scrollY) {
            element.classList.remove(classToRemove);
        }
    });

    if (!arePendingClassesToRemove) {
        window.removeEventListener("scroll", functionListened);
    }
};