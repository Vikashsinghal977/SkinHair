let accodions = document.querySelectorAll(".accordion-wrappper .accordion");
accodions.forEach((acco) => {
    acco.onclick = () => {
        acco.classList.add("active");
    };
});