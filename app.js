const express = require(`express`)
const app = express()
const mongoose = require(`mongoose`)  // 載入 mongoose

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config()
}
mongoose.set(`strictQuery`, false)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })   //設定連線到 mongoDB
const db = mongoose.connection

app.get(`/`, (req, res) => {
  res.send(`hello~`)
})
app.listen(3000, () => {
  console.log(`App is running on port 3000`)
})
db.on(`error`, () => {
  console.log(`mongodb error`)
})
db.once(`open`, () => {
  console.log(`mongodb connected`)
})