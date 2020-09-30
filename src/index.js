function introspectionProvider (introspectionQuery) {
  return fetch('schema.json')
    .then((response) => {
      if (response.status !== 200) throw new Error(response)

      return response.text()
    })
    .then(JSON.parse)
    .then((data) => ({ data }))
    .catch((e) => {
      console.error('Something went wrong')
      console.error(e)
    })
}

GraphQLVoyager.init(document.getElementById('voyager'), {
  introspection: introspectionProvider
})
