new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween:30,

  //pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
     0:{
        slidesPerView:1
     },
     768:{
        slidesPerView:2
     },
     1024:{
        slidesPerView:3
     },
  }
});

// Contact

// document.getElementById("contactForm").addEventListerner("submit",async function(event){
//    event.preventDefault();

//    const formMessage = document.getElementById("formMessage")
//    const data = {
//       name:document.getElementById('name').value,
//       email:document.getElementById('email').value,
//       message:document.getElementById('message').value
//    };

//    try{
//       formMessage.textContent="Sending...";
//       formMessage.style.color="white";

//       const response = await fetch("/send_email",{
//          method: "POST",
//          headers: {
//             "Content-Type": "application/json"
//          },
//          body: JSON.stringify(data)
//       });
//       let result;

//       try{
//          result = await response.json();
//       }catch(error){
//          throw new Error("Invalid JSON response");
//       }
//       if(result.success){
//          formMessage.textContent="Email Sent Successfully";
//          formMessage.style.color="green";
//          this.reset();
//       }else{
//          formMessage.textContent="Failed to Send email. Please try again."+result.error;
//          formMessage.style.color="red";
//       }

//    }catch(error){
//       formMessage.textContent="An error occured"
//       formMessage.style.color="red";
//    }
// });

// form.addEventListener('submit',(e)=>{
//     if(!sendMail()){
//         e.preventDefault() // check the form  is -> all inputs are valid
//     }
// })

// function sendMail(){
//    let parms={
//       name:document.getElementById("name").value,
//       email:document.getElementById("email").value,
//       message:document.getElementById("Message").value,
//       subject:document.getElementById("subject").value
//    }
   
//    emailjs.send("service_ndy965c","template_f3ofj1u",parms)
// }


