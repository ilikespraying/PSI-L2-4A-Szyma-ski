document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=Gm44VzvSE0-hn0s9'
    });
});

const root = document.documentElement;
let darkmode = true;

document.querySelectorAll(".theme").forEach(card => {
    card.addEventListener("click", () => {
        if(darkmode){
            root.style.setProperty("--bg-color"," #a7a7a8");
            root.style.setProperty("--primary"," #2e2e2e");
            darkmode = false;
        }else{
            root.style.setProperty("--bg-color"," #0f172a");
            root.style.setProperty("--primary"," #646464");
            darkmode = true;
        }
        
    });
});