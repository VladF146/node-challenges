for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("neuefische");
  } else if (i % 3 === 0) {
    console.log("neue");
  } else if (i % 5 === 0) {
    console.log("fische");
  } else {
    console.log(i);
  }
}
