

// GCD (greatest common divisor of (a,b) )


function GCD(a,b){

	if((a%b)!=0){

		return GCD(b,(a%b))

	} else {

		return b
	}
 
}


// Is n prime? 


function pr(n){
	var i = 2

	if(n % i === 0){

		return false

	} else for(var j = 3; j < (n)^(.5); j=j+2) {
        if(n % j === 0) {
            return false
        }
    }
    return true
}


// nxn identity matrix

var identity=[]

function I(n){

	for(var i=0; i<=(n-1); i++){

		var ithColumn=[]

		for(var j=0; j<=(n-1); j++){


			if(i==j){

				ithColumn[j]=1

			}else{

				ithColumn[j]=0

			}

		}

		identity[i]=ithColumn
		
	}

	return identity

}








// Builds an array called 'primeArray' of prime numbers less than or equal to n.
//The number of primes less than n is 'primeCount'.


var primeArray=[2,3]

var primeCount=1


function primeList(n) {

	var j=1

	for(var i=5; i<=n; i=i+2){

		var divisor = false

		for(var k=1, divisor; (k<=j)&&(divisor==false); k++){

			if(i%primeArray[k]==0){

				divisor=true

			} else{

				divisor=false

			}

		}

		if(divisor==false){

			j++
			primeArray[j]=i

		}

	}

	primeCount = primeArray.length 

}


// Here begins my prime factorization function.  It stores each prime factor of value in 'primeVector', and 
// stores their corresponding powers in 'powerVector'.

var primeVector=[]
var powerVector=[]


function primeFactorization(value){


var primeVectorA=[]
var powerVectorA=[]


		

		var m=value
		var k=-1

		while(m>1){

			for(var d=2; d<=(m^.5); d++){

				var p = 0
				var divisor = false

				while(m%d==0){

					divisor=true
					p++
					m = m/d

				}
				 
				if(divisor==true){

					k++
					primeVectorA[k]=d
					powerVectorA[k]=p

				}

			}

		}

		primeVector=primeVectorA
		powerVector=powerVectorA

		var txt = "= "+primeVectorA[0]+"^"+powerVectorA[0]

		for(var t=1; t<=k; t++){

			txt = txt+"\xa0"+"  x  "+"\xa0"+primeVectorA[t]+"^"+powerVectorA[t]

			}		

		return txt
}


// returns all the letters of a string in alphabetical order


function alpha(string){


		var array = string.split("")

		var alphaArray = array.sort()

		var word = alphaArray.join("")

		return word

}

//tests if d is a divisor of m

function div(d,m){

	var bool=false

	if(m%d==0){

		bool=true
	}

	return bool

}


// computes the factors of a number n



function factorize(n){

	var factors=[]

	for(var i=1; i<=n; i++){

		if(n%i==0){

			factors.push(i)

		}

	}

	return factors

}



// computes n factorial recursively


function pi(n){

	if(n==0){

		return 1

	} else {

		return n*pi(n-1)

	}

}


// n choose k

function prob(){

	this.factorial=function(n){

		if(n==0){

			return 1

		} else {

			return n*pi(n-1)

		}

	},

	this.choose=function(n,k){

		return this.factorial(n)/(this.factorial(k)*this.factorial(n-k))

	}

}





// capitaizes the first letter in each word of a string

function caps(string){

	var upper = string.toUpperCase()

	var array = []

	array[0]=upper[0]


	for(var i=0; i<string.length; i++){


		if(string[i]==" "){

			array[i+1] = upper[i+1]

		} else {

			array[i+1]=string[i+1]

		}

	}

	var word = array.join("")

	return word

}

// counts the vowels in a string

function vowel(string){

	var vowels=["A","a","E","e","I","i","O","o","U","u"]

	var j=0

	for(var i=0; i<=string.length; i++){

		if(vowels.indexOf(string[i])==-1){


		}else{

			j++

		}

	}

	return j

}

// For a set S={0,1,2,...,n-1}, this finds all subsets of S of size k (but breaks around n=12).

setCountArray=[]

function setCount(k,n){

	if(k==1){

		var S=[]

		for(var i=0; i<n; i++){

			S[i]=[n-i-1]

		}

		setCountArray=S
		return S



		// [[n-1],[n-2],...,[0]]

	} else if(k==n){

		var S=[]

		for(var i=0; i<n; i++){

			S[i]=n-i-1

		}

		var T=[S]

		setCountArray=T

		return T



		// [[n-1,n-2,...0]]

	} else if(k<n){


		var V=[]

		var S=[]

		for(var i=0; i<n-1; i++){

			var U=[n-1].concat(setCount(k-1,n-1)[i])

			var T=[U]

			S=S.concat(T)

		}

		V=setCount(k,n-1)

		S=S.concat(V)

		setCountArray=S

		return S 

		// (n-1) + f(k-1,n-1) with f(k,n-1)

	} 


} 

//euler 443

function gee(n){

	if(n==1000000){

		return 2624152

	} else{

	return	gee(n-1)+GCD(n,gee(n-1)) 

	}

}


// pig latin

function pigLatin(word){

	var word1 = word.substring(1,word.length)

	var letter1 = word.substring(0,1)


	var pig = word1+letter1+"ay"

}


$(document).ready(function() {
	setTimeout(function() {
		$(".blueSquare").addClass("fadeInDown")
		$(".blueSquare").css("display", "block")
	}, 2000)
})






