Vue.component('counter', {
  data: () => {
    return {
      count: 0
    }
  },
  template: `
    <div>
      <span>{{ count }}</span>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  `,
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if(this.count > 0) {
        this.count--;
      }
    }
  }
})

new Vue({ el: '#app' })
