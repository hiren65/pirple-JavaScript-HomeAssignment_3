/*
* If Statements and Operators
*
*/
//check for Socrates variable
const Socrates = "man";
//below array is mortal list
const mortalList = ["man","tiger","apes","fish"];
//function for check mortality
/*
  1.first check Socrates is man or not
  2. then check weather value of variable Socrates value is in mortal mortalList
  3. if value is in mortalliat array then Socrates is mortal
*/
let mortalTest = function(item){

    if (mortalList.indexOf(item) > -1){
            for(let i=0;i<mortalList.length;i=i+1){
                if(mortalList[i]===item){
                  console.log(item + " is mortal \n");
                  break;
                }
                continue;
            }
    }else {
            console.log(item + " is not mortal not found in mortal list \n");
    }
}

mortalTest(Socrates);


//second Extra assignment
//here in flavour function there are two bullion variablr chocolate and venilla
//if venilla is true than cocolate goes false and vice versa


var myItem = "cake";
let vanilla = true;
let chocolate = false;
let flavour = function(item){
  if(vanilla){
    chocolate = false;
    console.log("This " + item + " is not chocolate. \n");
    console.log("Therefore this "+item + " is vanilla \n");
  }else if (chocolate){
    vanilla = false;
    console.log("This " + item + " is  chocolate. \n");
    console.log("Therefore this "+item + " is not vanilla \n");
  }
}
flavour(myItem);
