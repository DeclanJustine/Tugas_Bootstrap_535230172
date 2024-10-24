function subscriptionData() {
  const firstName = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("firstname", firstName);
  localStorage.setItem("email", email);

  window.location.href = "subscription.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const firstName = localStorage.getItem("firstname");
  const email = localStorage.getItem("email");

  if (firstName && email) {
    document.getElementById("name").value = firstName;
    document.getElementById("email").value = email;
    localStorage.removeItem("firstname");
    localStorage.removeItem("email");
  }
});
