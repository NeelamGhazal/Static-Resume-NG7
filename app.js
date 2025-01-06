document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    var skillsContent = document.querySelector('.skillsContent');
    if (toggleSkillsBtn && skillsContent) {
        toggleSkillsBtn.addEventListener('click', function () {
            skillsContent.classList.toggle('show');
        });
    }
});
// // Toggle visibility function
// function toggleHeadingVisibility(): void {
//     const headingElement = document.getElementById('toggleHeading');
//     if (headingElement) {
//         // Check if the element is already visible
//         if (headingElement.style.display === "none" || headingElement.style.display === "") {
//             headingElement.style.display = "block"; // Show the heading
//         } else {
//             headingElement.style.display = "none"; // Hide the heading
//         }
//     }
// }
// // Add event listener for the button click
// document.getElementById('toggleButton')?.addEventListener('click', toggleHeadingVisibility);
