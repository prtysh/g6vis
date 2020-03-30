class Bubble {
  constructor(x, y, diameter, name) {
    this.x = x;
    this.y = y;
    // this.diameter = map(diameter,1,10,30,75);
    this.diameter = diameter;
    this.radius = diameter / 2;
    this.name = name;
    // console.log(typeof(this.name));
    this.over = false;
    this.col = color (random(255), 0, 0);
  }

  // Check if mouse is over the bubble
  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);
    this.over = d < this.radius;
    // console.log(this.radius);
  }

  // Display the Bubble
  display() {
    stroke(0);
    strokeWeight(0.8);
    fill(this.col);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    if (this.over) {
      fill(0);
      text(this.name, this.x, this.y + this.radius + 20);
    }
  }
}

class Link {
  constructor(linkName, tagList){
    this.link = linkName;
    this.tags = tagList;
    this.init = createVector(random(width), random(height));
    this.final= createVector(random(width), random(height));
  }

  display(){
    // console.log(bubbles[this.tags[0]]);
    for(let i = 0 ; i < this.tags.length - 1; i++ ){
      let p1 = createVector(bubbles[this.tags[i]].x ,bubbles[this.tags[i]].y);
      let p2 = createVector(bubbles[this.tags[i + 1]].x ,bubbles[this.tags[i + 1]].y);
      // line(p1.x,p1.y,p2.x,p2.y);
      noFill();
      stroke(0);
      curve(0, 0, p1.x, p1.y, p2.x, p2.y , width, height);
    }
    // line(this.init.x, this.init.y, this.final.x, this.final.y);
  }
}