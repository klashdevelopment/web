var contactPage = `<sipro-text data-sipboldness=600>Here are all the contacts for KlashDevelopment.</sipro-text>
<br><button onclick="window.location.href='index.html'">Go Back</button><br><br>
Twitter: (click) <a href="https://twitter.com/KlashDev">@klashdev</a><br>
Discord: (click) <a href="https://dsc.gg/klashdev">dsc.gg/klashdev</a><br>
TikTok: (click) <a href="https://tiktok.com/@klashdevelopment">@klashdevelopment</a><br>
Email: (click) <a href="mailto:developmentklash@gmail.com">developmentklash@gmail.com</a><br>`
function Contact() {
  document.querySelector(".content").innerHTML = contactPage;
}