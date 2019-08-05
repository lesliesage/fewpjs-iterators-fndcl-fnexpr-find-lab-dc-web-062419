const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let win = record.find(function(year) {return year.result === "W"});
  return win ? win.year : undefined;
}
