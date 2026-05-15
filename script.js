// Set the date we're counting down to (Mehndi Event on June 12, 2026, 9:00 PM)
const countDownDate = new Date("Jun 12, 2026 21:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = `
    <div class="countdown-box">
        <span class="countdown-number">${days}</span>
        <span class="countdown-label">Days</span>
    </div>
    <div class="countdown-box">
        <span class="countdown-number">${hours}</span>
        <span class="countdown-label">Hrs</span>
    </div>
    <div class="countdown-box">
        <span class="countdown-number">${minutes}</span>
        <span class="countdown-label">Min</span>
    </div>
    <div class="countdown-box">
        <span class="countdown-number">${seconds}</span>
        <span class="countdown-label">Sec</span>
    </div>
  `;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "<div class='gold-foil' style='font-family: var(--font-heading); font-size: 1.5rem;'>The Celebration Has Begun!</div>";
  }
}, 1000);