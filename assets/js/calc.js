const steps = {
  Landing: {
    designers: {
      "Младший дизайнер": {
        price: 45667,
        deadline: 87,
      },
      "Старший дизайнер": {
        price: 23454,
        deadline: 7,
      },
      "Арт директор": {
        price: 6756,
        deadline: 3423,
      },
    },
    marketing: {
      general_analysis: {
        price: 23424,
      },
      immersive_analysis: {
        price: 453,
      },
      deep_analysis: {
        price: 4564,
      },
    },
  },
  corporate: {
    designers: {
        "Младший дизайнер": {
          price: 345336,
          deadline: 10,
        },
        "Старший дизайнер": {
          price: 3456,
          deadline: 423523,
        },
        "Арт директор": {
          price: 2355,
          deadline: 234,
        },
      },
      marketing: {
        general_analysis: {
          price: 23423,
        },
        immersive_analysis: {
          price: 124,
        },
        deep_analysis: {
          price: 356,
        },
      },
  },
  internet_shop: {
    designers: {
        "Младший дизайнер": {
          price: 345656,
          deadline: 3453452,
        },
        "Старший дизайнер": {
          price: 23432432,
          deadline: 234324,
        },
        "Арт директор": {
          price: 235,
          deadline: 3453,
        },
      },
      marketing: {
        general_analysis: {
          price: 2342543,
        },
        immersive_analysis: {
          price: 234232,
        },
        deep_analysis: {
          price: 123123,
        },
      },
  },
};
let current_step = {
    
}
let result = 0
function selectStep(step_number) {
  let el_return = null;
  document.querySelectorAll(".calc-steps-step").forEach((el) => {
    const el_id = el.getAttribute("data-step");
    if (+el_id !== step_number) {
      el.style.display = "none";
    } else {
      el.style.display = "flex";
      el_return = el;
    }
  });
  return el_return;
}
function checkboxChecked (event){
    const price = event.currentTarget.getAttribute('data-price')
    console.log(event.currentTarget.checked);
    
    if(event.currentTarget.checked===true){
        result += +price
    }else{
        result -= +price
    }
    console.log(result);
    
    document.querySelector('.price-price').innerText = new Intl.NumberFormat("ru-RU").format(result)
}

function getHTMLSelected(obj) {
  const keys = Object.keys(obj);

  let html = `

    `;
  keys.forEach((key) => {
    console.log(obj);
    
    html += `
    <div>
        <span>${key}</span> <br/>
        <span>Цена:${obj[key].price}</span>
        <span>${obj[key].deadline?` <span>Срок:${obj[key].deadline}</span>`:''}</span>
        <input type="checkbox" data-price="${obj[key].price}" onchange="checkboxChecked(event)" />
         <br/>  <br/>
    </div>
        `;
  });
  return html


}

function getHTMLRoad(step_name) {
  console.log(Object.keys(steps[step_name]));

  const allKeys = Object.keys(steps[step_name]);
  console.log(allKeys);
  const html_start = allKeys.map((key) => {
    return `<div class="step-road" >${key}
      <div>
  ${getHTMLSelected(steps[step_name][key])}
  </div>
    </div>`;
  });
  let html = `<div class="step-roads">${html_start.join("")} </div>`;

  console.log(allKeys);

  return html;
}

function userRoadRender(road_name) {
  if (road_name === "Landing") {
    const stepEl = selectStep(2);
    current_step = {
        road_name,
        step_id:2
    }
    stepEl.innerHTML = getHTMLRoad("Landing");
  }else if(road_name === "corporate"){
    const stepEl = selectStep(2);
    current_step = {
        road_name,
        step_id:2
    }
    stepEl.innerHTML = getHTMLRoad("corporate");
  }else if(road_name === "internet_shop"){
    const stepEl = selectStep(2);
    current_step = {
        road_name,
        step_id:2
    }
    stepEl.innerHTML = getHTMLRoad("internet_shop");
  }else{
    const stepEl = selectStep(1);
  }
}
const current_user_road = {};
const step_one_buttons = document.querySelectorAll(".step-wrap");

step_one_buttons.forEach((el) => {
  el.addEventListener("click", (event) => {
    const step_name = event.currentTarget.getAttribute("data-step-road");
    console.log(step_name);
    userRoadRender(step_name);
    current_user_road[step_name] = "";
  });
});

document.querySelector('.calc-steps-prev').addEventListener('click',()=>{
    current_step.id = 1
    result = 0
    userRoadRender(null)
})
document.querySelector('.calc-steps-next').addEventListener('click',()=>{
    current_step.id = 1
    userRoadRender(current_step.road_name)
})