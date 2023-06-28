new Vue({
  data: {
    results: []
  },
  created() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        this.results = data;
      });
  }
})
