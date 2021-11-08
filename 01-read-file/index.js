const fs = require('fs');
const path = require('path');
const fileTxt = path.join(__dirname, 'text.txt')

const stream = fs.createReadStream(fileTxt, { encoding: 'utf-8' })

stream.on(' data', function () {
  const data = stream.read();
  console.log(data)
})

