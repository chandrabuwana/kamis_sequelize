const express=require('express')
const router =express.Router()
let model=require ('../models')

router.get('/',(req,res)=>{
  model.Subject.findAll()
  .then(subjects=>{
    res.render('subject',{data:subjects})
      // res.send(subjects)
  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports=router
