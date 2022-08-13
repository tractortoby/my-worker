import flag from 'country-code-emoji'

const template = cf => {
  const emoji = flag(cf.country) || '👋🏻'
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <h1>Hello there! You're connecting from ${cf.country} ${emoji}.</h1>
      </body>
    </html>
  `
}

export default template
