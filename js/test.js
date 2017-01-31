var stringy = "1"


function adder(n){

	for(var i=1, stringI; i<n; i++){

		var num = ((i+1)%2)

		stringI = num.toString()

		stringy = stringy + stringI

	}

	return stringy
}



function divvy(n){

	arr=[]

	var k=-1

	for(var i=0; Math.pow(10,i)<n;i++){

			k++
	}

	m=n

	var j=0

	while(j<=k){

		t=m%10

		arr[j]=t

		m=(m-t)/10

		j++

		
	}

	return arr
}


function fib(n){

	var i=0
	var j=1
	var m

	for(var l = 0; l<=n; l++){

		m=i+j
		console.log(i+" + "+j+" = "+m)

		i=j
		j=m



	}


}



function checkCoupon(date){


	
	var month
	var day
	var year

	var mName = date[0]+date[1]+date[2]

	

	if( mName == "Jan"){

		month = 1

	} else if( mName == "Feb"){

		month = 2
	} else if(mName == "Mar"){

		month = 3
	} else if (mName == "Apr"){

		month = 4
	} else if (mName == "May"){

		month = 5 
	} else if (mName == "Jun"){

		month = 6
	}else if (mName == "Jul"){

		month = 7
	}else if (mName == "Aug"){

		month = 8
	}else if (mName == "Sep"){

		month = 9
	}else if (mName == "Oct"){

		month = 10
	}else if (mName == "Nov"){

		month = 11
	}else {mName =12}

	

	year = date[date.length-4]+date[date.length-3]+date[date.length-2]+date[date.length-1]

	if ( date[date.length-8]=""){

		day = date[date.length-7]

	} else {day = date[date.length-8]+date[date.length-7]}

	dateString = [year, month, day]

	return dateString

}

var reverse = []

var array = []

function stringer(string){

	for(var j=0; j<string.length; j++){

		array[j] = string[j]
	}

	for(var i = 0; i<string.length; i++){

		reverse[i] = array[array.length-i-1]

	}

	return array
	return reverse

	if(reverse==array){

		console.log ("true")

	} else { console.log("false")}
}


// lookup 'split' and 'reverse' and 'join'

var string

function palindrome(string){

	var boo=true

	for(var i=0; i<=string.length; i++){

		if(string[i]!=string[string.length-i-1]){

			boo=false
		} 

		// return string.length
	}



	return boo
}



