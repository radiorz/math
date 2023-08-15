/**
 * 求解二元一次方程的根
 * @param {number} a 二次项系数
 * @param {number} b 一次项系数
 * @param {number} c 常数项系数
 */
function to根(a, b, c) {
  const { x1, x2 } = is虚数根(a, b, c) ? to虚数根(a, b, c) : to实数根(a, b, c);
  console.log("方程的根分别为：" + "x1=" + x1 + "      " + "x2=" + x2);
}

function is虚数根(a, b, c) {
  return b * b - 4 * a * c < 0;
}
function to虚数根(a, b, c) {
  // 使用公式法求解
  var x1 =
    (-b / 2) * a + "-" + (Math.pow(4 * a * c - b * b, 1 / 2) / 2) * a + "i";
  var x2 =
    (-b / 2) * a + "+" + (Math.pow(4 * a * c - b * b, 1 / 2) / 2) * a + "i";
  return { x1, x2 };
}
function to实数根(a, b, c) {
  var x1 = ((-b - Math.pow(b * b - 4 * a * c, 1 / 2)) / 2) * a;
  var x2 = ((-b + Math.pow(b * b - 4 * a * c, 1 / 2)) / 2) * a;
  return { x1, x2 };
}

const args = {
  a: 1,
  b: 2,
  c: 3,
};

to根(...Object.values(args));
