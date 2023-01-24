const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")




/*=============== SHOW MENU ===============*/
/*-----Validate if constant exists-----*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add("show-menu")
  })
}


/*============== MENU HIDDEN ===============*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove("show-menu");
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")
function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  // when we click on each nav link,we remove the show menu class
  navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))


//aboutus js
var root = document.querySelector(":root");
// console.log(root);

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");


//open modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}
//close model

const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = "none";
  }

}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);



/*===== FONTS =====*/

//remove active class form spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove("active");
  })
}

fontSizes.forEach(size => {
  size.addEventListener('click', () => {

    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    size.classList.toggle('click', () => {
    })
    if (size.classList.contains('font-size-1')) {
      fontSize = '12px';
    }
    else if (size.classList.contains('font-size-2')) {
      fontSize = '14px';
    }
    else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
    }
    else if (size.classList.contains('font-size-4')) {
      fontSize = '18px';
    }
    //change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    localStorage.setItem('fontSize', JSON.stringify(fontSize));

  })
}
)

/*===== PRIMARY COLORS =====*/
//remove the active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  }
  )
}





colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColorClass();

    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    }
    else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    }
    else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    }
    else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    }
    else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add("active");

    
    // localStorage.classList.setItem('c-active',"active");
    root.style.setProperty('--primary-color-hue', primaryHue);
    localStorage.setItem('--primary-color-hue', JSON.stringify(primaryHue));
    // const ActiveElem = document.querySelectorAll(".active");
    // // console.log(ActiveElem);
    // var ActiveEle = {
    //   "colorpallete": ActiveElem,
    // }
    // localStorage.setItem("ACTIVE" , JSON.stringify(ActiveEle));

  })

})



/*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


//change background color

const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);

  localStorage.setItem('--light-color-lightness', JSON.stringify(lightColorLightness));
  localStorage.setItem('--white-color-lightness', JSON.stringify(whiteColorLightness));
  localStorage.setItem('--dark-color-lightness', JSON.stringify(darkColorLightness));
}
Bg1.addEventListener('click', () => {
  darkColorLightness = '17%';
  whiteColorLightness = '100%';
  lightColorLightness = '92%';

  //add active class
  Bg1.classList.add('active');
  //removeactive class from  the others
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  //remove cutomized changes from local Storage
  changeBG();
  // window.location.reload();
})

Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';


  //add active class
  Bg2.classList.add('active');
  //removeactive class from  the others
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
})

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';


  //add active class
  Bg3.classList.add('active');
  //removeactive class from  the others
  Bg1.classList.remove('active');
  Bg2.classList.remove('active');
  changeBG();
})

//to change overall file theme
let cmColor = JSON.parse(localStorage.getItem("--primary-color-hue"));
let FontSize = JSON.parse(localStorage.getItem("fontSize"));
let lightColor = JSON.parse(localStorage.getItem("--light-color-lightness"));
let whiteColor = JSON.parse(localStorage.getItem("--white-color-lightness"));
let darkColor = JSON.parse(localStorage.getItem( "--dark-color-lightness"));

//color palette
if (cmColor ===  52){
  root.style.setProperty("--primary-color-hue",52);
}
else if(cmColor === 152){
  root.style.setProperty("--primary-color-hue",152);
}
else if(cmColor === 252)
{
  root.style.setProperty("--primary-color-hue",252);
}
else if(cmColor === 202)
{
  root.style.setProperty("--primary-color-hue",202);
}
else{
  root.style.setProperty("--primary-color-hue",352);
}

//FontSize
if (FontSize === "18px"){
  root.style.setProperty("font-size","18px");
}
else if(FontSize === "16px"){
  root.style.setProperty("font-size","16px");
}
else if(FontSize === "12px"){
  root.style.setProperty("font-size","12px");
}
else{
  root.style.setProperty("font-size","14px");
}

//Theme
if (whiteColor === "20%"){
  root.style.setProperty('--light-color-lightness', '15%');
  root.style.setProperty('--white-color-lightness', '20%');
  root.style.setProperty('--dark-color-lightness', '95%');
}
else if(whiteColor === "10%"){
  root.style.setProperty('--light-color-lightness', '0%');
  root.style.setProperty('--white-color-lightness', '10%');
  root.style.setProperty('--dark-color-lightness', '95%');
}
else if(whiteColor === "100%"){
  root.style.setProperty('--light-color-lightness', '92%');
  root.style.setProperty('--white-color-lightness', '100%');
  root.style.setProperty('--dark-color-lightness', '17%');
}



