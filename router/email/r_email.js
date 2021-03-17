var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var Email = require('../../model/schema');

//get back all the posts
router.get('/email_check', async (req, res) => {
   try {
      const email = await Email.find();
      res.json(email)
   } catch (err) {
      res.json({
         message: err
      })
   }
})

//submits a post
router.post('/email_check', async (req, res) => {

   const email = new Email({
      email: req.body.email,
      //date: Date.now() -> default
   });
   try {
      const responseData = await email.save();
      res.json(responseData);
   } catch (err) {
      res.json({
         message: err
      })
   }

})


//specific post
router.get('/email_check/:postId', async (req, res) => {
   try {
      const email = await Email.findById(req.params.postId);
      res.json(email)
   } catch (err) {
      res.json({
         message: err
      })
   }
});

//delete post
router.delete('/email_check/:postId', async (req, res) => {
   try {
      const removedEmail = Email.remove({
         _id: req.params.postId
      })
      res.json(removedEmail)
   } catch (err) {
      res.json({
         message: err
      })
   }
})

//update a post 
router.patch('/email_check/:postId', async (req, res) => {
   try {
      const updateEmail = await Email.updateOne({
         _id: req.params.postId
      }, {
         $set: {
            email: req.body.email
         }
      })
      console.log(updateEmail)
      res.json(updateEmail)
   } catch (err) {
      res.json({
         message: err
      })
   }
})




router.post('/post', (req, res) => {
   res.render(path.join(__dirname, '../../views/email.ejs'), {
      'email': req.body.email
   }) //data+html=>client
})

module.exports = router;