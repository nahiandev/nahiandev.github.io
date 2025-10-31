const typer = document.getElementById("terminal-title");
const roles = ["scale", "convert", "sell"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let blinkCount = 0;

function terminal_effect() {
  const currentRole = roles[roleIndex];
  const displayedText = currentRole.substring(0, charIndex);
  typer.textContent = displayedText + "_";

  if (!isDeleting) {
    if (charIndex < currentRole.length) {
      charIndex++;
      setTimeout(terminal_effect, 100);
    } else {
      if (blinkCount < 5) {
        typer.textContent = currentRole + (blinkCount % 2 ? " " : "_");
        blinkCount++;
        setTimeout(terminal_effect, 400);
      } else {
        blinkCount = 0;
        isDeleting = true;
        setTimeout(terminal_effect, 300);
      }
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      typer.textContent = currentRole.substring(0, charIndex) + "_";
      setTimeout(terminal_effect, 50);
    } else {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(terminal_effect, 300);
    }
  }
}

window.addEventListener("DOMContentLoaded", terminal_effect);