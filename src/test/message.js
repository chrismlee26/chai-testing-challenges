require('dotenv').config()
const app = require('../server.js')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert

const User = require('../models/user.js')
const Message = require('../models/message.js')

chai.config.includeStack = true

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

/**
 * root level hooks
 */
after((done) => {
    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
    mongoose.models = {}
    mongoose.modelSchemas = {}
    mongoose.connection.close()
    done()
})


describe('Message API endpoints', () => {
    beforeEach((done) => {
        // TODO: add any beforeEach code here
        // const sampleUser = new User({
        //     username: 'myuser',
        //     password: 'mypassword',
        //     id: SAMPLE_OBJECT_ID,
        // })
        // sampleUser.save()
        // .then(() => {

        // })
        done()
    })

    afterEach((done) => {
        // TODO: add any afterEach code here
        done()
    })

    it('should load all messages', (done) => {
        // TODO: Complete this
        // Matches get all messages in routes/message.js 
        chai.request(app)
            .get('/')
            .end((err, res) => {
                if(err) console.log(err)
                else {
                    expect(res.statusCode).to.be.a("number")
                    expect(res.statusCode).to.equal(200)
                    expect(res.body).to.be.a("array")
                    // test the number of messages in the array
                    // expect(res.body.length).to.equal(#)
                    // test the content of a test message
                    // expect(res.body[0]).to.equal('test)
                }
            })
        done()
    })

    it('should get one specific message', (done) => {
        // TODO: Complete this
        done()
    })

    it('should post a new message', (done) => {
        // TODO: Complete this
        done()
    })

    it('should update a message', (done) => {
        // TODO: Complete this
        done()
    })

    it('should delete a message', (done) => {
        // TODO: Complete this
        done()
    })
})
