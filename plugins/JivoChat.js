window.onNuxtReady(() => {
  (function () {
    // eslint-disable-next-line camelcase
    const widget_id = process.env.JIVO_CHAT_WIDGET_ID
    const d = document
    const w = window

    function l () {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      // eslint-disable-next-line camelcase
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
