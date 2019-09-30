const ls = (x, y) => { 
    if (x.length>0 && y.length>0) {
    if (x.length<y.length)
    {
        return y
    }
    else {
      return x
    }
    }
}

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Minimum length of the string should be 1'
    event.target.focus()
  }
}

const longString = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#str1').checkValidity() && document.querySelector('#str2').checkValidity()) {
    
    const f = document.querySelector('#str1').value
    const s = document.querySelector('#str2').value
    
    const ans = `Longest string is ${ls(f, s)}.`
    document.querySelector('#result').innerHTML = ans
  }
}



// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'str1') ||
    (event.target && event.target.id === 'str2'))
    {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'res') { longString(event) }
})


