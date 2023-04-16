const btn = document.querySelector('.btn');
const advice = document.querySelector('.advice');
const adviceId = document.querySelector('.advice-id');
const url = "https://api.adviceslip.com/advice"

async function fetchAdvice(){
const res = await fetch(url);
const {slip:{id,advice:adviceText }} = await res.json()
advice.innerText = adviceText;
adviceId.innerText = id;
}
fetchAdvice();
btn.addEventListener("click", fetchAdvice);