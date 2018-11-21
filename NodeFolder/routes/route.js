const express=require('express');
const router=express.Router();

const Contact=require('../model/contacts');

router.get('/contacts',(req,res,next)=>{
   Contact.find(function(err,contacts){
       res.json(contacts);
   })
});

router.post('/contact',(req,res,next)=>{
    
   let newContact=new Contact({
       first_name:req.body.first_name,
      last_name:req.body.last_name,
       phone_number:req.body.phone_number
   })


   newContact.save((err,contact)=>
{
    if(err){
    res.json({msg:'error while saving'});
    }else{
        res.json({msg:'successfully saved'});
    }
})

});

router.delete('/contact/:id',(req,res,next)=>{
    console.log(req.params.id);
   Contact.deleteMany({_id:req.params.id},function(err,result)
   {
       if(err){
       res.json(err);
       }else{
           res.json(result);
       }
   })
});




module.exports=router;