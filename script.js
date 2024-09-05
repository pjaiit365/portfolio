function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  // Select all "Live Demo" buttons
  const liveDemoBtns = document.querySelectorAll(".live-demo-btn");

  // Add event listener to each Live Demo button
  liveDemoBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default action

      // Check if dialog already exists, prevent multiple overlays
      if (
        document.querySelector(".overlay") ||
        document.querySelector(".dialog-box")
      )
        return;

      // Create the overlay element
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      document.body.appendChild(overlay);

      // Create the dialog box element
      const dialogBox = document.createElement("div");
      dialogBox.classList.add("dialog-box");
      dialogBox.innerHTML = `
              <div class="dialog-content">
                  <p>Are you sure you want to view the live demo?</p>
                  <button id="confirm-btn">Confirm</button>
                  <button id="cancel-btn">Cancel</button>
              </div>
          `;

      // Append the dialog box to the body
      document.body.appendChild(dialogBox);

      // Add blur effect to the background
      document.body.classList.add("blurred");

      // Disable scrolling when the dialog is open
      document.body.style.overflow = "hidden";

      // Handle Confirm button click
      document.getElementById("confirm-btn").onclick = function () {
        window.open("https://github.com/pjaiit365/handyman_app/", "_blank");
        closeDialog();
      };

      // Handle Cancel button click
      document.getElementById("cancel-btn").onclick = function () {
        closeDialog();
      };

      // Close the dialog when clicking on the overlay
      overlay.onclick = function () {
        closeDialog();
      };

      // Function to close the dialog and remove the overlay and blur
      function closeDialog() {
        document.body.removeChild(dialogBox); // Close the dialog box.
        document.body.removeChild(overlay); // Remove the overlay.
        document.body.classList.remove("blurred"); // Remove the blur effect.
        document.body.style.overflow = ""; // Re-enable scrolling after closing the dialog.
      }
    });
  });
});
