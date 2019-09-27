const vol = (x, y, z) => { return x * y * z }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input(Enter value between 1 and 100)'
    event.target.focus()
  }
}

const updateWithVolume = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#len').checkValidity() && document.querySelector('#wid').checkValidity() && document.querySelector('#hei').checkValidity()) {
    // const regex = /[^a-zA-Z_]/g
    // const s = document.querySelector('#guest').value.replace(regex, '')
    const l = parseInt(document.querySelector('#len').value)
    const w = parseInt(document.querySelector('#wid').value)
    const h = parseInt(document.querySelector('#hei').value)
    const ans = `CUBE volume is ${vol(l, w, h)}.`
    document.querySelector('#result').innerHTML = ans
  }
}



// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'len') ||
    (event.target && event.target.id === 'wid') || (event.target && event.target.id === 'hei'))
    {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'volButton') { updateWithVolume(event) }
})


