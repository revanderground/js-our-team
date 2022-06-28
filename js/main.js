const team=[
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "img/angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "img/walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "img/angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "img/scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "img/barbara-ramos-graphic-designer.jpg "
    },
   
]

const teamWrapper = document.querySelector('.team-wrapper');

for (let i=0; i<team.length; i++){
    console.log(team[i]);

    let person= document.createElement('div');
    person.innerHTML= `<div class="card -100">
    <div class="card-body text-center">
    <h5 class="card-title">${team[i].nome}</h5>
      <p class="card-subtitle">${team[i].ruolo}</p>
    </div>
    <img src="${team[i].foto}"<class="card-img-top" alt="...">
  </div>` ;

  teamWrapper.append(person);
    
    
}