// เริ่มเขียนโค้ดตรงนี้จ้า
function findStudentIndex(students, searchStudent) {
  let left = 0;
  let right = students.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (students[mid] === searchStudent) {
      return mid;
    } else if (students[mid] < searchStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// ตอบคำถามตรงนี้จ้า
/*
BigO = O(log n) เพราะว่าเป็นการลูปรอบเดียวและทุกครั้งที่ทำการเปรียบเทียบ
อาเรย์จะลดลงไปครึ่งนึงทุกครั้ง จึงทำให้ BinarySearch มีประสิทธิภาพในการทำงานอย่างรวดเร็ว
เช่น หากอาเรย์มีสมาชิก 8 ตัว จะทำงานแค่ 3 รอบ log2(8) = 3
*/
