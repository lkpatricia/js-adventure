//teeny tiny adventure game (my first JavaScript) 
var userName=prompt("Choose a name for your character.").toLowerCase(); 
var character=prompt("Hello, "+userName.charAt(0).toUpperCase()+userName.substr(1,userName.length)+". Let's build your character. Is "+userName.charAt(0).toUpperCase()+userName.substr(1,userName.length)+" FAST or STRONG?").toLowerCase(); 
var user=prompt(userName.charAt(0).toUpperCase()+userName.substr(1,userName.length)+", you are standing on a road to TOWN. There is a HOUSE on your left and a SCHOOL on your right. Choose HOUSE, TOWN, or SCHOOL to explore.").toLowerCase(); 
var randomLuck=function () {
    return Math.floor((Math.random()*100)+1); 
};

switch(user) {    
	case 'house':        
		luck=randomLuck();        
		if (luck<33 && character!="strong") {
			alert("oooh, sorry dude.  you have bad luck and weren't strong enough. you just died. sorry I didn't warm you about that troll.");
		}        
		else if (luck<67 || character=="strong") {
			alert("dude, look out! there is a troll. you escape with most of your face intact.");
		}        
		else
			alert("fortune smiles on you today.  there is no danger and you find gold treasure in the kitchen.");
		break;
	case 'town':
		luck=randomLuck();
		if (luck<33 && character!="fast") {
			alert("ouch, sorry dude.  you have bad luck and you are not fast enough. you were hit by a bus.  you are dead.");
		}
		else if (luck<67 || character=="fast") {
			alert("dude, look out! there is a bus on the road. you escape with a broken foot.");
		}
		else
			alert("fortune smiles on you today.  there is no danger.  you make it to town and drink a beer at the local watering hole.");
		break;
	case 'school':
		luck=randomLuck();
		if (luck<33 && character!="fast") {
			alert("um...didn't you see that ax murderer?! dude, you are so dead. hopefully your next character will be faster.");
		}
		else if (luck<67 || character=="fast") {
			alert("dude, look out! there is an ax murderer in the school! you escape with a close shave.");
		}
		else
			alert("fortune smiles on you today.  there is no danger and you find your sensei.");
		break;
	default:
		console.log("I do not understand.");
}