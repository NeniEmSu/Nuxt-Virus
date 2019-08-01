import Vue from "vue"
import servicesYoutubeVideo from "~/components/services/servicesYoutubeVideo.vue"
import serviceCategories from "~/components/services/serviceCategories.vue"
import servicesBeforeAndAfter from "~/components/services/servicesBeforeAndAfter.vue"
import sercivesBreadcrumbs from "@/components/breadcrumbs/sercivesBreadcrumbs.vue"
import ContactForm from "@/components/contact/contactForm.vue"
import progressSection from "@/components/progressSection.vue"
import card from "@/components/shop/ProductsCard.vue"
import serviceCard from "@/components/services/card.vue"
import shopCartModal from "@/components/shop/shopCartModal.vue"
import checkoutSucess from "@/components/shop/checkoutSucess.vue"
import ProductsToast from "@/components/shop/ProductsToast.vue"

Vue.component("ProductsToast", ProductsToast)
Vue.component("shopCartModal", shopCartModal)
Vue.component("checkoutSucess", checkoutSucess)
Vue.component("card", card)
Vue.component("serviceCard", serviceCard)
Vue.component("ContactForm", ContactForm)
Vue.component("sercivesBreadcrumbs", sercivesBreadcrumbs)
Vue.component("servicesBeforeAndAfter", servicesBeforeAndAfter)
Vue.component("serviceCategories", serviceCategories)
Vue.component("servicesYoutubeVideo", servicesYoutubeVideo)
Vue.component("progressSection", progressSection)
