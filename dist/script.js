const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
const title = document.querySelector(".title");
const cursor = document.querySelector("#cursor");

title.addEventListener("mouseover", () => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    title.innerText = title.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return title.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= title.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 100);
});

window.addEventListener("mousemove", event => {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
});

window.addEventListener("mouseout", () => {
  title.innerText = title.dataset.value;
  clearInterval(interval);
});

const updateClock = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);