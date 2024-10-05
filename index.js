
const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

const blob = document.getElementById("blob");

document.body.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Select all elements with the class `menuitem`
document.querySelectorAll(".menuitem").forEach(menuitem => {
  // Set the original text as a dataset for each menuitem
  menuitem.dataset.value = menuitem.innerText;

  // Add the event listener for the hover effect
  menuitem.onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
          if (index < iterations) {
            return event.target.dataset.value[index]; // Reveal the original letter
          }
          return letters[Math.floor(Math.random() * 26)]; // Random letter
        })
        .join("");

      iterations += 1; // Increment iterations

      // Clear interval when all letters have been revealed
      if (iterations > event.target.dataset.value.length) {
        clearInterval(interval);
      }
    }, 50); // Adjust the interval time as needed
  };

  // Trigger the glitch effect on page load for each menuitem
  let loadIterations = 0;

  const loadInterval = setInterval(() => {
    menuitem.innerText = menuitem.innerText.split("")
      .map((letter, index) => {
        if (index < loadIterations) {
          return menuitem.dataset.value[index]; // Reveal the original letter
        }
        return letters[Math.floor(Math.random() * 26)]; // Random letter
      })
      .join("");

    loadIterations += 1; // Increment load iterations

    // Clear interval when all letters have been revealed
    if (loadIterations > menuitem.dataset.value.length) {
      clearInterval(loadInterval);
    }
  }, 50); // Adjust the interval time as needed
});

