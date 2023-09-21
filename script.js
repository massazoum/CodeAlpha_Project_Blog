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
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(function(){
		}, 3500);
	}, 5500);
});

const cardData = [
    {   header:'Precision medicine',
        photo: 'https://th.bing.com/th/id/OIP.Ma1Fi6F9iwvHpOZJTGcakAAAAA?pid=ImgDet&w=454&h=400&rs=1',
        description: 'AI is used to produce personalized treatment plans for patients that take into account such factors as their medical history, environmental factors, lifestyles, and genetic makeup. ',
        img2: 'https://th.bing.com/th/id/OIP.vzZ0dRnc2bUmmkPOXsXDvQHaEK?pid=ImgDet&rs=1',
    },
    {   header:'Predict diseases and illness',
        photo: 'https://th.bing.com/th/id/OIP.vFnMtRXjmeFQ3ErGJn_QtQHaHa?pid=ImgDet&w=800&h=800&rs=1',
        description: 'AI is used to produce personalized treatment plans for patients that take into account such factors as their medical history, environmental factors, lifestyles, and genetic makeup. ',
        img2: 'https://th.bing.com/th/id/OIP.L9v6EWqhzLPraAwQfSapcgAAAA?pid=ImgDet&rs=1',
    },
    {
        header:'Interpret tests and diagnose diseases',
        photo: 'https://th.bing.com/th/id/OIP.FBlzHZEPbG_ZUkyu6NIY9QHaEK?pid=ImgDet&rs=1',
        description: ' ML models can be trained using common medical scans, like MRIs or X-rays, to interpret and diagnose such conditions as cancerous lesions.',
        img2: 'https://th.bing.com/th/id/OIP.v0O034YVg66hkRkr2gVL1AHaEj?pid=ImgDet&rs=1',
    }
];

cardData.forEach(data=> {

    const card = document.createElement('div');
    card.classList.add('father');

    const front = document.createElement('div');
    front.classList.add('front');
    front.innerHTML = `
        <header>${data.header}</header>
        <div class="headerimg"><img src="${data.photo}" alt=""></div>
        <p>${data.description}</p>
    `;

    const back = document.createElement('div');
    back.classList.add('back');
    back.innerHTML = `
        <div class="headerimg1"><img src="${data.img2}" alt=""></div>
    `;

    card.appendChild(front);
    card.appendChild(back);
    cardContainer.appendChild(card);
})
