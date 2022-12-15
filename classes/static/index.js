async function getCandy(){
    const titleElem = document.getElementById("Name");
    const artistElem = document.getElementById("type");
    try {
        //await and fetch the data from the database
        const response = await fetch('http://localhost:8080/candy/all')
        //await and parse the response into a JavaScript Object
        const responseJSON = await response.json(); 
        //responseJSON is an array of data, use index to indicate which one to use
        titleElem.innerHTML = `${responseJSON[1].name}`;
        artistElem.innerText = `${responseJSON[1].type}`;
    }
 
    catch (e){
        console.log(e)
    }
}

getCandy();

document.getElementById("myBtn").addEventListener("click", function() {
    alert("Thank you for the response!");
  });