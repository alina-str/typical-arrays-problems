
exports.min = function min (array) {
  var min=array[0];
  for (let i=0; i<array.length; i++){
    if (array[i]<min) min=array[i];
  }
  return min;
}

exports.max = function max (array) {
  var max=array[0];
  for (let i=0; i<array.length; i++){
    if (array[i]>max) max=array[i];
  }
  return max;
}

exports.avg = function avg (array) {
  var avg=0;
  var s=0;
  for (let i=0; i<array.length; i++){
    s+=array[i];
  }
  avg=s/array.length;
  return avg;
}
