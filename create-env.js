const fs = require('fs')
fs.writeFileSync('./.env', `
BASE_URL=${process.env.BASE_URL}\n
POSTS_URL=${process.env.POSTS_URL}\n
PRODUCT_URL=${process.env.PRODUCT_URL}\n
PROMOTIONS_URL=${process.env.PROMOTIONS_URL}\n
URL=${process.env.URL}\n
PER_PAGE=${process.env.PER_PAGE}\n
apiUrl=${process.env.apiUrl}\n
listCollectionsToken=${process.env.listCollectionsToken}\n
apiToken=${process.env.apiToken}\n
imagePath=${process.env.imagePath}\n
baseUrl=${process.env.baseUrl}\n
pagesToken=${process.env.pagesToken}\n
FORMS_TOKEN=${process.env.FORMS_TOKEN}\n
APPROVE_TOKEN=${process.env.APPROVE_TOKEN}\n
SITE_URL=${process.env.SITE_URL}\n
PRODUCT_TOKEN=${process.env.PRODUCT_TOKEN}\n
FRONTEND_URL=${process.env.FRONTEND_URL}\n
IMAGE_URL=${process.env.IMAGE_URL}
`)
