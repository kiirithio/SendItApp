const mssql = require('mssql')
const config = require('../config/database')

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {schemaLoginUser, schemaCreateUser, schemaForgotPassword} = require('../helpers/validation')


async function createUser (req,res){
    const{id, username, fullname, phone, email, password} = req.body
    
    const { error } = schemaCreateUser.validate(req.body)
    if (error)
        return res
            .status(400)
            .send({ success: false, message: error.details[0].message})
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id', uuidv4(id))
        .input('username', username)
        .input('fullname', fullname)
        .input('phone', phone)
        .input('email',  email)
        .input('password', bcrypt.hashSync(password,bcrypt.genSaltSync()))
        .execute("createUser")
        res.json("User added successfully")

    } catch (err){
        console.log(err);
    }
}

async function getUsers (req,res){
    try{
        const pool = await mssql.connect(config)
        const result = await pool.request().execute("getUsers")
        res.json(result.recordset)
    } catch (err){
        console.log(err);
    }
}
async function getUser (req,res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        const result1 = await pool.request()
        .input('id', id)
        .execute("getUser")
        res.json(result1.recordset)

    } catch (err){
        console.log(err);
    }
}

async function updateUser (req,res){
    const{username, fullname, phone, email, password} = req.body
    const id = req.params.id
    
    const { error } = schemaCreateUser.validate(req.body)
    if (error)
        return res
            .status(400)
            .send({ success: false, message: error.details[0].message})
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id',  id)
        .input('username',  username)
        .input('fullname',  fullname)
        .input('phone',  phone)
        .input('email', email)
        .input('password', bcrypt.hashSync(password,bcrypt.genSaltSync()))
        .execute("updateUser")

        res.json("User added successfully")

    } catch (err){
        console.log(err);
    }
}
async function deleteUser (req,res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input("id",id)
        .execute("deleteUser")
        res.json("User deleted successfully")

    } catch (err){
        console.log(err);
    }
}

async function loginUser (req, res){
    const {email, password} = req.body
    const { error } = schemaLoginUser.validate(req.body)
    if(error)
        return res
            .status(400)
            .send({ success: false, message: error.details[0].message})
    try{
        let pool = await mssql.connect(config)
        let {recordset} = await pool.request()
        .input('email', email)
        .input('password', password)
        .execute("loginUser")
        const user = recordset[0]

        if(!user) res.status(400).send({Message: "User does not exist"})

        const validpassword = await bcrypt.compare( password, user.password)
        if(!validpassword) return res.send('Invalid credentials')

        const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '10m'})
        res.send({user, token})
    } catch (err){
        console.log(err);
    }
}

async function forgotPassword (req, res){
    const {id, password} = req.body
    const { error } = schemaForgotPassword.validate(req.body)
    if(error)
        return res
            .status(400)
            .send({ success: false, message: error.details[0].message})
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id',  id)
        .input('password', bcrypt.hashSync(password,bcrypt.genSaltSync()))
        .execute("forgotPassword")

        res.json("Password changed successfully")

    } catch (err){
        console.log(err);
    }
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    loginUser,
    forgotPassword
}