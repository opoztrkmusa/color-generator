const divs = document.querySelectorAll(".div");
const input = document.querySelector("#input");
const i = document.querySelector("#i");
const gridDiv = document.querySelector("#grid").children;
const form = document.querySelector("#form");
const middle = document.getElementById("section-middle");
const chatSection = document.querySelector("#chat-section");
const youMessage = document.querySelector("#p");
const chatMessage = document.querySelector("#chatGPT");
const downloadElement = document.querySelector("#download");

let iElement; // iElement değişkenini döngü dışında tanımlayın.

divs.forEach((div) => {
    div.addEventListener("mouseover",() => {
        iElement = document.createElement("i");
        iElement.className = "fa-solid fa-arrow-up px-2 py-2 rounded-xl border bg-gray-800 text-white border-gray-600";
        div.appendChild(iElement);
    });

    div.addEventListener("mouseout",() => {

            iElement.classList.add("hidden"); // iElement'i gizleyin
    
    });
});

input.addEventListener("keyup",()=> {
    const inputText = input.value;

    if(inputText !=="") {
        i.className = "fa-solid fa-arrow-up px-2 py-2 rounded-lg bg-white text-black cursor-pointer";
    }
    else {
        i.className = "fa-solid fa-arrow-up px-2 py-2 rounded-lg bg-gray-950 text-gray-700 cursor-pointer";
    }
});

form.addEventListener("submit", run);

function run(e) {
    const textInput = input.value.trim();

    if (textInput !== "") {
        divs.forEach((div) => {

            div.remove();
            document.body.style.justifyContent = "start";
            middle.remove();
            chatSection.classList.remove("hidden");
            
        });
        downloadElement.classList.remove("hidden");
        youMessage.textContent = textInput;
        const message = "Merhaba Musa! Size nasıl yardımcı olabilirim? Herhangi bir sorunuz var mı veya konuşmak istediğiniz bir konu var mı?";
        for (let i = 0; i < message.length; i++) {
            setTimeout(() => {
                chatMessage.textContent += message[i];
            }, 50 * i); // Her bir karakter arasında 100ms gecikme ekleyin
        }
        input.value = "";
    } else {
        // Boş giriş durumu
    }

    e.preventDefault();
}
