// Choose language
try{
  (function(){
    document.addEventListener('DOMContentLoaded', e => {
      const lang = document.querySelector('.lang');
      const langList = document.querySelector('.lang-list');
      const absoluteBlock = document.querySelector('.item-absolute');
      const currentLang = document.querySelector('.lang-item.current-lang a').getAttribute('lang');
      const mainLang = document.querySelector('.lang-list > .lang-list__item');

      mainLang.classList.remove('active');

      absoluteBlock.appendChild(mainLang);
      const activeLangElement = [...absoluteBlock.querySelectorAll('.lang-list__item')].find(el => el.dataset.lang === currentLang);

      activeLangElement.classList.add('active');
      langList.insertAdjacentElement('afterbegin', activeLangElement);

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

          const poli = item.dataset.lang;
          document.querySelector('a[lang=' + poli + ']').click();
        }
      })
    });
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

