function solution(name, yearning, photo) {
    var answer = [];
const a = {};
    for( let i = 0 ; i <name.length ; i ++){
    a[name[i]] = yearning[i] ;    
        
    }
 return  photo.map((x)=>x.reduce((arr,cur) =>arr + (a[cur] ||0 ),0));
 
}