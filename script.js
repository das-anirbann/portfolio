var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
         }
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

function toggleDescription(button){
    const box = button.parentElement;
    const fullText = box.querySelector(".full-text");

    if (fullText.style.display === "none" || fullText.style.display === "") {
        fullText.style.display = "block";
        button.textContent = "Show less";
    } else {
        fullText.style.display = "none";
        button.textContent = "Learn more";
    }
}

function openpopup(id){
    document.getElementById(`popup-${id}`).style.display = "flex";
    document.body.classList.add("popup-active");
}
function closepopup(id) {
    document.getElementById(`popup-${id}`).style.display = "none";
    document.body.classList.remove("popup-active");
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbynk-hBRHj0NBkRk-4xN0eOv1ZibTsSaZ7CdDpz7hmqiOafyTfYmSyrf9zL0AtDWPmi/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
