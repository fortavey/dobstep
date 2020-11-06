// Choose language
try{
  (function(){
    const lang = document.querySelector('.lang');
    const langList = document.querySelector('.lang-list');
    const absoluteBlock = document.querySelector('.item-absolute');

    lang.addEventListener('click', e => {
      e.stopPropagation();

      document.body.addEventListener('click', e =>  lang.classList.remove('active'));

      lang.classList.toggle('active');

      const item = e.target.closest('.lang-list__item');
      const mainLang = document.querySelector('.lang-list > .lang-list__item');
      if(item && !item.classList.contains('active')) {
        mainLang.classList.remove('active');
        absoluteBlock.appendChild(mainLang);

        item.classList.add('active');
        langList.insertAdjacentElement('afterbegin', item);
      }
    })
  })();
}catch(err){console.log(err);}

// Save files
try{
  (function(){
    const btn = document.querySelector('.product-save');
    const chooseFormat = document.querySelector('.choose-format');

    btn.addEventListener('click', e => {
      chooseFormat.classList.add('active');
    });

    chooseFormat.addEventListener('click', e => {
      e.stopPropagation();
      chooseFormat.classList.remove('active');
    })
  })();
}catch(err){console.log(err);}

// Mobile choose category
try{
  (function(){
    if(document.querySelectorAll('.not-main-page').length){
      const list = document.querySelector('.not-main-page');
      const btn = document.querySelector('.mobile-filter-choosen');

      btn.addEventListener('click', e => list.classList.toggle('active'));
    }
  })();
}catch(err){console.log(err);}