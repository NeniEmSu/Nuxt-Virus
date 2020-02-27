const fs = require('fs')
fs.writeFileSync(
  './.env',
  `
API_GQL_LINK=${process.env.API_GQL_LINK}\n
IMAGE_LINK=${process.env.IMAGE_LINK}\n
MAPS_API_KEY=${process.env.MAPS_API_KEY}\n
GOOGLE_ANALYTICS_API_KEY=${process.env.GOOGLE_ANALYTICS_API_KEY}\n
JIVO_CHAT_WIDGET_ID=${process.env.JIVO_CHAT_WIDGET_ID}
`
)
