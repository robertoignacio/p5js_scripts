function setup() {
    createCanvas(500, 500);
    background(220);
  }
  
  function draw() {
    // Draw grid lines
    drawLines(6, width, "vertical");
    drawLines(6, height, "horizontal");  
    
    // Draw circles
    drawCircle(250, 250, 200, 9, 100, 50);
    drawCircle(250, 250, 400, 50, 50, 50);
    
    // Draw origin coordinates (0, 0)
    drawOrigin();
  }
  
  function drawLines(numLines, length, direction) {
    const lineSpacing = length / (numLines - 1);
    for (let i = 0; i < numLines; i++) {
      strokeWeight(1);
      stroke(128);
      if (direction === "vertical") {
        const x = i * lineSpacing;
        line(x, 0, x, height);
      } else if (direction === "horizontal") {
        const y = i * lineSpacing;
        line(0, y, width, y);
      }
    }
  }
  
  function drawCircle(xcoord, ycoord, diameter, H, S, L) {
    // Draw circle
    colorMode(HSL, 100);
    stroke(H, S, L); // set stroke color
    strokeWeight(3); // set stroke weight to 3 pixels
    noFill(); // don't fill the circle
    circle(xcoord, ycoord, diameter); // draw circle
    
    // Draw circle origin point
    stroke(H, S, L); // set stroke color
    strokeWeight(5);
    point(xcoord, ycoord);
    
    // Draw circle origin coordinates (x, y)
    textSize(15);
    fill(H, S, L);
    noStroke();
    textAlign(CENTER, BOTTOM);
    text(`(${xcoord}, ${ycoord})`, xcoord, ycoord+(diameter/20));
  }
  
  
  function drawOrigin() {
    // Draw canvas origin coordinates (0, 0)
    textSize(20);
    fill(128);
    noStroke();
    text(`(0, 0)`, 25, 25);
  }
  
  function keyPressed() {
    if (key === 's' || key === 'S') {
      save('myCanvas.png');
    }
  }
  