const express=require('express')
const app = express()
const bodyParser=require('body-parser')
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

let index=require('./routes/index')
let teachers=require('./routes/teacher')
let subjects=require('./routes/subject')
let students=require('./routes/student')

app.use('/',index)
app.use('/teachers',teachers)
app.use('/subjects',subjects)
app.use('/students',students)

app.listen(8002,function(){
  console.log('App listening on port 8002!!!')
})
