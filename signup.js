
async function signUp() {
  const Username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Mật khẩu xác nhận không khớp!");
    return;
  }
  
  console.log("đang chạy sign up")
  const response = await fetch("https://localhost:7063/api/Auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Username, password })
  });

  if (response.ok) {
    alert("Đăng ký thành công!");
    window.location.href = "login.html";
   } else {
      const data = await response.json();
      alert(data.message || "Đăng ký thất bại!");
    }
}
