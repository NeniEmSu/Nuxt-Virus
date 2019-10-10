window.onNuxtReady(() => {
  (function () {
    const filterBtn = document.querySelectorAll('.filter-btn')
    filterBtn.forEach(function (btn) {
      btn.addEventListener('click', function (event) {
        event.preventDefault()
        this.classList.add('active')
        const value = event.target.dataset.filter
        const items = document.querySelectorAll('.store-item')
        items.forEach(function (items) {
          if (value === 'all') {
            items.style.display = 'block'
          } else if (items.classList.contains(value)) {
            items.style.display = 'block'
          } else {
            items.style.display = 'none'
          }
        })
      })
    })
  })()
})
