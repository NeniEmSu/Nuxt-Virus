window.onNuxtReady(() => {
  (function () {
    const widget_id = 'j9oYCawnP2'
    const d = document
    const w = window

    function l () {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = '//code.jivosite.com/script/widget/' + widget_id
      const ss = document.getElementsByTagName('script')[0]
      ss.parentNode.insertBefore(s, ss)
    }
    if (d.readyState === 'complete') {
      l()
    } else if (w.attachEvent) {
      w.attachEvent('onload', l)
    } else {
      w.addEventListener('load', l, false)
    }
  })()
})
