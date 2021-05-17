import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"

const Home = () => {
  return render(
    <main>
      <Helmet>
        <title>HTML coding with minista</title>
      </Helmet>
      <h1>HTML coding with minista</h1>
      <h2>test</h2>
    </main>
  )
}

export default Home
