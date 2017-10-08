
//power
	const pow= function(base , n){
		if(n<=0) {
			return 1;
			}
	return base * pow(base, n-1) ;
	};
	
//triangle stars
	const star = function(s) {
         if (s <= 0) {
    return '';
    }
  return '*' + star(s - 1);
    };
    const space = function(p) {
         if (p <= 0) {
    return '';
    }
    return ' ' + space(p - 1);
    };
const final= function(x,y,z){
     	if (x <= 0) 
    return '';
	 console.log(space(z)+star(y));
	 final (x-1,y-2,z+1);
	};
const triangleStars = function(n) {
     final(n,2*n-1,0)};
  

 const a=function(b){ 
     if(b<=0){ 
	    return ""; } 
      return "* "+a(b-1);
     };
 //checkerboad
 
 const a1=function(n){ 
    if(n<=0){
		return ""; } 
      return " *"+a1(n-1); 
      };
 
 const fin =function(x,y,z){
	 if(x<=0){ 
	   return ""
	 ;}
     if(z%2===0){
	   console.log( a(y)); fin(x-1,y,z-1)
	 ;} 
      else{
		  console.log (a1(y)); fin(x-1,y,z-1); }
       };
 const checkerboard=function(n){
	 if(n%2===0){
		 fin(n,n,n); } 
     else{
		 console.log(a(n)); fin(n-1,n,n); } 
 };*/
 	const reverse=function(str){
		const index= str.length -1;
		const rev= function (str, index) { 
		     if (index<0) return "";
		return str[index] + rev(str, index -1) ;}
         return rev(str, index);
		};