/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

2
1.5
2
3.5
2
2
2

*/

const copyArray = (array) => {
  let copy = array.slice();
  return copy;
}

const sortArray = (array) => {
  let copy = copyArray(array)
  return copy.sort(function(a,b){return a-b});
}


const showMed = (array) => {
  let output = [array[0]];
  for (i = 1; i<array.length; i++) {
    let now = array.slice(0,i+1);
    now = sortArray(now);
    if ((i+1)%2 == 0) {
      console.log('odd=',array[i])
      output.push(array[Math.floor(i/2)])
    } else {
      console.log('even=',array[i])
      output.push((array[i/2-1]+array[i/2+1])/2)
    }
    console.log(output)
  }
  return output
}

let test1 = [2,1,5,7,2,0,5];


$(document).ready(function() {
  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();
  $('#output-section-1').text(1);
  })
});
