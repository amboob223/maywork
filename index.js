//travelers
const namee = document.getElementById("name");
const destination = document.getElementById("destination");
const originn = document.getElementById("origin");
const bags = document.getElementById("bags");
const pic = document.getElementById("pic"); 
const button = document.getElementById("btn");
const getusers = document.getElementById("getusers");
const tbody = document.querySelector("tbody")
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
getusers.addEventListener("click", async(event)=>{
    try {
        event.preventDefault()
    const data = await fetch("http://localhost:5000/users");
    const par = await data.json() // this is the parsing of the data we getting but we still got to do one more thing which is get the rows using .rows which is a node method to get the rows of the json object that contain the data we want to map through 
    const info = par.rows
        info.map((info)=>{
                //we want it to make elements for each row of infor form the json object
            const row = document.createElement("tr");
            const name = document.createElement("td");
            const bags = document.createElement("td");
            const origin = document.createElement("td");
            const destination = document.createElement("td")


            // now we got to populate the elemenets with info from the json object
            name.innerHTML = info.name
            bags.innerHTML = info.bags
            origin.innerHTML = info.bags
            destination.innerHTML = info.destination

            //append rows then append the row to tbody
            row.appendChild(name)
            row.appendChild(bags)
            row.appendChild(origin)
            row.appendChild(destination)

            tbody.appendChild(row) 
            console.log("work")
       })
    } catch (error) {
        console.log(error)
    }
});