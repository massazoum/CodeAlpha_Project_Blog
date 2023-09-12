const cardContainer = document.getElementById('cardContainer');


let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav'),
	 slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	// slowmo.dispatchEvent(clickEvent);
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(function(){
			// slowmo.dispatchEvent(clickEvent);
		}, 3500);
	}, 5500);
});

const cardData = [
    {   header:'Precision medicine',
        name: 'Precision medicine',
        description: 'AI is used to produce personalized treatment plans for patients that take into account such factors as their medical history, environmental factors, lifestyles, and genetic makeup. ',
        icons: ['room', 'contact_mail', 'person_add'],
        loveMessage: 'Created With Love From the World !',
    },
    {   header:'Predict diseases and illness:',
        name: 'Kouloughli Zaki',
        description: 'AI is used to produce personalized treatment plans for patients that take into account such factors as their medical history, environmental factors, lifestyles, and genetic makeup. ',
        icons: ['room', 'contact_mail', 'person_add'],
        loveMessage: 'Created With Love From the World !',
    },
    {
        header:'Interpret tests and diagnose diseases:',
        name: 'Kouloughli Zaki',
        description: ' ML models can be trained using common medical scans, like MRIs or X-rays, to interpret and diagnose such conditions as cancerous lesions.',
        icons: ['room', 'contact_mail', 'person_add'],
        loveMessage: 'Created With Love From the World !',
    }
];

cardData.forEach(data=> {

    const card = document.createElement('div');
    card.classList.add('father');

    const front = document.createElement('div');
    front.classList.add('front');
    front.innerHTML = `
        <header>${data.header}</header>
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <button type="submit" name="aterial"><i class="material-icons">More</i></button>
    `;

    const back = document.createElement('div');
    back.classList.add('back');
    back.innerHTML = `
        <header>Find Me On</header>
        <ul>
            ${data.icons.map(icon => `<li><a href="#"><i class="material-icons">${icon}</i></a></li>`).join('')}
        </ul>
        <p>${data.loveMessage}</p>
    `;

    card.appendChild(front);
    card.appendChild(back);
    cardContainer.appendChild(card);
})
