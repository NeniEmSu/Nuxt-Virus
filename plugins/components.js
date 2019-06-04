import Vue from "vue";
import servicesYoutubeVideo from '~/components/services/servicesYoutubeVideo.vue'
import serviceCategories from '~/components/services/serviceCategories.vue'
import servicesBeforeAndAfter from '~/components/services/servicesBeforeAndAfter.vue'
import sercivesBreadcrumbs from '@/components/breadcrumbs/sercivesBreadcrumbs.vue'
import ContactForm from "@/components/contactForm.vue";
import progressSection from "@/components/progressSection.vue";
import toastTest from "@/components/toastTest.vue";
import card from "@/components/shop/card.vue";
import modalComponent from "@/components/shop/modalComponent.vue";


Vue.component("modalComponent", modalComponent)
Vue.component("card", card)
Vue.component("ContactForm", ContactForm)
Vue.component("toastTest", toastTest)
Vue.component("sercivesBreadcrumbs", sercivesBreadcrumbs)
Vue.component("servicesBeforeAndAfter", servicesBeforeAndAfter)
Vue.component("serviceCategories", serviceCategories)
Vue.component("servicesYoutubeVideo", servicesYoutubeVideo)
Vue.component("progressSection", progressSection)
