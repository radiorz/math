const args = {
  a: 1,
  b: 2,
  c: 3,
};
const 二次项系数 = Number(args.a);
const 一次项系数 = Number(args.b);
const 常数项系数 = Number(args.c);

if (b * b - 4 * a * c < 0) {
  var x1 =
    (-b / 2) * a + "-" + (Math.pow(4 * a * c - b * b, 1 / 2) / 2) * a + "i";
  var x2 =
    (-b / 2) * a + "+" + (Math.pow(4 * a * c - b * b, 1 / 2) / 2) * a + "i";
  alert("方程的虚根分别为：" + "x1=" + x1 + "      " + "x2=" + x2);
} else {
  var x1 = ((-b - Math.pow(b * b - 4 * a * c, 1 / 2)) / 2) * a;
  var x2 = ((-b + Math.pow(b * b - 4 * a * c, 1 / 2)) / 2) * a;
  alert("方程的实根分别为：" + "x1=" + x1 + "      " + "x2=" + x2);
}
