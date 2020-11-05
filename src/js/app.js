// Choose language
try{
  (function(){
    const lang = document.querySelector('.lang');
    const mainLang = document.querySelector('.main-lang');
    const langList = document.querySelector('.lang-list');
    const langListItems = [...document.querySelectorAll('.lang-list__item')];

    mainLang.addEventListener('click', e => langList.classList.toggle('active'));

    langListItems.forEach(item => {
      item.addEventListener('click', e => {
        mainLang.querySelector('img').src = item.querySelector('img').src;
        mainLang.querySelector('.lang-name').textContent = item.querySelector('.lang-name').textContent;
        langList.classList.remove('active');
      });
    });

    lang.addEventListener('click', e => e.stopPropagation());

    document.body.addEventListener('click', e => langList.classList.remove('active'));
  })();
}catch(err){console.log(err);}