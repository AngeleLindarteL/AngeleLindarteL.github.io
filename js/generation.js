const eduContainer = document.querySelector('.edu-container');
let TittFragment = document.createDocumentFragment();

for (let i = 1; i <= 19; i++){
    let div = document.createElement("DIV");
    let img = document.createElement('IMG');
    let hov = document.createElement('DIV');
    let btnP = document.createElement('button');
    let clsBtn = document.createElement('button');
    const nRoute = `./img/certificates/${i}-min.jpg`;
    const rSRoute = `./img/certificates/${i}.jpg`;
    
    btnP.addEventListener('click', () => {
        let divSized = document.createElement('div');
        divSized.classList.add('max-size')
        clsBtn.addEventListener('click', () =>{
            document.querySelector('#education').removeChild(divSized)
            img.setAttribute('src', nRoute)
            div.appendChild(img)
        })
        img.setAttribute('src', rSRoute)
        divSized.appendChild(img)
        divSized.appendChild(clsBtn)
        document.querySelector('#education').appendChild(divSized)
    })
    btnP.classList.add('showBtn')
    hov.appendChild(btnP)
    hov.classList.add('eduHov')
    img.setAttribute('src', nRoute)
    div.appendChild(hov)
    div.appendChild(img)
    div.classList.add(`cer${i}`)
    div.classList.add('certf')
    div.classList.add('normalSize')
    TittFragment.appendChild(div)
}

eduContainer.appendChild(TittFragment)