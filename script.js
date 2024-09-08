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
  const liveDemoBtns = document.querySelectorAll(".live-demo-homecare-btn");

  liveDemoBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      swal({
        title: "HomeCareX",
        text: "Which demonstration do you want to see?",
        buttons: {
          option1: {
            text: "   Figma UI Design   ",
            className: "swal-button swal-button--confirm swal-button-compl",
            value: "figma",
            closeModal: true,
          },
          option2: {
            text: "Flutter App UI Demo",
            className: "swal-button swal-button--confirm swal-button-prim",
            value: "flutter",
            closeModal: true,
          },
          cancel: {
            text: "Cancel",
            visible: false,
            className: "swal-button swal-button--cancel",
            closeModal: true,
          },
        },
        className: "swal-centered-buttons",
        buttonsStyling: false,
        closeOnClickOutside: true,
      }).then((value) => {
        switch (value) {
          case "figma":
            window.open(
              "https://www.figma.com/proto/1yRGUxR68XiDZsGAtNcJft/HomeCareX-UI-Design?node-id=467-314&node-type=CANVAS&t=n6EwabhGmaqkJB3P-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=474%3A368&show-proto-sidebar=1"
            );
            break;
          case "flutter":
            const newTab = window.open();
            newTab.document.open();
            newTab.document.write(`
              <html>
              <head>
                <title>Flutter App UI Demo</title>
                <style>
                  body { font-family: Arial, sans-serif; text-align: center; color: #3983C9; }
                  img { max-width: 90%; max-height: 90vh; }
                  .image-gallery { display: flex; justify-content: center; align-items: center; }
                  .nav-arrow { cursor: pointer; margin: 0 50px; font-size: 30px; user-select: none; }
                  .image-count { margin-top: 10px; font-size: 18px; }
                </style>
              </head>
              <body>
                <h1>Flutter App UI Demo - HomeCareX</h1>
                <div class="image-gallery">
                  <div class="nav-arrow" onclick="prevImage()">&#10094;</div>
                  <img id="galleryImage" src="./assets/homecarex_ui/image1.png" alt="UI Image">
                  <div class="nav-arrow" onclick="nextImage()">&#10095;</div>
                </div>
                <div class="image-count">
                  <span id="currentImage">1</span> / <span id="totalImages">50</span>
                </div>
                <script>
                  const images = [];
                  for (let i = 1; i <= 50; i++) {
                    images.push(\`./assets/homecarex_ui/image (\${i}).png\`);
                  }

                  let currentIndex = 0;

                  function showImage(index) {
                    const imgElement = document.getElementById('galleryImage');
                    imgElement.src = images[index];
                    document.getElementById('currentImage').innerText = index + 1;
                  }

                  function prevImage() {
                    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
                    showImage(currentIndex);
                  }

                  function nextImage() {
                    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
                    showImage(currentIndex);
                  }

                  document.getElementById('totalImages').innerText = images.length;

                  window.onload = () => {
                    showImage(currentIndex);
                  };
                </script>
              </body>
              </html>
            `);
            newTab.document.close(); // Ensure the document is fully closed
            break;
          default:
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
            value: "figma",
            closeModal: true,
          },
          option2: {
            text: "Flutter App UI Demo",
            className: "swal-button swal-button--confirm swal-button-prim",
            value: "flutter",
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
            window.open(
              " https://www.figma.com/proto/Ihv5mHZYA13MhQzmRHyTZe/Online-Certificate-Verifier?node-id=8-2&node-type=CANVAS&t=5ubc4tDb2r54NvrB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A2&show-proto-sidebar=1"
            );
            break;
          case "flutter":
            const newTab = window.open();
            newTab.document.open();
            newTab.document.write(`
              <html>
              <head>
                <title>Flutter App UI Demo - KNUST Scan</title>
                <style>
                  body { font-family: Arial, sans-serif; text-align: center; color: #3983C9; }
                  img { max-width: 90%; max-height: 90vh; }
                  .image-gallery { display: flex; justify-content: center; align-items: center; }
                  .nav-arrow { cursor: pointer; margin: 0 50px; font-size: 30px; user-select: none; }
                  .image-count { margin-top: 10px; font-size: 18px; }
                </style>
              </head>
              <body>
                <h1>Flutter App UI Demo - KNUST Scan</h1>
                <div class="image-gallery">
                  <div class="nav-arrow" onclick="prevImage()">&#10094;</div>
                  <img id="galleryImage" src="./assets/knust_scan_ui/image (1).png" alt="UI Image">
                  <div class="nav-arrow" onclick="nextImage()">&#10095;</div>
                </div>
                <div class="image-count">
                  <span id="currentImage">1</span> / <span id="totalImages">6</span>
                </div>
                <script>
                  const images = [];
                  for (let i = 1; i <= 6; i++) {
                    images.push(\`./assets/knust_scan_ui/image (\${i}).png\`);
                  }

                  let currentIndex = 0;

                  function showImage(index) {
                    const imgElement = document.getElementById('galleryImage');
                    imgElement.src = images[index];
                    document.getElementById('currentImage').innerText = index + 1;
                  }

                  function prevImage() {
                    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
                    showImage(currentIndex);
                  }

                  function nextImage() {
                    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
                    showImage(currentIndex);
                  }

                  document.getElementById('totalImages').innerText = images.length;

                  window.onload = () => {
                    showImage(currentIndex);
                  };
                </script>
              </body>
              </html>
            `);
            newTab.document.close(); // Ensure the document is fully closed
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
        // icon: "close",
        buttons: {
          option1: {
            text: "   Figma UI Design   ",
            className: "swal-button swal-button--confirm swal-button-compl",
            value: "figma",
            closeModal: true,
            visible: false,
          },
          option2: {
            text: "Flutter App UI Demo",
            className: "swal-button swal-button--confirm swal-button-prim",
            value: "flutter",
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
            window.open("https://youtube.com"); // Replace with actual live demo URL
            break;
          case "flutter":
            const newTab = window.open();
            newTab.document.open();
            newTab.document.write(`
              <html>
              <head>
                <title>Flutter App UI Demo - G-to-G: Graduands-to-Graduates</title>
                <style>
                  body { font-family: Arial, sans-serif; text-align: center; color: #3983C9; }
                  img { max-width: 90%; max-height: 90vh; }
                  .image-gallery { display: flex; justify-content: center; align-items: center; }
                  .nav-arrow { cursor: pointer; margin: 0 50px; font-size: 30px; user-select: none; }
                  .image-count { margin-top: 10px; font-size: 18px; }
                </style>
              </head>
              <body>
                <h1>Flutter App UI Demo - G-to-G: Graduands-to-Graduates</h1>
                <div class="image-gallery">
                  <div class="nav-arrow" onclick="prevImage()">&#10094;</div>
                  <img id="galleryImage" src="./assets/g_to_g_ui/image (1).png" alt="UI Image">
                  <div class="nav-arrow" onclick="nextImage()">&#10095;</div>
                </div>
                <div class="image-count">
                  <span id="currentImage">1</span> / <span id="totalImages">50</span>
                </div>
                <script>
                  const images = [];
                  for (let i = 1; i <= 50; i++) {
                    images.push(\`./assets/g_to_g_ui/image (\${i}).png\`);
                  }

                  let currentIndex = 0;

                  function showImage(index) {
                    const imgElement = document.getElementById('galleryImage');
                    imgElement.src = images[index];
                    document.getElementById('currentImage').innerText = index + 1;
                  }

                  function prevImage() {
                    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
                    showImage(currentIndex);
                  }

                  function nextImage() {
                    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
                    showImage(currentIndex);
                  }

                  document.getElementById('totalImages').innerText = images.length;

                  window.onload = () => {
                    showImage(currentIndex);
                  };
                </script>
              </body>
              </html>
            `);
            newTab.document.close(); // Ensure the document is fully closed
            break;
            break;
          default:
            // If overlay or cancel is clicked, the alert is closed automatically
            swal.close();
        }
      });
    });
  });
});
