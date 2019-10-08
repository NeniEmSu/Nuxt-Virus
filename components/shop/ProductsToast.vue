<template>
  <div
    v-show="isActive"
    class="alert"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: { show: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  } },
  data () {
    return {
      isActive: !!this.show,
      activeTimeout: {}
    }
  },
  watch: {
    show (newVal) {
      this.isActive = !!newVal
    },
    isActive (newVal) {
      if (this.show !== !!newVal) {
        this.$emit('hide-toast', newVal)
      }
      this.setTimeout()
    }
  },
  mounted () {
    this.setTimeout()
  },
  methods: {
    setTimeout () {
      clearTimeout(this.activeTimeout)
      if (this.isActive) {
        this.activeTimeout = setTimeout(() => {
          this.isActive = false
        }, 2000)
      }
    }
  }
}
</script>

<style scoped>
.alert {
  width: auto;
  background-color: #25d41f;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
  position: fixed;
  z-index: 1041;
  border-radius: 20px;
  left: 50%;
  transform: translateX(-50%);
  top: 0vh;
}
</style>
