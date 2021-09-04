const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const submit = document.getElementById("submit");

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden')
    }
})

// const submit = document.getElementById("submit");

submit.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();

  const firstNameField = document.getElementById("firstname");
  let valid = true;

  if (!firstNameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    nameError.setAttribute('aria-hidden', false);
    nameError.setAttribute('aria-invalid', true);

  }


  return valid;
}
