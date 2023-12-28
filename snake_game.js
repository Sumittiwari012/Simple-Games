let b1=document.getElementsByClassName("1");
let val=0;
let end=0;
let pval=0;
let path=[]
path[0]=0;
let t;
b1[0].style.cssText="background:red;";
function terminator(){
	for(let i=0;i<path.length;i++){
		if(val==path[i]) {
			end=1;
			break;
}
}	
}
function replacer(a){
	 let val2=a
	 for(let i=0;i<path.length;i++){
  	 	let val=path[i];
		path[i]=val2;
		val2=val;
}
}
function valset(val){
	if(val==1){ path.unshift(val);}
	else{ replacer(val);}
}
function color(val){
	b1[val].style.cssText="background:red;";
	terminator();
	b1[path[(path.length)-1]].style.cssText="background:none;";
	valset(val);
}
function logic(a){
	if(a==39 && (val+1)%4!=0){
		val++;
		color(val);	
}
	else if(a==37 && (val-1)%4!=3 && (val-1)>=0){
		val--;
		color(val);
		
}
	else if(a==38 && (val-4)>=0){
		val=val-4;
		color(val);		
}
	else if(a==40 && (val+4)<16){
		val=val+4;
		color(val);
}

	else{
		console.log("game over");
		end=1;
		clearInterval(t);
}
	
	console.log(path);
}
window.addEventListener('keyup', function in2(e) {
	if(end!=1){
	clearInterval(t);
        t= setInterval(logic,400,e.keyCode);
}
else{
	console.log("game over");
	clearInterval(t);
}
});