let burgerMenu = document.querySelector(".header__burger")
let X = document.querySelector(".x-btn")
let item = document.querySelectorAll(".menu__item")
let Menu = document.querySelector(".header__menu")
let header = document.getElementById("myHeader");
let logo = document.querySelector(".header__logo");

burgerMenu.addEventListener("click", (e) => {
    Menu.classList.add("header__menus")
})
item.forEach((e) => {

    X.addEventListener("click", (e) => {
        Menu.classList.remove("header__menus")
    })

    e.addEventListener("click", (e) => {
        Menu.classList.remove("header__menus")
    })
})


function range1() {
    let SliderValue = document.getElementById("slider").value;
    let elMyImage = document.getElementById("slider__my-image");
    elMyImage.style.clipPath = `polygon(0 0, ${SliderValue}% 0, ${SliderValue}% 100%, 0 100%)`;
    // console.log(elMyImage.style.cliath = "polygon(0 0, " + SliderValue + "% 0" + SliderValue + "% 100%, 0 100%)");
}

function range2() {
    let SliderValue = document.getElementById("slider2").value;
    let elMyImage = document.getElementById("slider__my-image2");
    elMyImage.style.clipPath = `polygon(0 0, ${SliderValue}% 0, ${SliderValue}% 100%, 0 100%)`;
    // console.log(elMyImage.style.cliath = "polygon(0 0, " + SliderValue + "% 0" + SliderValue + "% 100%, 0 100%)");
}

function range3() {
    let SliderValue = document.getElementById("slider3").value;
    let elMyImage = document.getElementById("slider__my-image3");
    elMyImage.style.clipPath = `polygon(0 0, ${SliderValue}% 0, ${SliderValue}% 100%, 0 100%)`;
    // console.log(elMyImage.style.cliath = "polygon(0 0, " + SliderValue + "% 0" + SliderValue + "% 100%, 0 100%)");
}


function range4() {
    let SliderValue = document.getElementById("slider4").value;
    let elMyImage = document.getElementById("slider__my-image4");
    elMyImage.style.clipPath = `polygon(0 0, ${SliderValue}% 0, ${SliderValue}% 100%, 0 100%)`;
    // console.log(elMyImage.style.cliath = "polygon(0 0, " + SliderValue + "% 0" + SliderValue + "% 100%, 0 100%)");
}

function range5() {
    let SliderValue = document.getElementById("slider5").value;
    let elMyImage = document.getElementById("slider__my-image5");
    elMyImage.style.clipPath = `polygon(0 0, ${SliderValue}% 0, ${SliderValue}% 100%, 0 100%)`;
    // console.log(elMyImage.style.cliath = "polygon(0 0, " + SliderValue + "% 0" + SliderValue + "% 100%, 0 100%)");
}



window.onscroll = function () { myFunction() };



var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        logo.src = "../img/logo-dark.png"
    } else {
        header.classList.remove("sticky");
        logo.src = "../img/logo.png"

    }
}

document.querySelectorAll('.faq .question').forEach((question) => {
    question.addEventListener('click', () => {
      // Barcha FAQ elementlarini yopish
      document.querySelectorAll('.faq-item').forEach((item) => {
        if (item !== question.parentNode) {
          item.classList.remove('open');
        }
      });
  
      // Bosilgan elementni ochish yoki yopish
      question.parentNode.classList.toggle('open');
    });
  });
  





  const botToken = '7803746265:AAGK7Gz86PijJKYCTV7Yx3VXOCc0iGXh1zY';
    const chatId = '-1002316778057';

    // Toast funksiyasi
    function showToast(message) {
      let toast = document.getElementById("toast");
      toast.className = "show";
      toast.innerText =  message;
      setTimeout(function() { toast.className = toast.className.replace("show", ""); }, 3000);
    }

    let nameInput = document.getElementById("name");
    let phoneInput = document.getElementById("phone");
    phoneInput.value = "+998 ";
    
    phoneInput.addEventListener("input", function (e) {
      let value = phoneInput.value.replace(/\D/g, "");
    
      if (!value.startsWith("998")) {
        value = "998" + value;
      }
    
      if (value.length > 12) {
        value = value.slice(0, 12);
      }
    
      const formattedValue = formatPhoneNumber(value);
      phoneInput.value = formattedValue;
    });
    
    function formatPhoneNumber(value) {
      return "+998 " + value.slice(3);
    }
    
    phoneInput.addEventListener("keydown", function (e) {
      const value = phoneInput.value.replace(/\D/g, "");
    
      if (
        phoneInput.selectionStart <= 5 &&
        (e.key === "Backspace" || e.key === "Delete")
      ) {
        e.preventDefault();
      }
    
      if (value.length >= 12 && e.key !== "Backspace" && e.key !== "Delete") {
        e.preventDefault();
      }
    });

    document.getElementById('telegramForm').addEventListener('submit', function (e) {
      e.preventDefault();



      // if (!validatePhone(phone)) {
      //   showToast("Telefon raqami noto‘g‘ri formatda kiritilgan! To'g'ri format: +998 (90) 123-45-67");
      //   return;
      // }

      const message = `Ism: ${nameInput?.value}\nTelefon: ${phoneInput?.value?.toString()?.split(" ").join("")}`;
      
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      })
      .then(response => response.json())
      .then(data => {
        // showToast("Telefon raqami noto‘g‘ri formatda kiritilgan! To'g'ri format: +998 (90) 123-45-67");
   

        if (data.ok) {
          showToast("Arizangiz muvaffaqiyatli yuborildi!");
          document.getElementById('telegramForm').reset();
            phoneInput.value = "+998 ";
        } else {
          showToast("Ariza yuborishda xatolik yuz berdi.");
        }
      })
      .catch(error => {
        console.error("Xatolik:", error.message);
        showToast("Ariza yuborishda xatolik yuz berdi.");
      });
    });
