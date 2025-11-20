// script.js
// Basic JavaScript for your website

document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully!");

    // Example button click handler
    const btn = document.querySelector("#actionBtn");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("Button clicked!");
        });
    }
});
