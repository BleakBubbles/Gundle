let sortedGunList = ['38 Special', '3rd Party Controller', 'A.W.P.', 'AC-15', 'AK-47', 'AKEY-47', 'AU Gun', 'Abyssal Tentacle', 'Alien Engine', 'Alien Sidearm', 'Anvillain', 'BSG', 'Bait Launcher', 'Balloon Gun', 'Banana', 'Barrel', 'Bee Hive', 'Betrayer\'s Shield', 'Big Iron', 'Big Shotgun', 'Black Hole Gun', 'Blasphemy', 'Blooper', 'Blunderbuss', 'Bow', 'Boxing Glove', 'Brick Breaker', 'Bubble Blaster', 'Budget Revolver', 'Bullet Bore', 'Bullet', 'Bundle of Wands', 'Buzzkill', 'Cactus', 'Camera', 'Casey', 'Cat Claw', 'Chamber Gun', 'Charge Shot', 'Charmed Bow', 'Cobalt Hammer', 'Cold 45', 'Colt 1851', 'Com4nd0', 'Combined Rifle', 'Composite Gun', 'Compressed Air Tank', 'Corsair', 'Crescent Crossbow', 'Crestfaller', 'Crossbow', 'Crown of Guns', 'Dark Marker', 'Dart Gun', 'Deck4rd', 'Demon Head', 'Derringer', 'Devolver', 'Directional Pad', 'Disintegrator', 'Dragunfire', 'Dueling Laser', 'Dueling Pistol', 'Dungeon Eagle', 'Elephant Gun', 'Elimentaler', 'Evolver', 'Excaliber', 'Eye of the Beholster', 'Face Melter', 'Fightsabre', 'Finished Gun', 'Flame Hand', 'Flare Gun', 'Flash Ray', 'Fossilized Gun', 'Freeze Ray', 'Frost Giant', 'Gamma Ray', 'Gilded Hydra', 'Glacier', 'Glass Cannon', 'Grasschopper', 'Grenade Launcher', 'Grey Mauser', 'GuNNER', 'Gunbow', 'Gunderfury', 'Gungeon Ant', 'Gungine', 'Gunslinger\'s Ashes', 'Gunther', 'Gunzheng', 'H4mmer', 'Heck Blaster', 'Hegemony Carbine', 'Hegemony Rifle', 'Helix', 'Heroine', 'Hexagun', 'High Kaliber', 'Huntsman', 'Hyper Light Blaster', 'Ice Breaker', 'JK-47', 'Jolter', 'Klobbe', 'Knight\'s Gun', 'Kruller Glaive', 'Laser Lotus', 'Laser Rifle', 'Life Orb', 'Light Gun', 'Lil\' Bomber', 'Lower Case r', 'Luxin Cannon', 'M1', 'M16', 'M1911', 'MAC10', 'Machine Fist', 'Machine Pistol', 'Magic Lamp', 'Magnum', 'Mahoguny', 'Mailbox', 'Makarov', 'Makeshift Cannon', 'Marine Sidearm', 'Mass Shotgun', 'Mega Douser', 'Megahand', 'Microtransaction Gun', 'Mine Cutter', 'Molotov Launcher', 'Moonscraper', 'Mourning Star', 'Mr. Accretion Jr.', 'Mutation', 'Nail Gun', 'Old Goldie', 'Origuni', 'Particulator', 'Patriot', 'Pea Shooter', 'Phoenix', 'Pitchfork', 'Plague Pistol', 'Plunger', 'Polaris', 'Poxcannon', 'Proton Backpack', 'Prototype Railgun', 'Pulse Cannon', 'Quad Laser', 'RC Rocket', 'RPG', 'RUBE-ADYNE MK.II', 'RUBE-ADYNE Prototype', 'Rad Gun', 'Raiden Coil', 'Railgun', 'Rattler', 'Really Special Lute', 'Regular Shotgun', 'Robot\'s Left Hand', 'Robot\'s Right Hand', 'Rogue Special', 'Rubenstein\'s Monster', 'Rusty Sidearm', 'SAA', 'Sawed-Off', 'Science Cannon', 'Screecher', 'Serious Cannon', 'Shades\'s Revolver', 'Shell', 'Shellegun', 'Shock Rifle', 'Shotbow', 'Shotgrub', 'Shotgun Full of Hate', 'Shotgun Full of Love', 'Silencer', 'Siren', 'Skull Spitter', 'Sling', 'Slinger', 'Smiley\'s Revolver', 'Snakemaker', 'Sniper Rifle', 'Snowballer', 'Staff of Firepower', 'Starpew', 'Sticky Crossbow', 'Stinger', 'Stone Dome', 'Strafe Gun', 'Sunlight Javelin', 'Super Meat Gun', 'T-Shirt Cannon', 'Tangler', 'Teapot', 'Tear Jerker', 'Tetrominator', 'The Emperor', 'The Exotic', 'The Fat Line', 'The Judge', 'The Kiln', 'The Membrane', 'The Predator', 'The Scrambler', 'Thompson Sub-Machinegun', 'Thunderclap', 'Trank Gun', 'Trashcannon', 'Trick Gun', 'Trident', 'Triple Crossbow', 'Triple Gun', 'Turbo-Gun', 'Unfinished Gun', 'Unicorn Horn', 'VertebraeK-47', 'Void Core Assault Rifle', 'Void Core Cannon', 'Void Marshal', 'Void Shotgun', 'Vorpal Gun', 'Vulcan Cannon', 'Winchester Rifle', 'Winchester', 'Wind Up Gun', 'Witch Pistol', 'Wood Beam', 'Yari Launcher', 'Zilla Shotgun', 'Zorgun'];
let userGunList = ['38 Special', '3rd Party Controller', 'A.W.P.', 'AC-15', 'AK-47', 'AKEY-47', 'AU Gun', 'Abyssal Tentacle', 'Alien Engine', 'Alien Sidearm', 'Anvillain', 'BSG', 'Bait Launcher', 'Balloon Gun', 'Banana', 'Barrel', 'Bee Hive', 'Betrayer\'s Shield', 'Big Iron', 'Big Shotgun', 'Black Hole Gun', 'Blasphemy', 'Blooper', 'Blunderbuss', 'Bow', 'Boxing Glove', 'Brick Breaker', 'Bubble Blaster', 'Budget Revolver', 'Bullet Bore', 'Bullet', 'Bundle of Wands', 'Buzzkill', 'Cactus', 'Camera', 'Casey', 'Cat Claw', 'Chamber Gun', 'Charge Shot', 'Charmed Bow', 'Cobalt Hammer', 'Cold 45', 'Colt 1851', 'Com4nd0', 'Combined Rifle', 'Composite Gun', 'Compressed Air Tank', 'Corsair', 'Crescent Crossbow', 'Crestfaller', 'Crossbow', 'Crown of Guns', 'Dark Marker', 'Dart Gun', 'Deck4rd', 'Demon Head', 'Derringer', 'Devolver', 'Directional Pad', 'Disintegrator', 'Dragunfire', 'Dueling Laser', 'Dueling Pistol', 'Dungeon Eagle', 'Elephant Gun', 'Elimentaler', 'Evolver', 'Excaliber', 'Eye of the Beholster', 'Face Melter', 'Fightsabre', 'Finished Gun', 'Flame Hand', 'Flare Gun', 'Flash Ray', 'Fossilized Gun', 'Freeze Ray', 'Frost Giant', 'Gamma Ray', 'Gilded Hydra', 'Glacier', 'Glass Cannon', 'Grasschopper', 'Grenade Launcher', 'Grey Mauser', 'GuNNER', 'Gunbow', 'Gunderfury', 'Gungeon Ant', 'Gungine', 'Gunslinger\'s Ashes', 'Gunther', 'Gunzheng', 'H4mmer', 'Heck Blaster', 'Hegemony Carbine', 'Hegemony Rifle', 'Helix', 'Heroine', 'Hexagun', 'High Kaliber', 'Huntsman', 'Hyper Light Blaster', 'Ice Breaker', 'JK-47', 'Jolter', 'Klobbe', 'Knight\'s Gun', 'Kruller Glaive', 'Laser Lotus', 'Laser Rifle', 'Life Orb', 'Light Gun', 'Lil\' Bomber', 'Lower Case r', 'Luxin Cannon', 'M1', 'M16', 'M1911', 'MAC10', 'Machine Fist', 'Machine Pistol', 'Magic Lamp', 'Magnum', 'Mahoguny', 'Mailbox', 'Makarov', 'Makeshift Cannon', 'Marine Sidearm', 'Mass Shotgun', 'Mega Douser', 'Megahand', 'Microtransaction Gun', 'Mine Cutter', 'Molotov Launcher', 'Moonscraper', 'Mourning Star', 'Mr. Accretion Jr.', 'Mutation', 'Nail Gun', 'Old Goldie', 'Origuni', 'Particulator', 'Patriot', 'Pea Shooter', 'Phoenix', 'Pitchfork', 'Plague Pistol', 'Plunger', 'Polaris', 'Poxcannon', 'Proton Backpack', 'Prototype Railgun', 'Pulse Cannon', 'Quad Laser', 'RC Rocket', 'RPG', 'RUBE-ADYNE MK.II', 'RUBE-ADYNE Prototype', 'Rad Gun', 'Raiden Coil', 'Railgun', 'Rattler', 'Really Special Lute', 'Regular Shotgun', 'Robot\'s Left Hand', 'Robot\'s Right Hand', 'Rogue Special', 'Rubenstein\'s Monster', 'Rusty Sidearm', 'SAA', 'Sawed-Off', 'Science Cannon', 'Screecher', 'Serious Cannon', 'Shades\'s Revolver', 'Shell', 'Shellegun', 'Shock Rifle', 'Shotbow', 'Shotgrub', 'Shotgun Full of Hate', 'Shotgun Full of Love', 'Silencer', 'Siren', 'Skull Spitter', 'Sling', 'Slinger', 'Smiley\'s Revolver', 'Snakemaker', 'Sniper Rifle', 'Snowballer', 'Staff of Firepower', 'Starpew', 'Sticky Crossbow', 'Stinger', 'Stone Dome', 'Strafe Gun', 'Sunlight Javelin', 'Super Meat Gun', 'T-Shirt Cannon', 'Tangler', 'Teapot', 'Tear Jerker', 'Tetrominator', 'The Emperor', 'The Exotic', 'The Fat Line', 'The Judge', 'The Kiln', 'The Membrane', 'The Predator', 'The Scrambler', 'Thompson Sub-Machinegun', 'Thunderclap', 'Trank Gun', 'Trashcannon', 'Trick Gun', 'Trident', 'Triple Crossbow', 'Triple Gun', 'Turbo-Gun', 'Unfinished Gun', 'Unicorn Horn', 'VertebraeK-47', 'Void Core Assault Rifle', 'Void Core Cannon', 'Void Marshal', 'Void Shotgun', 'Vorpal Gun', 'Vulcan Cannon', 'Winchester Rifle', 'Winchester', 'Wind Up Gun', 'Witch Pistol', 'Wood Beam', 'Yari Launcher', 'Zilla Shotgun', 'Zorgun'];
var qualities = new Map();

qualities.set('D', 0);
qualities.set('C', 1);
qualities.set('B', 2);
qualities.set('A', 3);
qualities.set('S', 4);

let input = document.getElementById("guess-field");
let inputContainer = document.querySelector(".input");
let listBox = document.querySelector(".list");
let tileContainer = document.querySelector(".tile-container")
let valid = false;
let hasWon = false;
let gIndex = -1;

var lastSuggestionIndex = -1;
var sBoxHeight = 0;

input.onkeyup = function (e) {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  if (e.keyCode === 40 || e.keyCode === 38) {
    return;
  }
  removeElements();
  let src = '';
  for (let i of userGunList) {
    for (let gun of guns) {
      if (gun.name == i) {
        src = gun.src;
        break;
      }
    }
    //convert input to lowercase and compare with each string
    if (i.toLowerCase() === input.value.toLowerCase() && input.value != "") {
      displayNames(i, src, i.replaceAll(" ", "_"));
    }
    else if (
      i.toLowerCase().includes(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      valid = false;
      //create li element
      let list = document.createElement("div");
      let listItem = document.createElement("li");
      let imageItem = document.createElement("img");
      imageItem.classList.add('image-items');
      imageItem.setAttribute("src", src);
      imageItem.setAttribute("loading", "lazy");
      imageItem.style.width = '60px';
      imageItem.style.cursor = "pointer";
      imageItem.setAttribute("onclick", "displayNames('" + i + "', '" + src + "', '" + i.replaceAll(" ", "_") + "')");
      list.classList.add('list-container');
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "', '" + src + "', '" + i.replaceAll(" ", "_") + "')");
      //display the value in array
      const text = document.createTextNode(i);
      listItem.appendChild(text);
      list.appendChild(imageItem);
      list.appendChild(listItem);
      listBox.appendChild(list);
      let gicon = document.getElementById("gun-icon");
      gicon.setAttribute("src", "images/gun_icon.png");
      gicon.className = "input-icon";
      gicon.style.filter = "brightness(100)"
      document.querySelector(".wiki-link").setAttribute("href", "https://enterthegungeon.fandom.com/wiki/Guns");
    }
    else if (input.value == "") {
      let gicon = document.getElementById("gun-icon");
      gicon.setAttribute("src", "images/gun_icon.png");
      gicon.style.filter = "brightness(100)";
      gicon.className = "input-icon";
      valid = false;
      document.querySelector(".wiki-link").setAttribute("href", "https://enterthegungeon.fandom.com/wiki/Guns");
    }
  }
  lastSuggestionIndex = listBox.childElementCount - 1;
  sBoxHeight = listBox.clientHeight;
};

var sIndex = -1;
input.onkeydown = function (e) {
  //down key
  if (e.keyCode === 40) {
    if (sIndex === -1) {
      listBox.children.item(++sIndex).classList.add("hl");
    }
    else if (sIndex === lastSuggestionIndex) {
      listBox.children.item(sIndex).classList.remove("hl");
      sIndex = 0;
      listBox.children.item(sIndex).classList.add("hl");
    }
    else {
      listBox.children.item(sIndex).classList.remove("hl");
      listBox.children.item(++sIndex).classList.add("hl");
    }
    if (sIndex != -1) synchroniseSuggestionsBox();
  }
  //up key
  else if (e.keyCode === 38) {
    if (sIndex <= 0) {
      sIndex = lastSuggestionIndex;
      listBox.children.item(sIndex).classList.add("hl");
    }
    else {
      listBox.children.item(sIndex).classList.remove("hl");
      listBox.children.item(--sIndex).classList.add("hl");
    }
    if (sIndex != -1) synchroniseSuggestionsBox();
  }
  //enter key
  else if (e.keyCode === 13) {
    if (valid) {
      guess();
      input.value = "";
    }
    else {
      let choice = listBox.children.item(sIndex);
      let src = choice.children.item(0).getAttribute('src');
      let name = choice.children.item(1).textContent;
      displayNames(name, src, name.replaceAll(" ", "_"));
      choice.classList.remove(sIndex);
    }
  }
}
function synchroniseSuggestionsBox() {
  var sOffsetTop = listBox.children.item(sIndex).offsetTop, sHeight = listBox.children.item(sIndex).clientHeight;
  if (sOffsetTop + sHeight - listBox.scrollTop > sBoxHeight) {
    listBox.scrollTop = sOffsetTop + sHeight - sBoxHeight;
  }
  else if (listBox.scrollTop > sOffsetTop) {
    listBox.scrollTop = sOffsetTop;
  }
}

listBox.onmousedown = function (e) {
  e.preventDefault();
}

function displayNames(value, src, href) {
  input.value = value;
  removeElements();
  document.querySelector(".wiki-link").setAttribute("href", "https://www.enterthegungeon.fandom.com/" + href);
  let gicon = document.getElementById("gun-icon");
  gicon.setAttribute("src", src);
  gicon.style.filter = 'drop-shadow(2px 0 0 white)\ndrop-shadow(0 2px 0 white)\ndrop-shadow(-2px 0 0 white)\ndrop-shadow(0 -2px 0 white)';
  gicon.className = "gun-icon";
  sIndex = -1;
  valid = true;
}

inputContainer.addEventListener("focusin", (event) => {
  inputContainer.style.color = "#ffffff";
  inputContainer.style.outline = "4px solid white";
  Array.from(inputContainer.getElementsByTagName("img")).forEach((item) => {
    if(item.className == "input-icon") {
      item.style.filter = "brightness(100)";
    }
  })
});

inputContainer.addEventListener("focusout", (event) => {
  let items = document.querySelectorAll(".list-container");
  items.forEach((item) => {
    item.remove();
  })
  inputContainer.style.color = "#757575";
  inputContainer.style.outline = "4px solid #757575";
  Array.from(inputContainer.getElementsByTagName("img")).forEach((item) => {
    if(item.style.filter == "brightness(100)"){
      item.style.filter = "none";
    }
  })
});

/*document.querySelector(".input").focusin = function(e){
  console.log("yep");
  e.target.style.color = "#ffffff";
  e.target.style.outline = "4px solid white";
  e.target.getElementsByTagName("img").forEach((item) => {
    item.style.filter = "brightness(100)";
  })
}*/

/*document.querySelector(".input").focusout = function(e) {
  //clear all the items
  console.log("nope");
  let items = document.querySelectorAll(".list-container");
  items.forEach((item) => {
    item.remove();
  })
  e.target.style.color = "#757575";
  e.target.style.outline = "4px solid #757575";
  e.target.getElementsByTagName("img").forEach((item) => {
    item.style.filter = "none";
  })
}*/

function removeElements() {
  //clear all the items
  let items = document.querySelectorAll(".list-container");
  items.forEach((item) => {
    item.remove();
  })
}

function randomGun() {
  gIndex = Math.floor(Math.random() * sortedGunList.length);
  console.log(guns[gIndex].name);
}

function guess() {
  if (!valid) {
    return;
  }
  const name = input.value;
  let header = document.querySelector(".header-container");
  header.classList.add("fade");
  const rnGun = guns[gIndex];
  let html = "<div class = 'row'>";
  for (let gun of guns) {
    if (gun.name == name) {
      if (name == rnGun.name) {
        html += "<div class = 'tile correct'><img src='" + gun.src +"' title='" + name + "'/></div>";
        hasWon = true;
      }
      else {
        html += "<div class = 'tile incorrect'><img src='" + gun.src +"' title='" + name + "'/></div>";
      }
      if (qualities.get(gun.quality) - qualities.get(rnGun.quality) == 1) {
        html += "<div class = 'tile close down big'>" + gun.quality + "</div>";
      }
      else if (qualities.get(rnGun.quality) - qualities.get(gun.quality) == 1){
        html += "<div class = 'tile close up big'>" + gun.quality + "</div>";
      }
      else if (qualities.get(gun.quality) == qualities.get(rnGun.quality)) {
        html += "<div class = 'tile correct big'>" + gun.quality + "</div>";
      }
      else {
        html += "<div class = 'tile incorrect big'>" + gun.quality + "</div>";
      }
      if (gun.type == rnGun.type) {
        html += "<div class = 'tile correct small'>" + gun.type + "</div>";
      }
      else {
        html += "<div class = 'tile incorrect small'>" + gun.type + "</div>";
      }
      if (gun.magSize == rnGun.magSize) {
        html += "<div class = 'tile correct big'>" + (gun.magSize > 10000 ? "∞": gun.magSize.toString()) + "</div>";
      }
      else if (gun.magSize <= rnGun.magSize) {
        if (rnGun.magSize - gun.magSize <= 3){
          html += "<div class = 'tile close up big'>" + gun.magSize.toString() + "</div>";
        }
        else {
          html += "<div class = 'tile incorrect up big'>" + gun.magSize.toString() + "</div>";
        }
      }
      else if (gun.magSize >= rnGun.magSize) {
        if (gun.magSize - rnGun.magSize <= 3){
          html += "<div class = 'tile close down big'>" + (gun.magSize > 10000 ? "∞" : gun.magSize.toString()) + "</div>";
        }
        else {
          html += "<div class = 'tile incorrect down big'>" + (gun.magSize > 10000 ? "∞" : gun.magSize.toString()) + "</div>";
        }
      }
      if (gun.ammoCap == rnGun.ammoCap) {
        html += "<div class = 'tile correct big'>" + (gun.ammoCap > 10000 ? "∞": gun.ammoCap.toString()) + "</div>";
      }
      else if (gun.ammoCap <= rnGun.ammoCap) {
        if (rnGun.ammoCap - gun.ammoCap <= 20){
          html += "<div class = 'tile close up big'>" + gun.ammoCap.toString() + "</div>";
        }
        else {
          html += "<div class = 'tile incorrect up big'>" + gun.ammoCap.toString() + "</div>";
        }
      }
      else if (gun.ammoCap >= rnGun.ammoCap) {
        if (gun.ammoCap - rnGun.ammoCap <= 20){
          html += "<div class = 'tile close down big'>" + (gun.ammoCap > 10000 ? "∞": gun.ammoCap.toString()) + "</div>";
        }
        else {
          html += "<div class = 'tile incorrect down big'>" + (gun.ammoCap > 10000 ? "∞": gun.ammoCap.toString()) + "</div>";
        }
      }
      if (gun.damage == rnGun.damage) {
        html += "<div class = 'tile correct big'>" + gun.damage.toString() + "</div>";
      }
      else if (gun.damage <= rnGun.damage) {
        if (rnGun.damage - gun.damage <= 5){
          html += "<div class = 'tile close up big'>" + gun.damage.toString() + "</div>";
        }
        else {
          html += "<div class = 'tile incorrect up big'>" + gun.damage.toString() + "</div>";
        }
      }
      else if (gun.damage >= rnGun.damage) {
        if (gun.damage - rnGun.damage <= 5){
          html += "<div class = 'tile close down big'>" + gun.damage.toString() + "</div>";
        }
        else {
          html += "<div class = 'tile incorrect down big'>" + gun.damage.toString() + "</div>";
        }
      }
      if (gun.fireRate == rnGun.fireRate) {
        html += "<div class = 'tile correct big'>" + gun.fireRate.toString() + "</div>";
      }
      else if (gun.fireRate <= rnGun.fireRate) {
        if (rnGun.fireRate - gun.fireRate <= 0.03){
          html += "<div class = 'tile close up big'>" + gun.fireRate.toString() + "</div>";
        }
        else {
          html += "<div class = 'tile incorrect up big'>" + gun.fireRate.toString() + "</div>";
        }
      }
      else if (gun.fireRate >= rnGun.fireRate) {
        if (gun.fireRate - rnGun.fireRate <= 0.03){
          html += "<div class = 'tile close down big'>" + gun.fireRate.toString() + "</div>";
        }
        else {
          html += "<div class = 'tile incorrect down big'>" + gun.fireRate.toString() + "</div>";
        }
      }
      if (gun.reloadTime == rnGun.reloadTime) {
        html += "<div class = 'tile correct big'>" + gun.reloadTime.toString() + "</div>";
      }
      else if (gun.reloadTime <= rnGun.reloadTime) {
        if (rnGun.reloadTime - gun.reloadTime <= 0.1){
          html += "<div class = 'tile close up big'>" + gun.reloadTime.toString() + "</div>";
        }
        else {
          html += "<div class = 'tile incorrect up big'>" + gun.reloadTime.toString() + "</div>";
        }
      }
      else if (gun.reloadTime >= rnGun.reloadTime) {
        if (gun.reloadTime - rnGun.reloadTime <= 0.1){
          html += "<div class = 'tile close down big'>" + gun.reloadTime.toString() + "</div>";
        }
        else {
          html += "<div class = 'tile incorrect down big'>" + gun.reloadTime.toString() + "</div>";
        }
      }
      html += "</div>"
      tileContainer.insertAdjacentHTML('afterbegin', html);
      const i = userGunList.indexOf(gun.name);
      if (i > -1){
        userGunList.splice(i, 1);
      }
      break;
    }
  }
  const row = document.querySelector(".row").children;
  Array.from(row).forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add('flip')
    }, 500 * index);
  }); 
}