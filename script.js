document.getElementById("resultForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const seatNo = document.getElementById("seatNo").value;
  const motherName = document.getElementById("motherName").value;
  const captcha = document.getElementById("captcha").value;

  if (captcha === "12345") {
    const imgURL = "https://imgur.com/a/wfOcGkI"; // Replace with your Imgur direct image URL
    window.location.href = imgURL; // Redirect to the image URL
  } else {
    alert("Invalid Captcha!");
  }
});
