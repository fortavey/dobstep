if(document.querySelectorAll('.vue-object').length){
  let showMobile = true;
  let countPosts = 8;
  let increment = 4;

  if(window.innerWidth < 1000 && window.innerWidth > 700) {
    countPosts = 6;
    increment = 3;
  }

  if(window.innerWidth < 501)showMobile = false;

  const filter = new Vue({
    el: '.vue-object',
    data: {
      categories: JSON.parse(JSON.stringify(categories)),
      activePosts: JSON.parse(JSON.stringify(posts)),
      activeCategory: [],
      countPosts: countPosts,
      increment: increment,
      showMobile: showMobile
    },
    computed: {
      classOnAll(){
        return this.activeCategory.length ? '' : 'active';
      },
      choosenCat(){
        return this.activeCategory.length ? this.activeCategory[0].name : 'Все';
      }
    },
    methods: {
      addActiveCat(categoryObject){
        this.activeCategory = [];
        this.activeCategory.push(categoryObject);
        this.changePosts();
        if(window.innerWidth < 501) this.showMobile = false;
      },
      changeCatClass(categoryObject){
        return this.activeCategory.includes(categoryObject) ? 'active' : '';
      },
      clickOnAll(){
        const arr = this.activeCategory;
        arr.splice(0, arr.length);

        this.resetAll();
        if(window.innerWidth < 501) this.showMobile = false;
      },
      changePosts(){
        const postsIdArray = [];
        const objectArr = [];

        this.activeCategory.forEach(category => {
          const newArr = category.posts.filter(id => !postsIdArray.includes(id));
          postsIdArray.push(...newArr);
        });

        postsIdArray.forEach(id => {
          objectArr.push(JSON.parse(JSON.stringify(posts)).find(el => el.id === id));
        });

        this.activePosts = [];
        this.activePosts.push(...objectArr);

        if(!this.activeCategory.length) this.resetAll();
      },
      resetAll(){
        this.activePosts = [];
        this.activePosts.push(...JSON.parse(JSON.stringify(posts)));
      },
      addMore(){
        this.countPosts += this.increment;
      },
      onShowMobile(){
        this.showMobile = !this.showMobile;
      }
    },
    beforeMount(){
      const query = location.search;
      if(query && query.split('=')[0] == '?fCatID') {
        const id = parseInt(query.split('=')[1]);
        this.activeCategory.push(this.categories.find(el => el.id === id));
        this.changePosts();
      }
    },
  });
}