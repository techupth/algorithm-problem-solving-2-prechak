function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < books.length; i++) {
    // console.log(books[i].title)
    if (books[i].title === searchTitle) {
      return i;
    }
  }
  return -1;
}

// Linear

/*
function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = books.length-1
  while(left <= right){
    let mid = Math.floor((left + right) / 2)
    let midTitle = books[mid].title

    if(searchTitle === midTitle){
      return mid
    }else if(midTitle < searchTitle){
      left = mid + 1
    }else{
      right = mid - 1
    }
  }
  return -1
}

O(log n)

*/
