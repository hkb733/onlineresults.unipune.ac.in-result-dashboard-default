document.getElementById("resultForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const seatNo = document.getElementById("seatNo").value;
  const motherName = document.getElementById("motherName").value;
  const captcha = document.getElementById("captcha").value;

  if (captcha === "12345") {
    const imgURL = "https://i.imgur.com/<image-id>.jpg"; // Replace with the correct direct URL
    window.open(imgURL, "_blank"); // Opens the image in a new tab
  } else {
    alert("Invalid Captcha!");
  }
});
