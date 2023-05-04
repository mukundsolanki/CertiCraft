const container = document.getElementById("input-cont");
let numInputs = 0;

function addInput() {
  if (numInputs < 8) {
    let input = document.createElement("input");
    input.placeholder = "Type something";
    input.setAttribute('class', 'fields px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent');
    // input,setAttribute('id','Mukund');
    container.appendChild(input);
    numInputs++;
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    window.location.href = "index.html";
  }
});


//DRAG AND DROP FUNCTIONALITIES

const dropArea = document.querySelector(".drag-image"),
dragText = dropArea.querySelector("h6"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; 

button.onclick = ()=>{
  input.click(); 
}

input.addEventListener("change", function(){
 
  file = this.files[0];
  dropArea.classList.add("active");
  viewfile();
});

dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});


dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
}); 

dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); 
   
  file = event.dataTransfer.files[0];
  viewfile(); 
});

function viewfile(){
  let fileType = file.type; 
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if(validExtensions.includes(fileType)){ 
    let fileReader = new FileReader(); 
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; 
       let imgTag = `<img src="${fileURL}" alt="image">`;
      dropArea.innerHTML = imgTag; 
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}