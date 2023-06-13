let usersResult = JSON.parse('<%- result %>'); // JSON 문자열을 JavaScript 객체로 변환
console.log(usersResult); // 사용할 수 있는 JavaScript 객체 확인

// 데이터 활용
usersResult.forEach(function (user) {
  console.log(user.id, user.password);
});


document.getElementById("justClick").addEventListener("click", function () {
  let justCount = document.getElementById("justCount").innerText;
  document.getElementById("justCount").innerText = String(Number(justCount) + 1);
});

document.getElementById("applyToGetEmail").addEventListener("click", function() {
  console.log("click");
});