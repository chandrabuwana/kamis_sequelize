const express=require('express')
const router =express.Router()
let model=require ('../models')

router.get('/',(req,res)=>{
  model.Student.findAll()
  .then(students=>{
    res.render('students',{data:students})
      // res.send('subjects')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/',function(req,res){
  model.Student.build({
    first_name: req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    createdAt:new Date(),
    updateAt:new Date(),
  })
  .save()
    .then(student=>{
      // res.send(student)
      res.redirect('/students')
  })
})

router.get('/delete/:id',(req,res)=>{
  model.Student.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(()=>{
    res.redirect('/students')
  })
})

router.get('/edit/:id',(req,res)=>{
  model.Student.findAll({
    where:{ id:req.params.id
    }
  })
  .then(student=>{
    res.render('studentedit',{student:data[0],title:'halaman edit'})
  })
})

router.post('/edit/:id',(req,res)=>{
  model.Student.update({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email
  },{
    where:{id:req.params.id}
    })
      .then(data=>{
        res.redirect('/students')
      })
})


module.exports=router
