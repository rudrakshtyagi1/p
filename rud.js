// 1. UNLOCK LOGIC
function unlockSite() {
    const input = document.getElementById('unlock-date').value;
    const correctDate = "30072022"; // Jo tune bataya tha

    if (input === correctDate) {
        // Hide lock screen and show content
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        
        // Start Music
        const music = document.getElementById('bg-music');
        music.play().catch(error => {
            console.log("Autoplay blocked. Music will start on first click.");
        });

        // Trigger any entrance animations here
    } else {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = 'block';
        errorMsg.classList.add('animate-pop');
    }
}

// 2. NO BUTTON MAGIC (Cursor se door bhagna)
const noBtn = document.getElementById('no-btn');

noBtn.addEventListener('mouseover', () => {
    // Isse button screen ke boundaries ke andar hi kahin bhi jump karega
    const i = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const j = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));

    noBtn.style.position = 'fixed'; // Fixed taaki pure screen pe bhage
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

// 3. YES BUTTON CELEBRATION
function sayYes() {
    const propText = document.getElementById('prop-text');
    propText.innerHTML = "I KNEW IT! ❤️ Love you forever, Bacha!";
    
    // Hide buttons
    document.getElementById('no-btn').style.display = 'none';
    document.getElementById('yes-btn').style.display = 'none';

    // Show Letter Section
    document.getElementById('letter-section').style.display = 'block';
    
    // Start Typing the Letter
    startTyping();
    
    // Launch Confetti (Simple Heart Rain)
    setInterval(createHeart, 150);
}

// 4. TYPING EFFECT FOR THE LETTER
const letterContent = "Bacha, pichle 3.5 saal meri life ke sabse haseen pal rahe hain. 30th July 2022 ko jab hum pehli baar mile the, maine nahi socha tha ki tum meri poori duniya ban jaogi. Tumhari smile, tumhara mujhe support karna, aur wo 'Yes' bolne wala din—sab kuch mere dil mein locked hai. I promise to always be there for you, our startups, and our dreams. Happy Valentine's Day! ❤️";

let charIndex = 0;
function startTyping() {
    const target = document.getElementById('typed-text');
    if (charIndex < letterContent.length) {
        target.innerHTML += letterContent.charAt(charIndex);
        charIndex++;
        setTimeout(startTyping, 50); // Speed of typing
    }
}

// 5. FLOATING HEARTS (For Celebration)
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-5vh';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.color = '#ff4d6d';
    heart.style.zIndex = '999';
    heart.style.pointerEvents = 'none';
    heart.style.transition = 'transform 3s linear, opacity 3s';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '0';
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}