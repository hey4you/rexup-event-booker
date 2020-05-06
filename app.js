const eventsContainer = document.querySelector('.events-container')
const nav = document.querySelector('nav')
const welcomeEvent = document.querySelector('.welcome-event')
const form = document.querySelector('.form')

const showEvents = (event, id) => {
  const {name, attendee, status, description, email, booked} = event

  file = "img/coding.jpg"

  const eventStatus = status === 0 ? 'free': 'paid'
  const output = `
        <div class="card">
          <div class="card--details">
            <div>
              <h1>${name}</h1>
              <span>${attendee - booked} attendees</span>
            </div>
            <span class="card--details-ribbon ribbon-${eventStatus}">
                ${eventStatus}
            </span>
             <p>${description}</p>
             <a target="_blank" href="${file}">
             <img src="${file}" alt="EventImg" style="width:150px">
             </a>
            <button class="btn-email" onclick="setEmail('${email}')">${email}</button>
            <button onclick="bookEvent(${booked} ,'${id}')" class="btn btn-tertiary">Book</button>
          </div>
        </div>
        `
        eventsContainer.innerHTML += output;
}

const showLatestEvent = (latestEvent, id) => {
  
  const {name, attendee, status, description, booked} = latestEvent 
  // Get the first event
    welcomeEvent.innerHTML = `
    <h1>${name}</h1>
    <p>${description.length >= 100 ? `${description.substring(0, 100)}...` : description}</p>
    <div>
      <span>Attendees: ${attendee - booked}</span>
      <span>Status: ${status === 0 ? 'free': 'paid'}</span>
     </div>
     <button onclick="bookEvent(${booked} ,'${id}')" class="btn btn-tertiary">Book</button>
    `
}

const setEmail = (email) => {
 document.getElementById("selectEmail").innerHTML = "Send Email to: " + email;
 var jumpToEmail = document.getElementById("sendEmail");
 jumpToEmail.scrollIntoView();
}

const sendEmail = () => {
  Email.send({
    Host : "smtp.yourisp.com",
  })
  alert('Email has been send!')
}

const resetEmail = () => {
   form.name.emailName = "",
    form.attendee.userEmail = "",
    form.description.comment = ""
}

form.addEventListener('submit', e => {
  e.preventDefault(),
  addNewEvent()
})

window.onscroll = () =>  {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.style.background = 'var(--tertiary-color)';
    nav.style.boxShadow = '0 10px 42px rgba(25,17,34,.1)';
  } else {
    nav.style.background = 'none';
    nav.style.boxShadow = 'none';
  }
}
