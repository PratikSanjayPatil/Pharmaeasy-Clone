let healthOptions = document.getElementById("HealthOptions");
let Health = document.querySelector(".Health>.popup");
let icon = document.querySelector(".Health>.popup>span>i")

let count = 0;
Health.addEventListener("click",function options(e){
    count+=1;
    if(count===1){
        e.preventDefault();
        healthOptions.style.display = "flex";
        healthOptions.style.position = "fixed"
        icon.style.transform = "rotate(180deg)";
        icon.style.transition = "0.3s";
        icon.style.color = "#15ACA5";
        document.body.style.overflow = "hidden"
    }
    else{
        e.preventDefault();
        healthOptions.style.display = "none";
        icon.style.transform = "rotate(0deg)";
        icon.style.transition = "0.3s";
        icon.style.color = "";
        count = 0;
        document.body.style.overflow = ""
    }
});



// Health care popup tap options start

// let first = document.querySelector("#HealthOptions>div>.tp");
// let sec = document.querySelector("#HealthOptions>div>.ec");
// let thr = document.getElementsByClassName("pc");
// let fourth = document.getElementsByClassName("hd");
// let five = document.getElementsByClassName("hfcd");
// let six = document.getElementsByClassName("sc");
// let seven = document.getElementsByClassName("mbc");
// let eight = document.getElementsByClassName("aw");
// let nine = document.getElementsByClassName("fs");
// let ten = document.getElementsByClassName("ac");
// let elewen = document.getElementsByClassName("sw");
// let tvelve = document.getElementsByClassName("dc");
// let thirteen = document.getElementsByClassName("hc");
// let fourteen = document.getElementsByClassName("hc2");
// let fifteen = document.getElementsByClassName("tp2");
// let sixteen = document.getElementsByClassName("sd");

// first.addEventListener("click",function(){
//     first.classList.add("active")
//     let TProduct = document.querySelector("#HealthOptions>.TProduct")
//     TProduct.style.display = "none";
// })

// sec.addEventListener("click",function(){
//     sec.classList.add("active")
// })


// Health care popup tap options end



// Offers and Otions start

let OtherOptn = document.querySelector("#OtherOptn")
let innerOtherOptndiv = document.querySelector("#OtherOptn>.innerOtherOptndiv")
let offers = document.querySelector("#OtherOptn>.innerOtherOptndiv>.offers")

let OfferList = [
    {
        img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",
        text:"Medicine",
        offer:"UPTO 27% OFF"
    },

    {
        img:"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
        text:"Lab Tests",
        offer:"UPTO 70% OFF"
    },

    {
        img:"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",
        text:"HealthCare",
        offer:"UPTO 60% OFF"
    },

    {
        img:"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
        text:"HealthCare"
    },

    {
        img:"https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",
        text:"PLUS",
        offer:"SAVE 5% EXTRA"
    },

    {
        img:"https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",
        text:"Offers",
    },

    {
        img:"https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
        text:"Value Store",
        offer:"UPTO 50% OFF"
    },
    
];


OfferList.forEach(function(ele,i){
    let divList = document.createElement("div");
    let img = document.createElement("img")
    let name = document.createElement("p")
    let span = document.createElement("span")
    let hr = document.createElement("hr")
    img.src = ele.img
    name.innerText = ele.text
    let ans = span.innerText = ele.offer

    divList.append(img,hr,name)
    if(ans){
        span.innerText = ele.offer
        divList.append(span)
    }
    offers.append(divList)
})

// Offers and Otions end


// img slide show start

let imgSlide = document.querySelector("#imgSlide");
let innerSlideDiv = document.querySelector("#imgSlide>.imgSlideInnerDiv");
let left = document.createElement("div")
let left_i = document.createElement("i")
let right = document.createElement("div")
let right_i = document.createElement("i")
left.classList.add("left")
right.classList.add("right")


left_i.className = "fa-solid fa-angle-left"
right_i.className = "fa-solid fa-angle-right"

left.append(left_i)
right.append(right_i)

let images = [
    {image : "https://cdn01.pharmeasy.in/dam/banner/banner/93a8cda02f6-Prebuzz-B.jpg"},
    {image : "https://cdn01.pharmeasy.in/dam/banner/banner/3820fdf2bc7-25OFFER.jpg"},
    {image : "https://cdn01.pharmeasy.in/dam/banner/banner/df4321df50a-211.jpg"},
    {image : "https://cdn01.pharmeasy.in/dam/banner/banner/4d4f7e94057-NewSlipperLaunchHP.jpg"},
    {image : "https://cdn01.pharmeasy.in/dam/banner/banner/480aa5499c8-flashhp.jpg"}

]




images.forEach(function(ele){
    let div = document.createElement("div");
    div.classList.add("loop")
    let img = document.createElement("img");

    img.src = ele.image;
    div.append(img)
    innerSlideDiv.append(div)
})

var screenWidth = window.innerWidth;



if(screenWidth >= 720){
    let leftv = 0
    const scrollslider = ()=>{
            if(leftv>=-1140){
                gsap.to(".imgSlideInnerDiv .loop",{
                    x:leftv,
                    duration:1,
                })
                // console.log(leftv)
            }
            else if(leftv === -1710){
                gsap.to(".imgSlideInnerDiv .loop",{
                    x:leftv+205,
                    duration:1,
                })
                // console.log(leftv)
                leftv=570
                
            }
    }

    const automaticscrollslider = ()=>{
        setInterval(()=>{
            
            scrollslider(leftv-=570);
            },3300)
            
    }    
    automaticscrollslider();
}

else{
    let leftv = 0
    const scrollslider = ()=>{
            if(leftv>=-1820){
                gsap.to(".imgSlideInnerDiv .loop",{
                    x:leftv,
                    duration:1,
                })
                // console.log(leftv)
            }
            else if(leftv === -2275){
                gsap.to(".imgSlideInnerDiv .loop",{
                    x:leftv+455,
                    duration:1,
                })
                // console.log(leftv)
                leftv=455
                
            }
    }

    const automaticscrollslider = ()=>{
        setInterval(()=>{
            
            scrollslider(leftv-=455);
            },3300)
            
    }
    automaticscrollslider();
}



// innerSlideDiv.append(left,right)

let labTest = document.querySelector("#labTest")
let labTestInnerDiv2 = document.querySelector("#labTest>.labTestInnerDiv2")
let imgList = document.querySelector("#labTest>.labTestInnerDiv2>.imgList")
let leftBTN = document.querySelector("#labTest>.icon>.left")
let rightBTN =document.querySelector("#labTest>.icon>.right")

const scrollslider = (leftv)=>{
    gsap.to("#labTest>.labTestInnerDiv2>.imgList",{
        x:leftv,
        duration:1,
    })
}
let leftv = 0

if(screenWidth >= 720){
    leftBTN.style.opacity = 0;
    rightBTN.addEventListener("click", function(){
    
        if(leftv>-600){
            scrollslider(leftv-=200)
            leftBTN.style.opacity = 10;
        }
        else if(leftv === -600){
            scrollslider(leftv-=50)
            
        }

        if(leftv===-650){
            rightBTN.style.display = "none";
        }
    })
    
    
    leftBTN.addEventListener("click", function(){
        if(leftv === -50){
            scrollslider(leftv+=50)
            
        }
        else if(leftv <= -100){
            scrollslider(leftv+=200)
            rightBTN.style.display = "flex";
        }

        if(leftv===0){
            leftBTN.style.opacity = 0;
        }
    })
}

else{
    leftBTN.style.opacity = 0;
    rightBTN.addEventListener("click", function(){
    
        if(leftv>-1600){
            scrollslider(leftv-=200)
            leftBTN.style.opacity = 100;
        }
        else if(leftv === -1600){
            scrollslider(leftv-=35)
            rightBTN.style.display = "none";
        }

        if(leftv === -1600){
            rightBTN.style.display = "none";
        }
    })
    
    
    leftBTN.addEventListener("click", function(){
        if(leftv === -35){
            scrollslider(leftv+=35)
           
        }
        else if(leftv <= -100){
            scrollslider(leftv+=200)
            rightBTN.style.display = "flex";
            console.log(leftv)
        }

        if(leftv===0){
            leftBTN.style.opacity = 0;
        }
    })
}

// img slide show end

// Shop by categories start

let shop = document.querySelector("#shop");
let shopInnerDiv = document.querySelector("#shop>.shopInnerDiv");
let shopArr = document.querySelector("#shop>.shopInnerDiv>.shopArr")

let shopList = [
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=256x0",
        title : "Top products"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png?f=png?dim=256x0",
        title : "Elderly care"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=256x0",
        title : "Personal care"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png?f=png?dim=256x0",
        title : "Healthcare devices"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/e9ceb38252cd333f910b383ee75004c0.png?f=png?dim=256x0",
        title : "Summer store"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ce48d6d71ace3892945f0b0a64c1f0e9.png?f=png?dim=256x0",
        title : "Skin care"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/11315fee93053980af48fd871bf687b8.png?f=png?dim=256x0",
        title : "Mother and baby care"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4405b7900b0b34fcb5c8572aae9d4b2e.png?f=png?dim=256x0",
        title : "Accessories & wearables"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png?dim=256x0",
        title : "Fitness supplements"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0",
        title : "Ayurvedic care"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/af7a9b53ad1239659615c6895b0972d7.png?f=png?dim=256x0",
        title : "Sexual wellness"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png?f=png?dim=256x0",
        title : "Diabetic care"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/35d6d4e00e5d3058906cfa8b92ca799c.png?f=png?dim=256x0",
        title : "Health condition"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0",
        title : "Home care"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ef15f03b682d37c994eb978d6c85c455.png?f=png?dim=256x0",
        title : "Trending products"
    },
    {
        img : "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/2e58770425cc39a983d6d71fb0cc07e2.png?f=png?dim=256x0",
        title : "Surgicals and dressings"
    }
]

let shopicon = document.querySelector(".shopicon")
let sleft = document.querySelector(".shopicon>.sleft")
let sright = document.querySelector(".shopicon>.sright")

shopList.forEach(function(ele,i){
    let shopDiv = document.createElement("div")
    // let imgDiv = document.createElement("div")
    // imgDiv.classList.add("shopimgDiv")
    let img = document.createElement("img")
    let p = document.createElement("p")

    img.src = ele.img
    // imgDiv.append(img)
    p.innerHTML = ele.title
    shopDiv.append(img,p)

    shopArr.append(shopDiv)
})


const scrollslider2 = (left2)=>{
    gsap.to("#shop>.shopInnerDiv>.shopArr>div",{
        x:left2,
        duration:1,
    })
}
let left2 = 0

if(screenWidth >= 720){
    sleft.style.opacity = 0;
    sright.addEventListener("click", function(){
        
        if(left2>-1200){
            scrollslider2(left2-=200)
            sleft.style.opacity = 10;
        }
        else if(left2 === -1200){
            scrollslider2(left2-=180)
            
        }

        if(left2===-1380){
            sright.style.display = "none";
        }
    })
    
    
    sleft.addEventListener("click", function(){
        if(left2 === -180){
            scrollslider2(left2+=180)
            
        }
        else if(left2 <= -100){
            scrollslider2(left2+=200)
            sright.style.display = "flex";
        }

        if(left2===0){
            sleft.style.opacity = 0;
        }
    })
}

else{
    sleft.style.opacity = 0;
    sright.addEventListener("click", function(){
    
        if(left2>-2200){
            scrollslider2(left2-=200)
            sleft.style.opacity = 100;
        }
        else if(left2 === -2200){
            scrollslider2(left2-=35)
            sright.style.display = "none";
        }

        if(left2 === -2235){
            sright.style.display = "none";
        }
    })
    
    
    sleft.addEventListener("click", function(){
        if(left2 === -35){
            scrollslider2(left2+=35)
           
        }
        else if(left2 <= -100){
            scrollslider2(left2+=200)
            sright.style.display = "flex";
            console.log(left2)
        }

        if(left2===0){
            sleft.style.opacity = 0;
        }
    })
}
// Shop by categories end

