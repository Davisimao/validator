function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error("Email inválido.")
    err.input = "email"
    throw err
  }
}

 function validPassword(password) {
  if (
    password.lenght < 8 ||
    !password.match(/[A-Z]/) ||
    !password.match(/[a-z]/) ||
    !password.match(/\d/) ||
    !password.match(/\W/) ||
    !password.match(/.{8,}/)
  ) {
    const err = new Error("Senha invalida")
    err.input = "password"
    throw err
  }
} 

function resetFormStyles(inputs) {
  Object.entries(inputs).forEach(([key, value]) => {
    value.classList.remove("success", "error")
    document.querySelector(`#${key}-error`).textContent = ""
  })
}

const userInputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
}

const form = document.querySelector("form")

form.addEventListener("submit", (ev) => {
  ev.preventDefault()

  resetFormStyles(userInputs)
  try {
    userInputs.name.classList.add("success")
    validateEmail(userInputs.email.value)
    userInputs.email.classList.add("success")
    validPassword(userInputs.password.value)
    userInputs.password.classList.add("success")
  } catch (err) {
    userInputs[err.input].classList.add("error")
    document.querySelector(`#${err.input}-error`).textContent = err.message
  }
})
