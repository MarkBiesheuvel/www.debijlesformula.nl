((document) => {

  const $ = document.getElementById.bind(document)

  const english = $('english')
  const dutch = $('dutch')
  const button = $('translate-button')

  let isEnglish = true;
  const show = (element) => {
    element.style.display = 'block';
  }
  const hide = (element) => {
    element.style.display = 'none'
  }

  button.addEventListener('click', () => {

    if (isEnglish) {
      show(dutch)
      hide(english)
      button.innerHTML = '[Origineel]'
    } else {
      hide(dutch)
      show(english)
      button.innerHTML = '[Vertaal]'
    }
    isEnglish ^= true
  })

})(document)