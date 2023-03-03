class BackToTop {

  constructor() {
     this.link = document.querySelector(".js--back-top");
     this.activeClass = 'g--back-top-01--is-active';
     this.events();
  }

  events() {
      if(this.link){
          window.addEventListener("scroll",this.checkScroll.bind(this));
          this.link.addEventListener("click", this.goBackToTop.bind(this));
      }
  }

  checkScroll (){
      if(window.pageYOffset <= 500) {
          this.link.classList.remove(this.activeClass);
      } else{
          this.link.classList.add(this.activeClass);
      }
  }

  goBackToTop(e){
      e.preventDefault();
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
      });
  }
}
export default BackToTop;