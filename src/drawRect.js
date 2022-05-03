export function drawRect(svg) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  svg.setAttribute('width', 400);
  svg.setAttribute('height', 300);
  svg.setAttribute('fill', 'red');
  svg.setAttribute('stroke', 'yellow');
  svg.appendChild(rect);
}
