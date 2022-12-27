window.addEventListener('scroll',function(){
	var scroll = this.document.querySelector('.upward');
	scroll.classList.toggle("active",this.window.scrollY>500)
})
function scrollTop
	{
		window.scrollTo({
			top:0,
			behavior:'smooth'
		})
	}