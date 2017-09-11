const express=require('express')
const router =express.Router()
let model=require ('../models')

router.get('/',(req,res)=>{
  model.Teacher.findAll({include:[{model:model.Subject}]})
  .then(teachers=>{
    res.render('teacher',{data:teacher})
      // res.send(teachers[1])
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/addTeacher/',(req,res)=>{
  model.Subject.findAll()
  .then(subjects=>{
    res.render('addTeacher',{data:subjects})
  })
  .catch(err=>{
    res.render('addTeacher')
  })
})

router.post('/addTeacher/',(req,res)=>{
    model.Teacher.build({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.email,
      SubjectId:req.body.SubjectId,
      createdAt:new Date(),
      updatedAt:new Date()
    })
    .save()
      .then(teacher=>{
        res.redirect('/teacher')
      })
    })


module.exports=router
