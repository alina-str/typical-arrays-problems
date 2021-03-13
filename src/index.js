
exports.min = function min (array) {
  min=0;
  for (let i=0; i<array.length; i++){
    if (array[i]<min) min=array[i];
  }
  return min;
}

exports.max = function max (array) {
  max=0;
  for (let i=0; i<array.length; i++){
    if (array[i]>max) max=array[i];
  }
  return max;
}

exports.avg = function avg (array) {
  let avg=0;
  var k=0;
  var s=0;
  for (let i=0; i<array.length; i++){
    s+=array[i]; k++;
  }
  avg=s/k;
  return avg;
}
