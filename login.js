
async function login() {
  const Username = document.getElementById("username").value;
  const Password = document.getElementById("password").value;

  const response = await fetch("https://localhost:7063/api/Auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Username, Password })
  });

  const data = await response.json();
debugger
  if (response.ok) {
    alert("Đăng nhập thành công!");
    console.log(data);
    window.location.href = "index.html";
  } else {
    alert("Tài khoản hoặc mật khẩu sai!");
  }
}

