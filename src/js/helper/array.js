function range(begin, end) {
  var count = 1;
  var result = [];
  while (count <= end) {
    result.push(count);
    count = count + 1;
  }
  return result;
}

module.exports = {
  range: range
};
