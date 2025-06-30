document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactform");

  form.onsubmit = function(e) {
    let ok = true;

    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const site = document.getElementById("company");
    const message = document.getElementById("message");

    if (name.value.length < 2 || name.value.length > 30) {
      name.style.border = "2px solid red";
      ok = false;
    }

    if (age.value < 18 || age.value > 130) {
      age.style.border = "2px solid red";
      ok = false;
    }

    if (!email.value.includes("@")) {
      email.style.border = "2px solid red";
      ok = false;
    }

    if (site.value && !site.value.startsWith("http")) {
      site.style.border = "2px solid red";
      ok = false;
    }

    if (message.value.length < 10 || message.value.length > 350) {
      message.style.border = "2px solid red";
      ok = false;
    }

    if (!ok) {
      e.preventDefault();
    }
  };
});