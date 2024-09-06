function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// document.addEventListener("DOMContentLoaded", () => {
//   // Select all "Live Demo" buttons
//   const liveDemoBtns = document.querySelectorAll(".live-demo-btn");

//   // Add event listener to each Live Demo button
//   liveDemoBtns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       e.preventDefault(); // Prevent default action

//       // Check if dialog already exists, prevent multiple overlays
//       if (
//         document.querySelector(".overlay") ||
//         document.querySelector(".dialog-box")
//       )
//         return;

//       // Create the overlay element
//       const overlay = document.createElement("div");
//       overlay.classList.add("overlay");
//       document.body.appendChild(overlay);

//       // Create the dialog box element
//       const dialogBox = document.createElement("div");
//       dialogBox.classList.add("dialog-box");
//       dialogBox.innerHTML = `
//               <div class="dialog-content">
//                   <p>Are you sure you want to view the live demo?</p>
//                   <button id="confirm-btn">Confirm</button>
//                   <button id="cancel-btn">Cancel</button>
//               </div>
//           `;

//       // Append the dialog box to the body
//       document.body.appendChild(dialogBox);

//       // Add blur effect to the background
//       document.body.classList.add("blurred");

//       // Disable scrolling when the dialog is open
//       document.body.style.overflow = "hidden";

//       // Handle Confirm button click
//       document.getElementById("confirm-btn").onclick = function () {
//         window.open("https://github.com/pjaiit365/handyman_app/", "_blank");
//         closeDialog();
//       };

//       // Handle Cancel button click
//       document.getElementById("cancel-btn").onclick = function () {
//         closeDialog();
//       };

//       // Close the dialog when clicking on the overlay
//       overlay.onclick = function () {
//         closeDialog();
//       };

//       // Function to close the dialog and remove the overlay and blur
//       function closeDialog() {
//         document.body.removeChild(dialogBox); // Close the dialog box.
//         document.body.removeChild(overlay); // Remove the overlay.
//         document.body.classList.remove("blurred"); // Remove the blur effect.
//         document.body.style.overflow = ""; // Re-enable scrolling after closing the dialog.
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Select all "Live Demo" buttons
  const liveDemoBtns = document.querySelectorAll(".live-demo-homecare-btn");

  // Add event listener to each Live Demo button
  liveDemoBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default action

      // Use SweetAlert to show the confirmation dialog
      swal({
        title: "HomeCareX",
        text: "Whicd demonstration do you want to see?",
        // icon: "warning",
        buttons: {
          option1: {
            text: "   Figma UI Design   ",
            className: "swal-button swal-button--confirm swal-button-compl",
            value: "github",
            closeModal: true,
          },
          option2: {
            text: "Flutter App UI Demo",
            className: "swal-button swal-button--confirm swal-button-prim",
            value: "liveDemo",
            closeModal: true,
          },
          cancel: {
            text: "Cancel",
            visible: false,
            className: "swal-button swal-button--cancel",
            closeModal: true,
          },
        },

        className: "swal-centered-buttons", // Add this class to center buttons
        buttonsStyling: false, // Disable default button styling to apply custom styles
        closeOnClickOutside: true, // Clicking overlay will close the alert
      }).then((value) => {
        switch (value) {
          case "figma":
            // Redirect to GitHub page
            window.location.href = "https://github.com/pjaiit365/handyman_app/";
            break;
          case "flutter":
            // Redirect to Live Demo page
            window.location.href = "https://youtube.com"; // Replace with actual live demo URL
            break;
          default:
            // If overlay or cancel is clicked, the alert is closed automatically
            swal.close();
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all "Live Demo" buttons
  const liveDemoBtns = document.querySelectorAll(".live-demo-knust-btn");

  // Add event listener to each Live Demo button
  liveDemoBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default action

      // Use SweetAlert to show the confirmation dialog
      swal({
        title: "KNUST Scan",
        text: "Whicd demonstration do you want to see?",
        // icon: "warning",
        buttons: {
          option1: {
            text: "   Figma UI Design   ",
            className: "swal-button swal-button--confirm swal-button-compl",
            value: "github",
            closeModal: true,
          },
          option2: {
            text: "Flutter App UI Demo",
            className: "swal-button swal-button--confirm swal-button-prim",
            value: "liveDemo",
            closeModal: true,
          },
          cancel: {
            text: "Cancel",
            visible: false,
            className: "swal-button swal-button--cancel",
            closeModal: true,
          },
        },

        className: "swal-centered-buttons", // Add this class to center buttons
        buttonsStyling: false, // Disable default button styling to apply custom styles
        closeOnClickOutside: true, // Clicking overlay will close the alert
      }).then((value) => {
        switch (value) {
          case "figma":
            // Redirect to GitHub page
            window.location.href = "https://github.com/pjaiit365/handyman_app/";
            break;
          case "flutter":
            // Redirect to Live Demo page
            window.location.href = "https://youtube.com"; // Replace with actual live demo URL
            break;
          default:
            // If overlay or cancel is clicked, the alert is closed automatically
            swal.close();
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all "Live Demo" buttons
  const liveDemoBtns = document.querySelectorAll(".live-demo-gtog-btn");

  // Add event listener to each Live Demo button
  liveDemoBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default action

      // Use SweetAlert to show the confirmation dialog
      swal({
        title: "G-to-G: Graduands to Graduates",
        text: "Whicd demonstration do you want to see?",
        // icon: "warning",
        buttons: {
          option1: {
            text: "   Figma UI Design   ",
            className: "swal-button swal-button--confirm swal-button-compl",
            value: "github",
            closeModal: true,
          },
          option2: {
            text: "Flutter App UI Demo",
            className: "swal-button swal-button--confirm swal-button-prim",
            value: "liveDemo",
            closeModal: true,
          },
          cancel: {
            text: "Cancel",
            visible: false,
            className: "swal-button swal-button--cancel",
            closeModal: true,
          },
        },

        className: "swal-centered-buttons", // Add this class to center buttons
        buttonsStyling: false, // Disable default button styling to apply custom styles
        closeOnClickOutside: true, // Clicking overlay will close the alert
      }).then((value) => {
        switch (value) {
          case "figma":
            // Redirect to GitHub page
            window.location.href = "https://github.com/pjaiit365/handyman_app/";
            break;
          case "flutter":
            // Redirect to Live Demo page
            window.location.href = "https://youtube.com"; // Replace with actual live demo URL
            break;
          default:
            // If overlay or cancel is clicked, the alert is closed automatically
            swal.close();
        }
      });
    });
  });
});
