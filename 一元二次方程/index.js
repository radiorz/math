const args = {
  a: 1,
  b: 2,
  c: 3,
};
// a b c  分别为二次项系数 一次项系数 和 常数项系数
const a = Number(args.a);
const b = Number(args.b);
const c = Number(args.c);
function is虚数根(a, b, c) {
  return b * b - 4 * a * c < 0;
}
function to虚数根(a,b,c){

}
function to实数根(a,b,c){
  
}

if (is虚数根(a, b, c)) {
  // 使用公式法求解
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
