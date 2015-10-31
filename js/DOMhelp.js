DOMhelp={
	cssjs:function(method,object,oldClassName,newClassName){
		switch(method){
			case 'check':
				var found=false;
				var classNameLists=object.className.split(' ');
				for (var i = 0; i < classNameLists.length; i++) {
					if (oldClassName===classNameLists[i]) {found=true};
				};
				return found;
			break;
			case 'add':
				if (!DOMhelp.cssjs("check",object,oldClassName)) {
					object.className+=object.className?' '+oldClassName:oldClassName;
					return true;
				};
				return false;
			break;
			case 'swap':
				if (!DOMhelp.cssjs('check',object,oldClassName)) {return false};
				object.className=object.className.replace(oldClassName,newClassName);
				return true;
			break;
			case 'remove':
				var rep=object.className.match(' '+oldClassName)?' '+oldClassName:oldClassName;
				object.className=object.className.replace(rep,'');
			break;
		}
	},
	cancelClick:function(e){
		if (window.event) {
			window.event.cancelBubble=true;
			window.event.returnValue=false;
		}
		if (e&&e.stopPropagation&&e.preventDefault) {
			e.stopPropagation();
			e.preventDefault();
		};
	}
};
