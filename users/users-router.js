const router = require('express').Router()


const db = require('./users-modal')


router.get('/', (req, res) => {
      db.find()
      
      .then(user => {
        const users = user.map(item => {
            return {
                username: item.username,
                id: item.id,
                role: item.role
            }
        })
          res.status(200).json(users)
      })
      .catch(err => {
          console.log(err)
          res.status(500).json({message: 'Something wrong in server'})
      })
})


router.post('/',  validateUser, (req,res) => {
    db.insert(req.body)
    .then( user => {
        res.status(201).json(user)
    })
    .catch( err => {
        console.log(err)
        res.status(500).json({message: "Something wrong with server"})
    })    
})

router.put('/:id', ValidateId, (req,res) => {
    db.update(req.user, req.body)
    .then( user => {
        res.status(201).json(user)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Sorry"})
    })
})

router.delete('/:id', ValidateId, (req ,res ) => {
    db.remove(req.params.id)
    .then( user => {
      res.status(200).json(4)
    })
    .catch(err => {
        res.status(500).json({message: "sorry"})
    })
})

function validateUser(req, res, next){
    const username = req.body.username

   if(!username) {
       res.status(404).json({message: "Please provide a username"})
    } else{
       db.findByUsername(username)
        .then(user => {
            if(user){
            res.status(404).json({message: "username already exists"})
            } else {
                next(); 
            }
            
        })
    } 
    
      
}

function ValidateId(req, res, next) {
db.findById(req.params.id)
  .then(user => {
    //   console.log(user)
      if(user) {
          req.user = user.id
          next()
      } else {
          res.status(400).json({message: "invalid user id"})
      }
  })
} 


module.exports = router;