// document.querySelectorAll(".music-player .music-control").forEach((el) => {
//   el.addEventListener("click", (event) => {
//     const audio = el.parentElement.querySelector(".music-hidden");

//     function isAudioPlaying() {
//       return !audio.paused && !audio.ended;
//     }
//     console.log(isAudioPlaying());

//     if (!isAudioPlaying()) {
//       audio.play();
//       el.src = "./assets/icons/play-music.svg";
//     } else {
//       audio.pause();
//       el.src = "./assets/icons/play-icon.svg";
//     }
//   });
// });

document.querySelectorAll(".qa-list-item").forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log();
    e.currentTarget.children[0].classList.toggle("qa-list-active");
    const id = e.currentTarget.getAttribute("data-id");
    document
      .querySelector(`.qa-list-more-content[data-id="${id}"]`)
      .classList.toggle("content-hidden");
  });
});
function removeClassActive() {
  document.querySelectorAll(".block-wrap").forEach((el) => {
    el.classList.remove("active");
  });
}
if (window.outerWidth > 763) {
  document.querySelectorAll(".block-wrap").forEach((el) => {
    el.addEventListener("mousemove", (event) => {
      removeClassActive();
      el.classList.add("active");
    });
  });
}
if (window.outerWidth < 763) {
  document.querySelectorAll(".block-wrap").forEach((el) => {
    el.classList.add("active");
  });
}

document.querySelectorAll(".video-wrap").forEach((el) => {
  el.onclick = (event) => {
    const videoEl = event.currentTarget.children[0];
    event.currentTarget.classList.toggle("video-wrap-tr");
    if (!videoEl.paused && !videoEl.ended) {
      videoEl.setAttribute("controls", false);
      videoEl.pause();
    } else {
      videoEl.setAttribute("controls", true);
      videoEl.play();
    }
  };
});
document.querySelectorAll(".music-rezon").forEach((el) => {
  const linesEl = el.children;
  const getRandomHeight = () => {
    const height = (Math.random() * 23).toFixed(0);
    if (height < 7) {
      getRandomHeight();
    } else {
      return height;
    }
  };
  const intervalId = setInterval(() => {
    for (let i = 0; i < linesEl.length; i++) {
      const el = linesEl[i];
      el.style.height = getRandomHeight() + "px";
    }
  }, 200);
});
const token = "7105368372:AAFnpvrvMZ6_7vHKg_URZO1gGs24KxSkTfg";
const chat_id = -4598080407;
console.log(document.querySelector(".form-tz"));

document
  .querySelector(".form-tz")
  ?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.querySelector(".form-tz .name").value;
    const email = document.querySelector(".form-tz .email").value;
    const comment = document.querySelector(".form-tz .comment").value;
    const message = `
  <i><b>Заявка на разработку сайта !</b></i>\n<u>Имя:</u>\n${name}\n<u>Почта:</u>\n${email}\n<u>Описание:</u>\n${comment}
  `;
    if (!name || !email || !comment) {
      alert("Заполните поля !");
      return;
    }

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        chat_id,
        text: message,
        parse_mode: "html",
      }),
    }).then(async (res) => {
      if (res.ok) {
        alert("Заявка успешно отправлена");
      }
      const data = await res.json();
      console.log(data);
    });
  });

console.log("visualViewport.width", window.outerWidth);
console.log("screenWidth", window.screen.width);
console.log("availableScreenWidth ", window.screen.availWidth);
console.log("windowOuterWidth ", window.outerWidth);
console.log(window.outerWidth);
console.log("pageWidth ", document.documentElement.scrollWidth);
console.log("window.visualViewport ", window.outerWidth);

console.log(window.outerWidth);
if (window.outerWidth < 763) {
  const kef = window.outerWidth / (762 / 100);
  console.log(kef);
  document.querySelector(".content-wrap").style.zoom = kef + "%";
}
if (window.outerWidth > 1920) {
  const kef = window.outerWidth / (1850 / 100);
  console.log(kef);
  document.querySelector(".content-wrap").style.zoom = kef + "%";
}

window.addEventListener("resize", (e) => {
  if (window.outerWidth < 763) {
    const kef = window.outerWidth / (762 / 100);
    document.querySelector(".content-wrap").style.zoom = kef + "%";
  }
  if (window.outerWidth > 1920) {
    const kef = window.outerWidth / (1850 / 100);
    console.log(kef);
    document.querySelector(".content-wrap").style.zoom = kef + "%";
  }
});

document.querySelectorAll(".menu-mobile-list li a").forEach((el) => {
  el.addEventListener("click", () => {
    const menu = document.querySelector(".menu-mobile");
    menu.classList.toggle("close-hidden-menu");
  });
});

document.querySelector(".burger-btn").addEventListener("click", (event) => {
  const menu = document.querySelector(".menu-mobile");
  menu.classList.toggle("close-hidden-menu");
});

document
  .querySelector(".menu-mobile .close-img")
  .addEventListener("click", () => {
    const menu = document.querySelector(".menu-mobile");
    menu.classList.toggle("close-hidden-menu");
  });

document.querySelector(".menu-mobile").addEventListener("click", (event) => {
  console.log(event.target.classList);

  if (event.target.classList.contains("menu-mobile")) {
    event.target.classList.toggle("close-hidden-menu");
  }
});

// document.querySelectorAll(".hover-detail ul").forEach((el) => {
//   const lis = el.children;
//   let lis_det = lis;
//   if (lis.length > 6) {
//     const all_btn = document.createElement("div");
//     const lis_array = Array.from(lis);
//     const sliceElements = lis_array.slice(0, 6);
//     console.log(sliceElements);
//     el.innerHTML = "";
//     console.log(el);
//     for (let i = 0; i < sliceElements.length; i++) {
//       el.appendChild(sliceElements[i]);
//     }
//     all_btn.innerText = "Все преимущества";
//     all_btn.classList.add("all_adavant_btn");
//     all_btn.addEventListener("click", (event) => {
//       el.innerText = ''
//       for (let i = 0; i < lis_det.length; i++) {   
//         // el     
//       }
//     });
//     el.appendChild(all_btn);
//   }
// });
