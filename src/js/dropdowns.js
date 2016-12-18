(() => {

  const allLists = document.getElementsByClassName('list')
  const types = ['subject', 'year', 'level']

  types.forEach((field) => {

    const [list] = document.getElementsByClassName(`list ${field}`)
    const [select] = document.getElementsByClassName(`select ${field}`)

    if (!list || !select) {
      return
    }

    // Set width of select equal to the list (if the list were shown)
    list.style.display = 'inline-block'
    select.style.width = window.getComputedStyle(list).width
    list.style.display = 'none'

    select.addEventListener('click', () => {
      Array.prototype.forEach.call(allLists, (el) => {
        el.style.display = 'none'
      })
      list.style.display = 'inline-block'
    })

  })
})()