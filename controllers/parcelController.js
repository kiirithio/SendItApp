const mssql = require('mssql')
const config = require('../config/database')

const { v4: uuidv4 } = require('uuid');


async function createParcel (req,res){
    const{id, description, sender_number, receiver_number, start_location, end_location} = req.body
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id', uuidv4(id))
        .input('description', description)
        .input('sender_number', sender_number)
        .input('receiver_number', receiver_number)
        .input('start_location',  start_location)
        .input('end_location', end_location)
        .execute("createParcel")
        res.json("Parcel added successfully")

    } catch (err){
        console.log(err);
    }
}

async function getParcels (req,res){
    try{
        const pool = await mssql.connect(config)
        const result = await pool.request().execute("getParcels")
        res.json(result.recordset)
    } catch (err){
        console.log(err);
    }
}
async function getParcel (req,res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        const result1 = await pool.request()
        .input('id', id)
        .execute("getParcel")
        res.json(result1.recordset)

    } catch (err){
        console.log(err);
    }
}

async function updateParcel (req,res){
    const{description, sender_number, receiver_number, start_location, end_location} = req.body
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id',  id)
        .input('description',  description)
        .input('sender_number',  sender_number)
        .input('receiver_number',  receiver_number)
        .input('start_location', start_location)
        .input('end_location',  end_location)
        .execute("updateParcel")

        res.json("Parcel added successfully")

    } catch (err){
        console.log(err);
    }
}
async function deleteParcel (req,res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input("id",id)
        .execute("deleteParcel")
        res.json("Parcel deleted successfully")

    } catch (err){
        console.log(err);
    }
}

module.exports = {
    createParcel,
    getParcels,
    getParcel,
    updateParcel,
    deleteParcel
}