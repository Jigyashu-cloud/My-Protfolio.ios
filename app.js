const sections = document.querySelectorAll('.section');
const sectBTns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allsections = document.querySelectorAll('.main-content');

function PageTransitions() {
    // button click active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', () => {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            secBtn[i].className += ' active-btn';
        });
    }
    //sections active
    allsections.forEach((section) =>{
    section.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBTns.forEach((btn) =>{
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            //hide other section
            sections.forEach((section) =>{
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
  });

  //toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle('light-mode')
  })
}

PageTransitions();