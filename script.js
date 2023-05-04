const eyes = document.querySelectorAll(".eye");
const anchor = document.querySelector("#minion");
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const angledeg = angle(mouseX, mouseY, anchorX, anchorY);

  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angledeg}deg)`;
    anchor.style.filter = `hue-rotate(${angledeg}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const ny = ey - cy;
  const nx = ex - cx;
  const val = Math.atan2(ny, nx);
  const degree = (val * 180) / Math.PI;
  return degree;
}
