import React from 'react'
/* import { number } from 'yup' */

function Header({increment}) {
    //biz app.js sasyisi artirttigimizda headerde guncelleniyor
    //gereksiz render sorun onune gecmek icin icin  React.memo(Header) KULLNIRIZ
    console.log("header component is re-render")
  return (
    <div>
      Header 
      <hr></hr>
      {/* <code>{JSON.stringify(number)}</code> */}
      <button onClick={increment}>Click</button>
    </div>
  )
}

export default React.memo(Header)
