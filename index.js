//travelers
const namee = document.getElementById("name");
const destination = document.getElementById("destination");
const originn = document.getElementById("origin");
const bags = document.getElementById("bags");
const pic = document.getElementById("pic"); 
const button = document.getElementById("btn");
const getusers = document.getElementById("getusers");

//users
//event

button.addEventListener("click", async(event)=>{
    try {
        event.preventDefault()
    //now we got to use the form data objext to makew the form since we got file and form data 
    const body = new FormData()
        body.append("name",namee.value)
        body.append("destination",destination.value)
        body.append("origin",originn.value)
        body.append("bags",bags.value)
        body.append("pic",pic.files[0]) // remember to do files it workls with the form data object to give you the files in a the form data  here 

    const response = await fetch("http://localhost:5000/travelers",
    {
        method:"POST",
        body:body
    })
    } catch (error) {
      console.log(error) 
    }
});

//event