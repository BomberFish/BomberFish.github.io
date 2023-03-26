// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0

//stackoverflow weeee

document.getElementById("gradient-enabled").checked = true;

function calculate_age(birth_month, birth_day, birth_year) {
  today_date = new Date();
  today_year = today_date.getFullYear();
  today_month = today_date.getMonth();
  today_day = today_date.getDate();
  age = today_year - birth_year;

  if (today_month < birth_month - 1) {
    age--;
  }
  if (birth_month - 1 == today_month && today_day < birth_day) {
    age--;
  }
  return age;
}

function toggleGradient(checkbox) {
  if (checkbox.checked == true) {
    gradient.play()
    document.getElementById("gradient-canvas").style.display = "inline";
  } else {
    gradient.pause()
    document.getElementById("gradient-canvas").style.display = "none";
  }
}

document.getElementById("age").innerHTML =
  "🗓️ " + calculate_age(10, 22, 2008) + " years old";
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
if (dd == 22 && mm == 10) {
  var item = document.createElement("div");
  item.innerHTML = "🥳 It's my birthday!";
  var list = document.getElementById("list");
  list.appendChild(item);
}

// @license-end
