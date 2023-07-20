let sortedGunList = ['38 Special', '3rd Party Controller', 'A.W.P.', 'AC-15', 'AK-47', 'AKEY-47', 'AU Gun', 'Abyssal Tentacle', 'Alien Engine', 'Alien Sidearm', 'Anvillain', 'BSG', 'Bait Launcher', 'Balloon Gun', 'Banana', 'Barrel', 'Bee Hive', 'Betrayer\'s Shield', 'Big Iron', 'Big Shotgun', 'Black Hole Gun', 'Blasphemy', 'Blooper', 'Blunderbuss', 'Bow', 'Boxing Glove', 'Brick Breaker', 'Bubble Blaster', 'Budget Revolver', 'Bullet Bore', 'Bullet', 'Bundle of Wands', 'Buzzkill', 'Cactus', 'Camera', 'Casey', 'Cat Claw', 'Chamber Gun', 'Charge Shot', 'Charmed Bow', 'Cobalt Hammer', 'Cold 45', 'Colt 1851', 'Com4nd0', 'Combined Rifle', 'Composite Gun', 'Compressed Air Tank', 'Corsair', 'Crescent Crossbow', 'Crestfaller', 'Crossbow', 'Crown of Guns', 'Dark Marker', 'Dart Gun', 'Deck4rd', 'Demon Head', 'Derringer', 'Devolver', 'Directional Pad', 'Disintegrator', 'Dragunfire', 'Dueling Laser', 'Dueling Pistol', 'Dungeon Eagle', 'Elephant Gun', 'Elimentaler', 'Evolver', 'Excaliber', 'Eye of the Beholster', 'Face Melter', 'Fightsabre', 'Finished Gun', 'Flame Hand', 'Flare Gun', 'Flash Ray', 'Fossilized Gun', 'Freeze Ray', 'Frost Giant', 'Gamma Ray', 'Gilded Hydra', 'Glacier', 'Glass Cannon', 'Grasschopper', 'Grenade Launcher', 'Grey Mauser', 'GuNNER', 'Gunbow', 'Gunderfury', 'Gungeon Ant', 'Gungine', 'Gunslinger\'s Ashes', 'Gunther', 'Gunzheng', 'H4mmer', 'Heck Blaster', 'Hegemony Carbine', 'Hegemony Rifle', 'Helix', 'Heroine', 'Hexagun', 'High Kaliber', 'Huntsman', 'Hyper Light Blaster', 'Ice Breaker', 'JK-47', 'Jolter', 'Klobbe', 'Knight\'s Gun', 'Kruller Glaive', 'Laser Lotus', 'Laser Rifle', 'Life Orb', 'Light Gun', 'Lil\' Bomber', 'Lower Case r', 'Luxin Cannon', 'M1', 'M16', 'M1911', 'MAC10', 'Machine Fist', 'Machine Pistol', 'Magic Lamp', 'Magnum', 'Mahoguny', 'Mailbox', 'Makarov', 'Makeshift Cannon', 'Marine Sidearm', 'Mass Shotgun', 'Mega Douser', 'Megahand', 'Microtransaction Gun', 'Mine Cutter', 'Molotov Launcher', 'Moonscraper', 'Mourning Star', 'Mr. Accretion Jr.', 'Mutation', 'Nail Gun', 'Old Goldie', 'Origuni', 'Particulator', 'Patriot', 'Pea Shooter', 'Phoenix', 'Pitchfork', 'Plague Pistol', 'Plunger', 'Polaris', 'Poxcannon', 'Proton Backpack', 'Prototype Railgun', 'Pulse Cannon', 'Quad Laser', 'RC Rocket', 'RPG', 'RUBE-ADYNE MK.II', 'RUBE-ADYNE Prototype', 'Rad Gun', 'Raiden Coil', 'Railgun', 'Rattler', 'Really Special Lute', 'Regular Shotgun', 'Robot\'s Left Hand', 'Robot\'s Right Hand', 'Rogue Special', 'Rubenstein\'s Monster', 'Rusty Sidearm', 'SAA', 'Sawed-Off', 'Science Cannon', 'Screecher', 'Serious Cannon', 'Shades\'s Revolver', 'Shell', 'Shellegun', 'Shock Rifle', 'Shotbow', 'Shotgrub', 'Shotgun Full of Hate', 'Shotgun Full of Love', 'Silencer', 'Siren', 'Skull Spitter', 'Sling', 'Slinger', 'Smiley\'s Revolver', 'Snakemaker', 'Sniper Rifle', 'Snowballer', 'Staff of Firepower', 'Starpew', 'Sticky Crossbow', 'Stinger', 'Stone Dome', 'Strafe Gun', 'Sunlight Javelin', 'Super Meat Gun', 'T-Shirt Cannon', 'Tangler', 'Teapot', 'Tear Jerker', 'Tetrominator', 'The Emperor', 'The Exotic', 'The Fat Line', 'The Judge', 'The Kiln', 'The Membrane', 'The Predator', 'The Scrambler', 'Thompson Sub-Machinegun', 'Thunderclap', 'Trank Gun', 'Trashcannon', 'Trick Gun', 'Trident', 'Triple Crossbow', 'Triple Gun', 'Turbo-Gun', 'Unfinished Gun', 'Unicorn Horn', 'VertebraeK-47', 'Void Core Assault Rifle', 'Void Core Cannon', 'Void Marshal', 'Void Shotgun', 'Vorpal Gun', 'Vulcan Cannon', 'Winchester Rifle', 'Winchester', 'Wind Up Gun', 'Witch Pistol', 'Wood Beam', 'Yari Launcher', 'Zilla Shotgun', 'Zorgun'];
let userGunList = ['38 Special', '3rd Party Controller', 'A.W.P.', 'AC-15', 'AK-47', 'AKEY-47', 'AU Gun', 'Abyssal Tentacle', 'Alien Engine', 'Alien Sidearm', 'Anvillain', 'BSG', 'Bait Launcher', 'Balloon Gun', 'Banana', 'Barrel', 'Bee Hive', 'Betrayer\'s Shield', 'Big Iron', 'Big Shotgun', 'Black Hole Gun', 'Blasphemy', 'Blooper', 'Blunderbuss', 'Bow', 'Boxing Glove', 'Brick Breaker', 'Bubble Blaster', 'Budget Revolver', 'Bullet Bore', 'Bullet', 'Bundle of Wands', 'Buzzkill', 'Cactus', 'Camera', 'Casey', 'Cat Claw', 'Chamber Gun', 'Charge Shot', 'Charmed Bow', 'Cobalt Hammer', 'Cold 45', 'Colt 1851', 'Com4nd0', 'Combined Rifle', 'Composite Gun', 'Compressed Air Tank', 'Corsair', 'Crescent Crossbow', 'Crestfaller', 'Crossbow', 'Crown of Guns', 'Dark Marker', 'Dart Gun', 'Deck4rd', 'Demon Head', 'Derringer', 'Devolver', 'Directional Pad', 'Disintegrator', 'Dragunfire', 'Dueling Laser', 'Dueling Pistol', 'Dungeon Eagle', 'Elephant Gun', 'Elimentaler', 'Evolver', 'Excaliber', 'Eye of the Beholster', 'Face Melter', 'Fightsabre', 'Finished Gun', 'Flame Hand', 'Flare Gun', 'Flash Ray', 'Fossilized Gun', 'Freeze Ray', 'Frost Giant', 'Gamma Ray', 'Gilded Hydra', 'Glacier', 'Glass Cannon', 'Grasschopper', 'Grenade Launcher', 'Grey Mauser', 'GuNNER', 'Gunbow', 'Gunderfury', 'Gungeon Ant', 'Gungine', 'Gunslinger\'s Ashes', 'Gunther', 'Gunzheng', 'H4mmer', 'Heck Blaster', 'Hegemony Carbine', 'Hegemony Rifle', 'Helix', 'Heroine', 'Hexagun', 'High Kaliber', 'Huntsman', 'Hyper Light Blaster', 'Ice Breaker', 'JK-47', 'Jolter', 'Klobbe', 'Knight\'s Gun', 'Kruller Glaive', 'Laser Lotus', 'Laser Rifle', 'Life Orb', 'Light Gun', 'Lil\' Bomber', 'Lower Case r', 'Luxin Cannon', 'M1', 'M16', 'M1911', 'MAC10', 'Machine Fist', 'Machine Pistol', 'Magic Lamp', 'Magnum', 'Mahoguny', 'Mailbox', 'Makarov', 'Makeshift Cannon', 'Marine Sidearm', 'Mass Shotgun', 'Mega Douser', 'Megahand', 'Microtransaction Gun', 'Mine Cutter', 'Molotov Launcher', 'Moonscraper', 'Mourning Star', 'Mr. Accretion Jr.', 'Mutation', 'Nail Gun', 'Old Goldie', 'Origuni', 'Particulator', 'Patriot', 'Pea Shooter', 'Phoenix', 'Pitchfork', 'Plague Pistol', 'Plunger', 'Polaris', 'Poxcannon', 'Proton Backpack', 'Prototype Railgun', 'Pulse Cannon', 'Quad Laser', 'RC Rocket', 'RPG', 'RUBE-ADYNE MK.II', 'RUBE-ADYNE Prototype', 'Rad Gun', 'Raiden Coil', 'Railgun', 'Rattler', 'Really Special Lute', 'Regular Shotgun', 'Robot\'s Left Hand', 'Robot\'s Right Hand', 'Rogue Special', 'Rubenstein\'s Monster', 'Rusty Sidearm', 'SAA', 'Sawed-Off', 'Science Cannon', 'Screecher', 'Serious Cannon', 'Shades\'s Revolver', 'Shell', 'Shellegun', 'Shock Rifle', 'Shotbow', 'Shotgrub', 'Shotgun Full of Hate', 'Shotgun Full of Love', 'Silencer', 'Siren', 'Skull Spitter', 'Sling', 'Slinger', 'Smiley\'s Revolver', 'Snakemaker', 'Sniper Rifle', 'Snowballer', 'Staff of Firepower', 'Starpew', 'Sticky Crossbow', 'Stinger', 'Stone Dome', 'Strafe Gun', 'Sunlight Javelin', 'Super Meat Gun', 'T-Shirt Cannon', 'Tangler', 'Teapot', 'Tear Jerker', 'Tetrominator', 'The Emperor', 'The Exotic', 'The Fat Line', 'The Judge', 'The Kiln', 'The Membrane', 'The Predator', 'The Scrambler', 'Thompson Sub-Machinegun', 'Thunderclap', 'Trank Gun', 'Trashcannon', 'Trick Gun', 'Trident', 'Triple Crossbow', 'Triple Gun', 'Turbo-Gun', 'Unfinished Gun', 'Unicorn Horn', 'VertebraeK-47', 'Void Core Assault Rifle', 'Void Core Cannon', 'Void Marshal', 'Void Shotgun', 'Vorpal Gun', 'Vulcan Cannon', 'Winchester Rifle', 'Winchester', 'Wind Up Gun', 'Witch Pistol', 'Wood Beam', 'Yari Launcher', 'Zilla Shotgun', 'Zorgun'];
var qualities = new Map();

qualities.set('N', 0);
qualities.set('D', 1);
qualities.set('C', 2);
qualities.set('B', 3);
qualities.set('A', 4);
qualities.set('S', 5);

let input = document.getElementById("guess-field");
let inputContainer = document.querySelector(".input");
let listBox = document.querySelector(".list");
let tileContainer = document.querySelector(".tile-container")
let messageContainer = document.querySelector(".message-container");
let blurContainer = document.querySelector(".blur-container");
let valid = false;
let gIndex = -1;
let clipboard = "I solved the Gundle in ";
let tries = [];
let counter = 0;
let hasWon = false;
let up = false;

var lastSuggestionIndex = -1;
var sBoxHeight = 0;

input.onkeyup = function (e) {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  if (e.keyCode === 40 || e.keyCode === 38) {
    return;
  }
  removeElements();
  let foundGun = false;
  for (let i of userGunList) {
    let src = "images/guns/" + i.replace(/\.$/,"") + ".png";
    //convert input to lowercase and compare with each string
    if (i.toLowerCase() === input.value.toLowerCase() && input.value != "") {
      displayNames(i, src, i.replaceAll(" ", "_"));
      foundGun = true;
      break;
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
      list.style.cursor = "pointer";
      list.setAttribute('onclick', 'displayNames("' + i + '", "' + src + '", "' + i.replaceAll(' ', '_') + '")');
      list.classList.add('list-container');
      //One common class name
      listItem.classList.add("list-items");
      //display the value in array
      const text = document.createTextNode(i);
      listItem.appendChild(text);
      list.appendChild(imageItem);
      list.appendChild(listItem);
      listBox.appendChild(list);
      let gicon = document.getElementById("gun-icon");
      gicon.setAttribute("src", "images/UI/gun_icon.png");
      gicon.className = "input-icon";
      gicon.style.filter = "brightness(100)"
      document.querySelector(".wiki-link").setAttribute("href", "https://enterthegungeon.fandom.com/wiki/Guns");
    }
    else if (input.value == "") {
      let gicon = document.getElementById("gun-icon");
      gicon.setAttribute("src", "images/UI/gun_icon.png");
      gicon.style.filter = "brightness(100)";
      gicon.className = "input-icon";
      valid = false;
      document.querySelector(".wiki-link").setAttribute("href", "https://enterthegungeon.fandom.com/wiki/Guns");
    }
  }
  if (!foundGun){
    valid = false;
  }
  lastSuggestionIndex = listBox.childElementCount - 1;
  sBoxHeight = listBox.clientHeight;
};

var sIndex = -1;
input.onkeydown = function (e) {
  //down key
  if (e.keyCode === 40) {
    if(listBox.childElementCount == 0) return;
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
    if(listBox.childElementCount == 0) return;
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
    }
    else if(listBox.childElementCount > 0 && sIndex > -1){
      let choice = listBox.children.item(sIndex);
      let name = choice.children.item(1).textContent;
      let src = "images/guns/" + name.replace(/\.$/,"") +".png";
      displayNames(name, src, name.replaceAll(" ", "_"));
      choice.classList.remove("hl");
      sIndex = -1;
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
  sIndex = -1;
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

function removeElements() {
  //clear all the items
  let items = document.querySelectorAll(".list-container");
  items.forEach((item) => {
    item.remove();
  })
}

function randomGun() {
  gIndex = Math.floor(Math.random() * sortedGunList.length);
}

async function guess() {
  if (!valid) {
    return;
  }
  const name = input.value;
  let header = document.querySelector(".header-container");
  let guess = "";
  header.classList.add("fade");
  const rnGun = guns[gIndex];
  let html = "<div class = 'row'>";
  for (let gun of guns) {
    if (gun.name == name) {
      if (name == rnGun.name) {
        html += '<div class = "tile correct"><img src="images/guns/' + gun.name.replace(/\.$/,"") +'.png" title="' + name + '"/></div>';
        hasWon = true;
      }
      else {
        html += '<div class = "tile incorrect"><img src="images/guns/' + gun.name.replace(/\.$/,"") +'.png" title="' + name + '"/></div>';
      }
      if (qualities.get(gun.quality) - qualities.get(rnGun.quality) == 1) {
        html += '<div class = "tile close down big">' + gun.quality + '</div>';
        guess += '🟨';
      }
      else if (qualities.get(rnGun.quality) - qualities.get(gun.quality) == 1){
        html += '<div class = "tile close up big">' + gun.quality + '</div>';
        guess += '🟨';
      }
      else if (qualities.get(rnGun.quality) - qualities.get(gun.quality) > 1){
        html += '<div class = "tile incorrect up big">' + gun.quality + '</div>';
        guess += '⬛';
      }
      else if (qualities.get(gun.quality) - qualities.get(rnGun.quality) > 1){
        html += '<div class = "tile incorrect down big">' + gun.quality + '</div>';
        guess += '⬛';
      }
      else if (qualities.get(gun.quality) == qualities.get(rnGun.quality)) {
        html += '<div class = "tile correct big">' + gun.quality + '</div>';
        guess += '🟩';
      }
      if (gun.type == rnGun.type) {
        html += '<div class = "tile correct small">' + gun.type + '</div>';
        guess += '🟩';
      }
      else {
        html += '<div class = "tile incorrect small">' + gun.type + '</div>';
        guess += '⬛';
      }
      if (gun.magSize == rnGun.magSize) {
        html += '<div class = "tile correct big">' + (gun.magSize > 10000 ? '∞': gun.magSize.toString()) + '</div>';
        guess += '🟩';
      }
      else if (gun.magSize <= rnGun.magSize) {
        if (rnGun.magSize - gun.magSize <= 3){
          html += '<div class = "tile close up big">' + gun.magSize.toString() + '</div>';
          guess += '🟨';
        }
        else {
          html += '<div class = "tile incorrect up big">' + gun.magSize.toString() + '</div>';
          guess += '⬛';
        }
      }
      else if (gun.magSize >= rnGun.magSize) {
        if (gun.magSize - rnGun.magSize <= 3){
          html += '<div class = "tile close down big">' + (gun.magSize > 10000 ? '∞' : gun.magSize.toString()) + '</div>';
          guess += '🟨';
        }
        else {
          html += '<div class = "tile incorrect down big">' + (gun.magSize > 10000 ? '∞' : gun.magSize.toString()) + '</div>';
          guess += '⬛';
        }
      }
      if (gun.ammoCap == rnGun.ammoCap) {
        html += '<div class = "tile correct big">' + (gun.ammoCap > 10000 ? '∞': gun.ammoCap.toString()) + '</div>';
        guess += '🟩';
      }
      else if (gun.ammoCap <= rnGun.ammoCap) {
        if (rnGun.ammoCap - gun.ammoCap <= 20){
          html += '<div class = "tile close up big">' + gun.ammoCap.toString() + '</div>';
          guess += '🟨';
        }
        else {
          html += '<div class = "tile incorrect up big">' + gun.ammoCap.toString() + '</div>';
          guess += '⬛';
        }
      }
      else if (gun.ammoCap >= rnGun.ammoCap) {
        if (gun.ammoCap - rnGun.ammoCap <= 20){
          html += '<div class = "tile close down big">' + (gun.ammoCap > 10000 ? '∞': gun.ammoCap.toString()) + '</div>';
          guess += '🟨';
        }
        else {
          html += '<div class = "tile incorrect down big">' + (gun.ammoCap > 10000 ? '∞': gun.ammoCap.toString()) + '</div>';
          guess += '⬛';
        }
      }
      if (gun.damage == rnGun.damage) {
        html += '<div class = "tile correct big">' + gun.damage.toString() + '</div>';
        guess += '🟩';
      }
      else if (gun.damage <= rnGun.damage) {
        if (rnGun.damage - gun.damage <= 5){
          html += '<div class = "tile close up big">' + gun.damage.toString() + '</div>';
          guess += '🟨';
        }
        else {
          html += '<div class = "tile incorrect up big">' + gun.damage.toString() + '</div>';
          guess += '⬛';
        }
      }
      else if (gun.damage >= rnGun.damage) {
        if (gun.damage - rnGun.damage <= 5){
          html += '<div class = "tile close down big">' + gun.damage.toString() + '</div>';
          guess += '🟨';
        }
        else {
          html += '<div class = "tile incorrect down big">' + gun.damage.toString() + '</div>';
          guess += '⬛';
        }
      }
      if (gun.fireRate == rnGun.fireRate) {
        html += '<div class = "tile correct big">' + gun.fireRate.toString() + '</div>';
        guess += '🟩';
      }
      else if (gun.fireRate <= rnGun.fireRate) {
        if (rnGun.fireRate - gun.fireRate <= 0.03){
          html += '<div class = "tile close up big">' + gun.fireRate.toString() + '</div>';
          guess += '🟨';
        }
        else {
          html += '<div class = "tile incorrect up big">' + gun.fireRate.toString() + '</div>';
          guess += '⬛';
        }
      }
      else if (gun.fireRate >= rnGun.fireRate) {
        if (gun.fireRate - rnGun.fireRate <= 0.03){
          html += '<div class = "tile close down big">' + gun.fireRate.toString() + '</div>';
          guess += '🟨';
        }
        else {
          html += '<div class = "tile incorrect down big">' + gun.fireRate.toString() + '</div>';
          guess += '⬛';
        }
      }
      if (gun.reloadTime == rnGun.reloadTime) {
        html += '<div class = "tile correct big">' + gun.reloadTime.toString() + '</div>';
        guess += '🟩';
      }
      else if (gun.reloadTime <= rnGun.reloadTime) {
        if (rnGun.reloadTime - gun.reloadTime <= 0.1){
          html += '<div class = "tile close up big">' + gun.reloadTime.toString() + '</div>';
          guess += '🟨';
        }
        else {
          html += '<div class = "tile incorrect up big">' + gun.reloadTime.toString() + '</div>';
          guess += '⬛';
        }
      }
      else if (gun.reloadTime >= rnGun.reloadTime) {
        if (gun.reloadTime - rnGun.reloadTime <= 0.1){
          html += '<div class = "tile close down big">' + gun.reloadTime.toString() + '</div>';
          guess += '🟨';
        }
        else {
          html += '<div class = "tile incorrect down big">' + gun.reloadTime.toString() + '</div>';
          guess += '⬛';
        }
      }
      html += "</div>"
      tileContainer.insertAdjacentHTML('afterbegin', html);
      tries.push(guess);
      counter++;
      const i = userGunList.indexOf(gun.name);
      if (i > -1){
        userGunList.splice(i, 1);
      }
      break;
    }
  }
  input.value = "";
  const row = document.querySelector(".row").children;
  for(let i = 0; i < row.length; i++){
    row[i].classList.add('flip');
    await sleep(500);
  }
  if(hasWon){
    clipboard += (counter.toString() + " tries:\n\n" + tries.join("\n"));
    messageContainer.classList.add('slideIn');
    blurContainer.classList.add('blur');
    up = true;
    input.disabled = true;
  }
  valid = false;
}

blurContainer.addEventListener("click", (event) => {
  if(!up) return;
  messageContainer.animate(
    {
      transform: ["translateY(-80vh)", "translateY(-12vh)"],
    },
    {
      duration: 250,
      timingFunction: "ease-in",
      fill: "forwards"
    },
    );
  blurContainer.animate({
    opacity: [1, 0],
  },
  {
    duration: 250,
    timingFunction: "ease-in",
    fill:"forwards"
  },
  );
  up = false;
});

messageContainer.addEventListener("click", (event) => {
  if(up) return;
  messageContainer.animate(
    {
      transform: ["translateY(-12vh)", "translateY(-80vh)"],
    },
    {
      duration: 250,
      timingFunction: "ease-out",
      fill: "forwards"
    },
    );
  blurContainer.animate({
    opacity: [0, 1],
  },
  {
    duration: 250,
    timingFunction: "ease-out",
    fill:"forwards"
  },
  );
  up = true;
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function refresh(){
  location.reload();
}

function copy(){
  if(!hasWon){
    return;
  }
  navigator.clipboard.writeText(clipboard);
}