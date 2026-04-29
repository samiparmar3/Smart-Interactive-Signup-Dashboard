const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const password = document.getElementById("password");
const toggle = document.getElementById("togglePass");
const success = document.getElementById("successMsg");

toggle.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    toggle.classList.toggle("fa-eye");
    toggle.classList.toggle("fa-eye-slash");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const pass = password.value.trim();

    if(name.length < 3){
        alert("Enter valid name");
        return;
    }

    if(!/^\S+@\S+\.\S+$/.test(email)){
        alert("Enter valid email");
        return;
    }

    if(pass.length < 6){
        alert("Password must be 6+ characters");
        return;
    }

    success.style.display = "block";

    setTimeout(() => {
        success.style.display = "none";
        form.reset();
    }, 2000);
});