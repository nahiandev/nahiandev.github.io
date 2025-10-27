// Add any interactive elements here if needed
document.addEventListener('DOMContentLoaded', function () {
    // Example: Add hover effect to projects
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#f8f8f8';
        });
        project.addEventListener('mouseleave', function () {
            this.style.backgroundColor = '';
        });
    });
});


 const terminalText = "web developer  ";
  const terminalEl = document.getElementById("terminal-title");
  let i = 0;
  let isBlinking = false;

  function type() {
    if (i < terminalText.length) {
      // Typing phase
      terminalEl.textContent = terminalText.substring(0, i + 1);
      i++;
      setTimeout(type, 100); // 100ms per char
    } else if (!isBlinking) {
      // Start blinking after full text is typed
      isBlinking = true;
      terminalEl.textContent = terminalText + '_';
      setInterval(() => {
        if (terminalEl.textContent.endsWith('_')) {
          terminalEl.textContent = terminalText; // Remove _
        } else {
          terminalEl.textContent = terminalText + '_'; // Add _
        }
      }, 500); // Blink every 500ms
    }
  }

  window.addEventListener("DOMContentLoaded", type);

// const terminalText = "web developer";
// const terminalEl = document.getElementById("terminal-title");
// let i = 0;

// function type() {
//     if (i < terminalText.length) {
//         terminalEl.textContent += terminalText.charAt(i);
//         i++;
//         setTimeout(type, 100); // typing speed: 100ms per char
//     } else {
//         // Optional: blinking cursor effect
//         terminalEl.innerHTML += '<span class="cursor"></span>';
//         setInterval(() => {
//             const cursor = document.querySelector(".cursor");
//             if (cursor) cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
//         }, 500);
//     }
// }

// // Start typing on load
// window.addEventListener("DOMContentLoaded", type);