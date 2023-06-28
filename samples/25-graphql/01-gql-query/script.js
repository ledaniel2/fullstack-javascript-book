const gqlQuery = `
  {
    user(id: 4) {
      name
      email
      friends {
        name
      }
    }
  }
`
