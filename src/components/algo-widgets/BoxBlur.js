function boxBlur(image) {
  let imageArray = [];

  for (let y = 0; y < image.length - 2; y++) {
    let line = [];

    for (let x = 0; x < image[y].length - 2; x++) {
      let sum = 0;
      let count = 0;
      for (let a = y; a < y + 3; a++) {
        for (let b = x; b < x + 3; b++) {
          sum += image[a][b];
          count++;
        }
      }
      line.push(Math.floor(sum / count));
    }
    imageArray.push(line);
  }
  return imageArray;
}

const box = boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]);

box;

// #23
// https://app.codesignal.com/arcade/intro/level-5/5xPitc3yT3dqS7XkP

// not interested in refactoring to render prop
