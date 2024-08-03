import React from 'react'
import { number } from 'yup'

function Header() {
    //biz app.js sasyisi artirttigimizda headerde guncelleniyor
    //gereksiz render sorun onune gecmek icin icin  React.memo(Header) KULLNIRIZ
    console.log("header component is re-render")
  return (
    <div>
      Header -{number}
      <hr></hr>
      <code>{JSON.stringify(data)}</code>
    </div>
  )
}

export default React.memo(Header)
