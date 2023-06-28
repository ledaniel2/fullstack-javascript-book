var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: () => {
      return this.message.split('').reverse().join('')
    }
  }
})
