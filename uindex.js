
const users = document.getElementById("users");
const uname = document.getElementById("uname");
const ubags = document.getElementById("ubags");
const uorigin = document.getElementById("uorigin");
const uimage = document.getElementById("uimage");
const udestination = document.getElementById("udestination");
const gettrav = document.getElementById("gettrav");
const tbody =document.querySelector("tbody")
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

gettrav.addEventListener("click",async(event)=>{
    
    try {
        event.preventDefault()

    const data = await fetch("http://localhost:5000/travelers")
    const par = await data.json() // this is so we can parse 
    const zar = par.rows
    zar.map((info)=>{
            //we got to make the elemenets for each column
            const row = document.createElement("tr")
            const name = document.createElement("td")
            const bags = document.createElement("td")
            const origin = document.createElement("td")
            const destination = document.createElement("td")

                //we got to make the elements contain the info

                name.innerHTML = info.name

                bags.innerHTML = info.bags
                origin.innerHTML = info.origin
                destination.innerHTML = info.destination

            // then we got to append the new children to the row  and append the row to the 
                row.appendChild(name)  
                
                row.appendChild(bags)
                row.appendChild(origin)
                row.appendChild(destination)
        //then we got o append the row to the tbody 
                tbody.appendChild(row)

                console.log("work")
        })
    } catch (error) {
       console.log(error) 
    }
})