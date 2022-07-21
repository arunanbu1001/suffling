var a = document.querySelector(".syma")

var b = document.querySelector('.symb')

var c = document.querySelector('.symc')
 
var d = document.querySelector('.symd')
 
sf.addEventListener("click",sufle)
r=["A","B","C","D"]

function sufle(){
    var l=Math.floor((Math.random())*(r.length))
    
    var m=Math.floor((Math.random())*(r.length))
    var n=Math.floor((Math.random())*(r.length))
    var o=Math.floor((Math.random())*(r.length))
   // var previous=a
    
    
    
        
    function toFindDuplicates() {
        let arry = [l,m];
        let resultToReturn = false;
        // call some function with callback function as argument
        resultToReturn = arry.some((element, index) => {
            return arry.indexOf(element) !== index
        });
        if (resultToReturn) {
            while(resultToReturn = false){
            console.log('Duplicate elements exist');
             l=Math.floor((Math.random())*(r.length))
             m=Math.floor((Math.random())*(r.length))
             n=Math.floor((Math.random())*(r.length))
             o=Math.floor((Math.random())*(r.length))
             
            }
            }
            else {
             a.innerText=r[l];
            b.innerText=r[m];
                c.innerText=r[n];
                d.innerText=r[o];
                
                
                }
            }
    
            toFindDuplicates()
    


    // nm3.style.setProperty("color",r[s] );
    console.log(sf)
    //console.log(Math.floor(Math.random()*4))
}
