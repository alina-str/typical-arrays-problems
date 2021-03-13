
exports.min = function min (array) {
  var min=array[0];
  for (let i=0; i<array.length; i++){
    if (array[i]<min) min=array[i];
  }
  if(array.length==0) min=0;
  if (array===undefined) min=0;
  if (!(Array.isArray(array) && array.length)) min=0;
  return min;
}

exports.max = function max (array) {
  var max=array[0];
  for (let i=0; i<array.length; i++){
    if (array[i]>max) max=array[i];
  }
  if(array.length==0) max=0;
  if (array===undefined) max=0;
  if (!(Array.isArray(array)&& array.length)) max=0;
  return max;
}

exports.avg = function avg (array) {
  var avg=0;
  var s=0;
  for (let i=0; i<array.length; i++){
    s+=array[i];
  }
  avg=s/array.length;
  if(array.length==0) avg=0;
  if (array===undefined) avg=0;
  if (!(Array.isArray(array)&& array.length)) avg=0;
  return avg;
}
