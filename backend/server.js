const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
const b = process.env.mongopassword

const PORT = process.env.PORT;
mongoose.connect("mongodb://admin-gautam:"+b+"@cluster0-shard-00-00.tyokg.mongodb.net:27017,cluster0-shard-00-01.tyokg.mongodb.net:27017,cluster0-shard-00-02.tyokg.mongodb.net:27017/deskDB?ssl=true&replicaSet=atlas-gi71q1-shard-0&authSource=admin&retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {console.log("Succesfully connected with database");}).catch((err) => {
    console.log(err);
})

const bioSchema = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    address: String,
    contact: {
        type: Number,
        required: true,
        unique: true
    },
    registration: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}

const bioSchema1 = {
    name: {
        type: String,
        required: true
    },
    aadharNumber: {
        type : Number,
        unique : true,
        required : true
    },
    gender: {
        type : String,
        required : true
    },
    dob: {
        type : Date,
        required : true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    }
}

const bioSchema2 = {
    date: Date,
    description: String,
    report: String,
    attendedBy: String,
    aadhar: Number
}

const HealthDesk = new mongoose.model("HealthDesk",bioSchema);
const Userdatabase = new mongoose.model("Userdatabase",bioSchema1);
const Checkdetail = new mongoose.model("Checkdetail",bioSchema2);

app.post("/",async(req,res) => {
    const {name, email ,address, contact, registration, password} = req.body;

    if(!name || !email || !address || !contact || !registration || !password)
    {
        return res.status(422).json({error: "plz fill all the fields"});
    }

    try{
        const userexists = await HealthDesk.findOne({email :email});
        if(userexists)
        {
            return res.status(422).json({error: "Email already exists"});
        }
        const hospital = new HealthDesk({name, email ,address, contact, registration, password});
        const hospitalregister = await hospital.save();
        if(hospitalregister)
        {
            res.status(201).json({message: "Hospital Registered Successfully"});
        }

    }catch(err) {
        console.log(err);
    }
})

app.post("/hlogin",async(req,res) => {
    const {rnumber, password} = req.body;

    if(!rnumber || !password)
    {
        return res.status(422).json({error: "plz fill all the fields"});
    }

    try{
        const hospitalexists = await HealthDesk.findOne({registration :rnumber, password : password});
        if(hospitalexists)
        {
            // console.log(hospitalexists.name);
            // console.log(hospitalexists.contact);
            // console.log(hospitalexists.email);
            // console.log(hospitalexists.address);
            res.status(201).json({message: "Correct", name : hospitalexists.name, contact:hospitalexists.contact,address : hospitalexists.address, registration : hospitalexists.registration });
        }
        else 
        {
            res.status(422).json({message : "Incorrect password"});
        }
    }catch(err) {
        console.log(err);
    }
})

app.post("/addnewpatient",async(req,res) => {
    const {name,aadharNumber,gender,dob,bloodGroup,age} = req.body;

    if(!name || !aadharNumber || !gender || !dob || !bloodGroup || !age)
    {
        return res.status(422).json({error: "plz fill all the fields"});
    }

    try{
        const userexists = await Userdatabase.findOne({aadharNumber :aadharNumber});
        if(userexists)
        {
            return res.status(201).json({message: "Aadhar Number already exists"});
        }
        const patient = new Userdatabase({name, aadharNumber, gender, dob, bloodGroup, age});
        const Newpatient = await patient.save();
        if(Newpatient)
        {
            res.status(201).json({message: "Added patient Successfully"});
        }
    }catch(err) {
        console.log(err);
    }
})

app.post("/ulogin",async(req,res) => {
    const {anumber} = req.body;
    
    if(!anumber)
    {
        return res.status(422).json({error: "plz fill all the fields"});
    }
    try{
        const userexists = await Userdatabase.findOne({aadharNumber :anumber});
        if(userexists)
        {
            res.status(201).json({message: "/userdashboard",name: userexists.name, aadharNumber: userexists.aadharNumber, gender: userexists.gender, dob: userexists.dob, bloodGroup: userexists.bloodGroup, age: userexists.age});
        }
        else 
        {
            res.status(201).json({message: "/addpatient"});
        }
    }catch(err) {
        console.log(err);
    }
})

app.post("/newrecord",async(req,res) => {
    const {description,attendedBy,date,report,aadhar} = req.body;

    if(!description || !attendedBy || !date || !report || !aadhar)
    {
        return res.status(422).json({error: "plz fill all the fields"});
    }

    try{
        const userexists = await Userdatabase.findOne({aadharNumber :aadhar});
        if(userexists)
        {
            const patientreport = new Checkdetail({date,description,report,attendedBy,aadhar});
            const Newreport = await patientreport.save();
            if(Newreport)
            {
                res.status(201).json({message: "Added patient report Successfully"});
            }
        }
    }catch(err) {
        console.log(err);
    }
})


app.get("/getrecorddetails",async(req,res) => {
    try {
        const alldata = await Checkdetail.find({});
        res.status(201).json({message: "ok gautam",record: alldata});
    } catch (error) {
        console.log(error);
    }
})

app.post("/deleterecord",async(req,res) => {
    const {id} = req.body;
    try{
        await Checkdetail.deleteOne({_id: id});
        res.status(201).json({message: "Deleted"});
    }catch(err){
        console.log(err);
    }
})

app.post("/updaterecord",async(req,res) => {
    const {description,attendedBy,date,report,aadhar,id} = req.body;
    try {
        const userexists = await Checkdetail.findOne({_id : id});
        if(userexists) 
        {
            await Checkdetail.updateOne({date,description,report,attendedBy,aadhar})
            res.status(201).json({message : "Updated record"});
        }
    }catch(err) {
        console.log(err);
    }
})

app.listen(PORT,() => {
    console.log("desk server started...");
})
