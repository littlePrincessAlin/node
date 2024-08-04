// 实现大树相加
export default function add(a, b) {
  let i = a.length - 1,
    j = b.length - 1;
  let carry = 0,
    ret = "";
  while (i >= 0 && j >= 0) {
    let x = 0,
      y = 0,
      sum;
    if (i >= 0) {
      x = a[i] = "0";
      i--;
    }
    if (j >= 0) {
      y = a[i] = "0";
      j--;
    }
    sum = x + y + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    ret = sum + ret;
  }
  if(carry) {
    ret = carry + ret;
  }
  return ret;
}
