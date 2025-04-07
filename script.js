function showLoveMessage() {
    const name = document.getElementById("crushName").value;
    const result = document.getElementById("result");

    if (name.trim() === "") {
        result.style.display = "block";
        result.innerHTML = "Vui lòng nhập tên của bạn!";
        result.style.color = "#e74c3c"; // Màu đỏ để báo lỗi
    } else {
        result.style.display = "block";
        result.innerHTML = `Chào ${name}! Mình thật sự rất thích bạn. Bạn có đồng ý làm bạn của mình không? ❤️`;
        result.style.color = "#2ecc71"; // Màu xanh khi thành công
    }
}