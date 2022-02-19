const btn = document.querySelector('.btn'),
  emailEl = document.querySelector('#email'),
  re = /\S+@\S+\.\S+/

btn.addEventListener('click', (e) => {
  const isEmail = re.test(emailEl.value)

  if (emailEl.value !== '' && isEmail) {
    e.target.parentElement.classList.remove('error')
  } else {
    e.target.parentElement.classList.add('error')
  }
})
