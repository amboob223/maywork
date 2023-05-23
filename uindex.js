
const users = document.getElementById("users");
const uname = document.getElementById("uname");
const ubags = document.getElementById("ubags");
const uorigin = document.getElementById("uorigin");
const uimage = document.getElementById("uimage");
const udestination = document.getElementById("udestination");
const gettrav = document.getElementById("gettrav");

//event
users.addEventListener("click", async(e)=>{
    try {
        e.preventDefault()
         const body = new FormData();

        body.append("uname",uname.value)
        body.append("ubags",ubags.value)
        body.append("udestination",udestination.value)
        body.append("uorigin", uorigin.value)
        body.append("uimage",uimage.files[0]) // that files shhit comes from the fome data object and node and I thin the names habve top match here

        const response = await fetch("http://localhost:5000/users",
        {
            method:"POST",
           body:body
        })

        console.log("jjj")
    } catch (error) {
        console.log(error) 
    }
});
