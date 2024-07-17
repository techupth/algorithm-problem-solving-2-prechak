// เริ่มเขียนโค้ดตรงนี้จ้า
function findStudentIndex(students, searchStudent) {
  for (let i = 0; i < students.length; i++) {
    if (searchStudent === students[i]) {
      return i;
    }
  }
  return -1;
}

// ตอบคำถามตรงนี้จ้า
/*
BigO เท่ากับ O(n^1) หรือ O(n) เพราะ Loop แค่รอบเดียวเป็นการหาแบบ LinearSearch
*/
