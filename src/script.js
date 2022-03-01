function myfunction() {
  var input = document.getElementById("input1").value;
  var a = input.charCodeAt(0);
  console.log(a);
  document.getElementById("output").innerHTML = "ASCII code is    " + a;
}
