const containerEL = document.querySelector(".container");
const mouseEventEL = document.querySelector(".mouse-event");

window.addEventListener("mousemove", (event)=> {
    containerEL.innerHTML = `
    <div class="mouse-event">
            ${event.clientX}
            <h4>Mouse X Positon(px)</h4>
        </div>
        <div class="mouse-event">
        ${event.clientY}
            <h4>Mouse Y Positon(py)</h4>
        </div>
        `
})