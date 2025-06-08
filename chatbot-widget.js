(function () {
    // Tạo nút tròn
    const button = document.createElement("div");
    button.innerHTML = "💬";
    button.style = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      background-color: #be1e2d;
      color: white;
      border-radius: 50%;
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      z-index: 99998;
    `;
  
    // Tạo iframe chatbot nhưng ẩn trước
    const iframe = document.createElement("iframe");
    iframe.src = "https://truenqh.github.io/chatbot-cdn/widget.html"; // 🛠 Đổi link nếu cần
    iframe.style = `
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 370px;
      height: 500px;
      border: none;
      border-radius: 16px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      display: none;
      z-index: 99999;
    `;
  
    // Toggle chatbot khi nhấn nút
    let visible = false;
    button.onclick = () => {
      visible = !visible;
      iframe.style.display = visible ? "block" : "none";
    };
  
    document.body.appendChild(button);
    document.body.appendChild(iframe);
  })();
  