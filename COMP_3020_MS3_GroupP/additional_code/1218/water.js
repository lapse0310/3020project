const ramainWater = document.getElementById("water-taken");
const dailyRequire = document.getElementById("daily-pills");
const waterTaken = document.getElementById("addButton");
var glassesLeftBanner = document.getElementById("glasses-left");
let pic = document.querySelector(".pic");

if(localStorage.getItem("USER_WATER_GOAL")==null)
{
	localStorage.setItem("USER_WATER_GOAL", 10);
	localStorage.setItem("USER_WATER_TAKEN", 0);
}

dailyRequire.setAttribute('value', localStorage.getItem("USER_WATER_GOAL"));
ramainWater.setAttribute('value', localStorage.getItem("USER_WATER_TAKEN"));
glassesLeftBanner.innerHTML = (dailyRequire.value - ramainWater.value) + " glasses left";
if(((dailyRequire.value-1) - (ramainWater.value)) <= 0)
{
  pic.setAttribute("src", "10.jpg")
  glassesLeftBanner.innerHTML = "You have reached your water drinking goal!";
}
else if(localStorage.getItem("USER_WATER_TAKEN") != null)
{
  pic.setAttribute("src", localStorage.getItem("USER_WATER_TAKEN") + ".jpg")
}


////////////////////////////////////////////////////////////

  
  let picNo = document.querySelector(".picNo");

  let i = localStorage.getItem("USER_WATER_TAKEN");

  document.getElementById("addButton").addEventListener('click', 
  function(idx) {

	if(((dailyRequire.value-1) - (ramainWater.value)) == 1)
	{
		glassesLeftBanner.innerHTML = "just " + ((dailyRequire.value-1) - (ramainWater.value)) + " glass left!";
	}
  else if(((dailyRequire.value-1) - (ramainWater.value)) <= 0)
  {
    glassesLeftBanner.innerHTML = "You have reached your water drinking goal!";
  }
	else
	{
		glassesLeftBanner.innerHTML = ((dailyRequire.value-1) - (ramainWater.value)) + " glasses left!";
	}


    if (idx) {
      ramainWater.value ++;
	  localStorage.setItem("USER_WATER_TAKEN", ramainWater.value);

      if (i >= 10)
      {
        pic.setAttribute("src", "10.jpg")
        return;
      } 
      // i++;
      // else if (i+1 == dailyRequire.value) {
      //   pic.setAttribute("src", "10.jpg");
      //   picNo.innerHTML = i;
      // }
      else {
        if (dailyRequire.value==1) {
          i = 10;
        }
        else if (dailyRequire.value==2) {
          i += 5;
        }
        else if (dailyRequire.value==3) {
          i += 4;
        }
        else if (dailyRequire.value==4) {
          i += 3;
        }
        else if (dailyRequire.value==5) {
          i += 2;
        }
        else if (dailyRequire.value>5) {
          i ++;
          if(i == dailyRequire.value)
          {
            i = 10;
          }
        }

        // if (i >= 10) {
        //   window.alert("Congrats! You have reached your goal!");
        // }
      }
    }
    if (i >= 10) {
      window.alert("Congrats! You have reached your goal!");
      pic.setAttribute("src", "10.jpg");
      picNo.innerHTML = i;
    }
    else
    {
      pic.setAttribute("src", i+".jpg");
      picNo.innerHTML = i;
    }
  });

  ///////////////////

  function result(){
    let remaining = resultElement.innerText;
    resultElement.innerText = remaining;
  }




/////////////////////////////
