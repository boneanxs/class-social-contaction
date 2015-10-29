var classNameHelper={
	none:'none',//display:none
	contentWidth1:'contentWidth1',//ratingSection2出现时的高度
	contentWidth2:'contentWidth2',//ratingSection3出现时的高度
	fadeOut:'ratingSectionDisappear',//ratingSection消失时的动画
	fadeIn: 'ratingSectionAppear'//ratingSection出现时的动画
};//定义所需样式class
function loginInit(){
	var loginButton=document.getElementsByClassName('login')[0],
	registerButton=document.getElementsByClassName('register')[0];
	cancelButton=document.getElementById('cancel-btn');
	cancelButton.addEventListener('click',function(){window.location.href="file:///F:/school/class-social-contaction/login.html"},false);
	loginButton.addEventListener('click',function(){swapToSection('section1')},false);
	registerButton.addEventListener('click',function(){swapToSection('section2')},false);
}
function swapToSection(section){
	var sectionName,tempNode,contentWidth;
	switch(section){
		case 'section1':
			sectionName='ratingSection2';
			contentWidth=classNameHelper.contentWidth1;
		break;
		case 'section2':
			sectionName='ratingSection3';
			contentWidth=classNameHelper.contentWidth2;
		break;
	}
	tempNode=document.getElementById(sectionName);
	content=document.getElementById('content');
	ratingSection1=document.getElementById('ratingSection1');
	DOMhelp.cssjs('add',ratingSection1,classNameHelper.fadeOut);
	ratingSection1.addEventListener('animationend',function(){DOMhelp.cssjs('add',ratingSection1,classNameHelper.none);DOMhelp.cssjs('remove',tempNode,classNameHelper.none);},false);
	DOMhelp.cssjs('add',content,contentWidth);
	DOMhelp.cssjs('add',tempNode,classNameHelper.fadeIn);
}//登录注册切换
window.addEventListener('load',loginInit,false);