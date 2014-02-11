/**
 * @author Harry Stevens
 */
			/*
			 * The purpose of this program is to create a list of cookies with specific properties, 
			 * and from that list create two new lists, one of my favorites and one of the rest.
			 */
			
			/*
			 * First, I'll create a list of four cookies with properties "name" and "shape."
			 */
			var myCookies = [
				{"name":"Oreo","shape":"round"},
				{"name":"Chips Ahoy","shape":"round"},
				{"name":"Fig Newtons","shape":"square"},
				{"name":"Lorna Doone","shape":"square"}
			];
			
			/*
			 * Second, I'm going to create two empty lists, one called myFaves and one called theRest.
			 */
			var myFaves = [];
			var theRest = [];
			
			/*
			 * Third, I'm going to create this process: For every cookie in my list, check its shape.
			 * If square, add to myFaves; otherwise, add to theRest.
			 */
			for(var i=0; i<myCookies.length; i++){
				var currentCookie = myCookies[i];
				
				console.log("Cookie",i+1,currentCookie);//listing the cookies
				
				if(currentCookie.shape == "square"){
					console.log("This is a SQUARE cookie.");//making sure it knows the cookie is square
					myFaves.push(currentCookie);
				}else{
					console.log("This is a ROUND cookie");//making sure it knows the cookie is round
					theRest.push(currentCookie);
				}//end if
			}//end for
			
			//Checking the whole thing
			console.log(" ");
			console.log("Sorted cookies:");
			console.log("My favorite cookies:",myFaves);
			console.log("The other cookies:",theRest);