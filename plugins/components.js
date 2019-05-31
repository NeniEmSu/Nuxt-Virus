import Vue from "vue";
import servicesYoutubeVideo from '~/components/services/servicesYoutubeVideo.vue'
import serviceCategories from '~/components/services/serviceCategories.vue'
import servicesBeforeAndAfter from '~/components/services/servicesBeforeAndAfter.vue'
import sercivesBreadcrumbs from '@/components/breadcrumbs/sercivesBreadcrumbs.vue'
import ContactForm from "@/components/contactForm.vue";
import progressSection from "@/components/progressSection.vue";


Vue.component("ContactForm", ContactForm)
Vue.component("progressSection", progressSection)
Vue.component("sercivesBreadcrumbs", sercivesBreadcrumbs)
Vue.component("servicesBeforeAndAfter", servicesBeforeAndAfter)
Vue.component("serviceCategories", serviceCategories)
Vue.component("servicesYoutubeVideo", servicesYoutubeVideo)
