// tags = [];
uniqueTags = [];
tagsDict = {};
links = [];
bubbles = {};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  data = loadTable('dict.csv', 'csv');
}

function loadData() {
  let tags = [];
  print(data.getRowCount() + ' total rows in table');
  print(data.getColumnCount() + ' total columns in table');
  print(data.getColumn('name'));
  for (let r = 1; r < data.getRowCount(); r++) {
      let rowTags = [];
    for (let c = 3; c < data.getColumnCount(); c++) {
      // bubbles.push(new Bubble(random(width), random(height), random(10, 20), data.getString(r, c)));
      // bubbles.push(new Bubble(x, y, diameter, label));
      if(data.getString(r,c) != ""){rowTags.push(data.getString(r,c));}
    }
    links.push(new Link(data.getString(r, 0),rowTags));
    // }
  }
  for (let r = 1; r < data.getRowCount(); r++) {
    for (let c = 3; c < data.getColumnCount(); c++) {
      let str = data.getString(r, c);

      tags.push(str);
    }
  }
  uniqueTags = [... new Set(tags)];
  uniqueTags.splice(tags.indexOf(""), 1);
  // for (let i = 0 ; i < uniqueTags.length; i++ ){

  // }
  tags.forEach(function (x) { tagsDict[x] = (tagsDict[x] || 0) + 1; });
  delete tagsDict[""];
  for (const [key, value] of Object.entries(tagsDict)) {
    // console.log(key, value);
    // bubbles.push(new Bubble(random(width), random(height), map(value, 1, 10, 20, 50), key));
    bubbles[key] = new Bubble(random(width), random(height), map(value, 1, 10, 20, 50), key);
  }
}

function mousePressed() {
  let diameter = random(40, 80);
  let label = 'New Label';
}