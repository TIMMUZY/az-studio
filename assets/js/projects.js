const token = "7105368372:AAFnpvrvMZ6_7vHKg_URZO1gGs24KxSkTfg";
const chat_id = -4598080407;
document.getElementById('discuss-form').addEventListener('submit',async(event)=>{
    console.log('submit');
    
    event.preventDefault()
    const nameEl =  document.querySelector('#discuss-form .name')
    const phoneEl = document.querySelector('#discuss-form .phone')
    const name =nameEl.value
    const phone = phoneEl.value
    if(name.trim()===''){
        nameEl.classList.add('error-input')
        setTimeout(()=>nameEl.classList.remove('error-input'),1500)
        return 
    }
    if(phone.trim()===''){
        phoneEl.classList.add('error-input')
        setTimeout(()=>phoneEl.classList.remove('error-input'),1500)
        return 
    }
    const message = `
    <i><b>#projects \nЗаявка на разработку сайта из страницы проекты !</b></i>\n<u>Имя:</u>\n${name}\n<u>Способ связи:\n${phone}</u>\n
    `;

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
})