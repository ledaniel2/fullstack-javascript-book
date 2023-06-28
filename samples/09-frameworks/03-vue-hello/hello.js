Vue.component('hello', {
  props: ['name'],
  template: '<h1>Hello, {{ name }}</h1>'
})

// <hello name="World"></hello>
