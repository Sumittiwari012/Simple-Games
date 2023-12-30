var elm = document.getElementById("pa");
let val_inp = document.getElementById("inp");
let valg;
let div1;
let val=0;
let end=1;
let pval=0;
let tf;
let path=[]
path[0]=0;
let t;
let b1;
console.log(elm.offsetWidth);
console.log(elm.offsetHeight);
val_inp.addEventListener('change',function(){
	if(elm.hasChildNodes()){
		elm.innerHTML='';
}
	 valg=(val_inp.value);
	for(let i=0;i<valg*valg;i++){
		div1=document.createElement('div');
    		div1.className="ch";
		div1.style.width=elm.offsetWidth/(1.1*valg)+'px';
		elm.append(div1);
}
b1=document.getElementsByClassName("ch");
end=0;
val=0;
path=[];
path[0]=0;
tf=1;
})
function terminator(val){
	        tf=1
		for(let i=0;i<path.length;i++){
		if(val==path[i]) {
			end=1;
			tf=0;
			break;
}
}
	return tf;
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
	if(terminator(val)){
	console.log(path);
	b1[val].style.background="yellow";
	b1[val].style.borderRadius="40%";
	b1[path[(path.length)-1]].style.background="red";
	b1[path[(path.length)-1]].style.borderRadius="0%";
	valset(val);
}
}
function logic(a){
	if(tf!=0){
	if(a==39 && (val+1)%valg!=0 ) val++;
	else if(a==37 && (val-1)%valg!=valg-1 && (val-1)>=0) val--;
	else if(a==38 && (val-valg)>=0) val=val-valg;
	else if(a==40 && (valg-0+val)<(valg*valg)) val=valg-0+val;
}
	else{
		console.log("game over");
		end=1;
		clearInterval(t);
}
	color(val);
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
