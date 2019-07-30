import Vue from "vue"
import highlightjs from "highlight.js"
import marked, { Renderer } from "marked"
const dayjs = require("dayjs")
import advancedFormat from "dayjs/plugin/advancedFormat"
dayjs.extend(advancedFormat)
const sanitizeHtml = require("sanitize-html")

highlightjs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/javascript")
)
highlightjs.registerLanguage("css", require("highlight.js/lib/languages/css"))

const renderer = new Renderer()
renderer.code = (code, language) => {
  const validLang = !!(language && highlightjs.getLanguage(language))

  const highlighted = validLang
    ? highlightjs.highlight(language, code).value
    : code

  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`
}

marked.setOptions({
  renderer
})

Vue.filter("parseMd", function(content) {
  let clean = sanitizeHtml(content)

  return marked(clean)
})

Vue.filter("toDate", function(timestamp) {
  return dayjs(timestamp * 1000).format("Do - MM - YY")
})
