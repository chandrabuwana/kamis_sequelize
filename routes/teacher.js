const express=require('express')
const router =express.Router()
let model=require ('../models')

router.get('/',(req,res)=>{
  model.Teacher.findAll({include:[{model:model.Subject}],
  order:[['id','ASC']]
})
  .then(teachers=>{
    res.render('teacher',{data:teachers})
     //res.send(teachers)
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/add',(req,res)=>{
  model.Subject.findAll()
  .then(data=>{
    res.render('addTeacher',{data:data})
  })
})

router.post('/add',(req,res)=>{
    model.Teacher.build({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.email,
      SubjectId:req.body.SubjectId,
      createdAt:new Date(),
      updatedAt:new Date()
    })
    .save()
      .then(student=>{
        res.redirect('/teacher')
      })
})

router.get('/delete/:id',(req,res)=>{
  model.Teacher.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(()=>{
    res.redirect('/teacher')
  })
})

router.get('/edit/:id',(req,res)=>{
  model.Teacher.findById(req.params.id)
  .then(teacher=>{
    model.Subject.findAll().then(subjects=>{
      res.render('teacheredit',{data:teacher,dataEdit:subjects})
    })
  })
})

router.post('/edit/:id',(req,res)=>{
  model.Teacher.update({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    SubjectId:req.body.SubjectId
  },{
    where:
    {id:req.params.id}
  })
  .then(teachers=>{
    res.redirect('/teacher')
  })
  .catch(err=>{
    res.send()
  })
})

module.exports=router
