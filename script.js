document.getElementById("resultForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const seatNo = document.getElementById("seatNo").value;
  const motherName = document.getElementById("motherName").value;
  const captcha = document.getElementById("captcha").value;

  if (captcha === "12345") {
    const img = document.createElement("img");
    img.src = "https://i.imgur.com/your-image-id.jpg"; // Replace with your Imgur direct image URL
    img.alt = "Prank Image";
    img.style.maxWidth = "100%"; // Optional: Ensure it fits nicely
    document.body.appendChild(img);
  } else {
    alert("Invalid Captcha!");
  }
});
