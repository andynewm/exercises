module.exports = function sort(arr) {
  var r = arr.slice(0);
  quicksort(r, 0, r.length);

  return r;
}

function quicksort(arr, start, end) {
  if (end - start <= 1) {
    return;
  }

  var pivot = start,
      i = start,
      value = arr[pivot];

  while(i++ < end) {
    if (arr[i] < value) {
      arr[pivot++] = arr[i];
      arr[i] = arr[pivot];
      arr[pivot] = value;
    }
  }

  quicksort(arr, start, pivot);
  quicksort(arr, pivot + 1, end);
}