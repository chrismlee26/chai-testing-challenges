const express = require('express')
const router = express.Router();

const User = require('../models/user')
const Message = require('../models/message')

/** Route to get all messages. */
router.get('/', (req, res) => {
    // TODO: Get all Message objects using `.find()`

    Message.find({}).lean()
    .then(messages => {
        return {messages}
    })
    .catch(err => {
        console.log(err.message);
    })
})

/** Route to get one message by id. */
router.get('/:messageId', (req, res) => {
    // TODO: Get the Message object with id matching `req.params.id` using `findOne`
    Message.findOne(req.params.id)
    .then(message => {
        return{message}
    })
    .catch(err => {
        console.log(err.message)
    })
    // TODO: Return the matching Message object as JSON
})

/** Route to add a new message. */
router.post('/', (req, res) => {
    let message = new Message(req.body)
    message.save()
    .then(message => {
        return User.findById(message.author)
    })
    .then(user => {
        // console.log(user)
        user.messages.unshift(message)
        return user.save()
    })
    .then(() => {
        return res.send(message)
    }).catch(err => {
        throw err.message
    })
})

/** Route to update an existing message. */
router.put('/:messageId', (req, res) => {
    // TODO: Update the matching message using `findByIdAndUpdate`
    Message.findByIdAndUpdate(req.params.id)
    .then(message => {
        return{message}
    })
    .catch(err => {
        console.log(err.message)
    })
    // TODO: Return the updated Message object as JSON
})
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CHECK BELOW >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/** Route to delete a message. */
router.delete('/:messageId', (req, res) => {
    // TODO: Delete the specified Message using `findByIdAndDelete`. Make sure
    // to also delete the message from the User object's `messages` array
    Message.findByIdAndDelete(req.params.id)
    .them(user => {
        return User.findById(message.author)
    })
    .catch(err => {
        console.log(err.message)
    })
    // TODO: Return a JSON object indicating that the Message has been deleted
})

module.exports = router