const express=require('express')
const app = express()
const bodyParser=require('body-parser')
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

let index=require('./routes/index')
let teacher=require('./routes/teacher')
let subject=require('./routes/subject')
let student=require('./routes/student')

app.use('/',index)
app.use('/teacher',teacher)
app.use('/subject',subject)
app.use('/students',student)

app.listen(8002,function(){
  console.log('App listening on port 8002!!!')
})
