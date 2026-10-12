// Bài 1: Template literal + function
export const productInfo = (name, price) =>
  `Sản phẩm: ${name}, Giá: ${price.toLocaleString("en-US")} VNĐ`;

// Bài 2: Chào người dùng (default parameter)
export const greet = (name = "bạn") => `Xin chào, ${name}!`;

// Bài 3: Tổng từ 1 đến n
export const sumUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

// Bài 4: Bình phương
export const square = (n) => n * n;

// Bài 5: Kiểm tra số chẵn
export const isEven = (n) => n % 2 === 0;

// Bài 6: Phần tử đầu tiên (destructuring mảng)
export const firstElement = ([first]) => first;

// Bài 7: Tổng với rest parameters
export const sum = (...nums) => nums.reduce((total, n) => total + n, 0);

// Bài 8: Tách giá trị từ đối tượng (destructuring object)
export const getUserInfo = ({ name, age }) => `Name: ${name}, Age: ${age}`;

// Bài 9: Danh sách tên từ mảng đối tượng
export const getNames = (people) => people.map(({ name }) => name).join(", ");

// Bài 10: Độ dài chuỗi
export const stringLength = (str) => str.length;

// Bài 11: Chuyển thành chữ hoa
export const toUpperCase = (str) => str.toUpperCase();

// Bài 12: Định dạng tiền tệ
export const formatCurrency = (num) => `${num.toLocaleString("en-US")} VNĐ`;

// Bài 13: Giá trị lớn nhất (spread)
export const max = (arr) => Math.max(...arr);

// Bài 14: Kiểm tra số nguyên tố
export const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Bài 15: Lặp chuỗi n lần
export const repeatString = (str, n) => Array(n).fill(str).join(" ");

// Bài 16: Tổng số lẻ trong mảng
export const sumOdd = (arr) =>
  arr.filter((n) => n % 2 !== 0).reduce((total, n) => total + n, 0);

// Bài 17: Tổng các số lớn hơn n
export const sumGreaterThan = (arr, n) =>
  arr.filter((x) => x > n).reduce((total, x) => total + x, 0);

// Bài 18: YYYY-MM-DD -> DD/MM/YYYY
export const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

// Bài 19: 3 phần tử đầu
export const firstThree = (arr) => arr.slice(0, 3);

// Bài 20: Chuỗi có chứa ký tự không
export const containsChar = (str, char) => str.includes(char);

// Bài 21: Gộp hai mảng (spread)
export const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

// Bài 22: Đếm số lần xuất hiện
export const countOccurrences = (arr, value) =>
  arr.filter((x) => x === value).length;

// Bài 23: Lọc số lẻ
export const filterOdd = (arr) => arr.filter((n) => n % 2 !== 0);

// Bài 24: Các số lớn hơn giá trị cho trước
export const greaterThan = (arr, value) => arr.filter((n) => n > value);

// Bài 25: Giai thừa
export const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Bài 26: Tách chẵn / lẻ (trả về object nên cần bọc ngoặc tròn)
export const separateEvenOdd = (arr) => ({
  even: arr.filter((n) => isEven(n)),
  odd: arr.filter((n) => !isEven(n)),
});

// Bài 27: Sắp xếp tăng dần (copy mảng để không làm thay đổi mảng gốc)
export const sortAsc = (arr) => [...arr].sort((a, b) => a - b);

// Bài 28: Tổng các số ở vị trí (index) chẵn
export const sumEvenIndex = (arr) =>
  arr.reduce((total, n, i) => (i % 2 === 0 ? total + n : total), 0);

// Bài 29: Nhân mỗi phần tử với 2
export const multiplyByTwo = (arr) => arr.map((n) => n * 2);

// Bài 30: Mảng string -> chuỗi
export const arrayToString = (arr) => arr.join("");