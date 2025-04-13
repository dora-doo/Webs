document.querySelectorAll('.btn-luxury').forEach(button => {
  button.addEventListener('click', function () {
    const category = this.closest('section').id;
    console.log(`WhatsApp button clicked for: ${category}`);

    // Play click sound
    const sound = document.getElementById('clickSound');
    if (sound) sound.play();

    // Show popup
    const popup = document.createElement('div');
    popup.className = 'popup-message';
    popup.textContent = 'Opening WhatsApp...';
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 2000);

    // Click animation
    this.classList.add('clicked-effect');
    setTimeout(() => {
      this.classList.remove('clicked-effect');
    }, 300);
  });
});