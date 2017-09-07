const express=require('express')
const router =express.Router()
let model=require ('../models')

router.get('/',(req,res)=>{
  model.Teacher.findAll()
  .then(teachers=>{
    res.render('teacher',{data:teachers})
      // res.send(teachers)
  })
  .catch(err=>{
    res.send(err)
  })
})


// router.post('/',(req,res)=>{
//     modelTeacher.postInsert(req)
//     .then(teachers=>{
//         res.redirect('/teachers')
//     })
//       .catch(err=>{
//         res.send(err)
//       })
//   })

module.exports=router
