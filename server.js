const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const multer = require("multer");
const path = require("path")//this has original name fro the file


//middleware(app.use and app.set to set vies engine)
    app.use(express.json());
    app.use(cors());

    app.set("view engine", "ejs")

//multer
    const storage = multer.diskStorage(
        {
            destination:(req,file,cb)=>{
                cb(null,"images/")//the first is the request and the second is the file and this is in the destination 
            },
            filename:(req,file,cb)=>{
                cb(null,Date.now() + path.extname(file.originalname) )//path is a module and extname is a property and the file name origin name is fromothe multer module
            }
        }
    );

    const upload = multer({storage:storage});




//post
app.post("/travelers", upload.single("pic"), async(req,res)=>{
    try {
        const {name,bags,destination,origin} = req.body
        const {pic} = req.file

        const newData = await pool.query(
            "INSERT INTO travelers(name,bags,destination,origin,pic) VALUES($1,$2,$3,$4,$5) RETURNING * ",
            [name,bags,destination,origin,pic]
        )

        res.json(newData.rows[0])
        console.log("work")
    } catch (error) {
        console.log(error)
    }
} );

app.post("/users",upload.single("uimage"), async (req,res)=>{
    try {
        const {uname,ubags,udestination,uorigin} = req.body
        const {uimage} = req.file

        const newData = await pool.query(
            "INSERT INTO users(name,bags,destination,origin,pic) VALUES($1,$2,$3,$4,$5) RETURNING *",
            [uname,ubags,udestination,uorigin,uimage]
        );
        res.json(newData.rows[0]) // the resjson send the query as some json to be parsed
        console.log("you")
    } catch (error) {
        console.log(error)
    }
})
app.listen(5000,()=>{
    console.log("checkers")
})