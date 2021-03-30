import React from "react"
import { Helmet } from "react-helmet"
import { render, Comment } from "minista"

const PageTop = () => {
  return render(
    <main>
      <Helmet>
        <title>トップページ</title>
      </Helmet>
      <Comment text="Comment Test" />
      <h1>TOP</h1>
    </main>
  )
}

export default PageTop
