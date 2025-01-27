const nameInput = document.getElementById('name');
const jobTitleInput = document.getElementById('jobTitle');
const companyNameInput = document.getElementById('companyName');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const websiteInput = document.getElementById('website');
const addressInput = document.getElementById('address');
const bgColorInput = document.getElementById('bgColor');
const textColorInput = document.getElementById('textColor');
const gradientInput = document.getElementById('gradient');
const borderShadowInput = document.getElementById('borderShadow');
const logoInput = document.getElementById('logo');
const businessCard = document.getElementById('businessCard');
const logoPreview = document.getElementById('logoPreview');
const backCard = document.getElementById('backCard');

function updateCard() {
  businessCard.querySelector('.name').textContent = nameInput.value || 'John Doe';
  businessCard.querySelector('.job-title').textContent = jobTitleInput.value || 'Software Engineer';
  businessCard.querySelector('.contact-info').innerHTML = `
    <p>🏢Company: ${companyNameInput.value || 'ABC Corp'}</p>
    <p>📞Phone: ${phoneInput.value || '+1234567890'}</p>
    <p>📧Email: ${emailInput.value || 'john.doe@example.com'}</p>
    <p>🌐Website: ${websiteInput.value || 'www.johndoe.com'}</p>
    <p>📍Address: ${addressInput.value || '1234 Elm St, City, State'}</p>
  `;

  if (gradientInput.value !== 'none') {
    businessCard.style.background = gradientInput.value;
  } else {
    businessCard.style.backgroundColor = bgColorInput.value || '#007BFF';
  }

  businessCard.style.color = textColorInput.value || '#FFFFFF';
  businessCard.style.boxShadow = borderShadowInput.value || '0 4px 8px rgba(0, 0, 0, 0.2)';
}

function toggleBackCard() {
  if (backCard.style.display === 'none' || backCard.style.display === '') {
    backCard.style.display = 'block';
  } else {
    backCard.style.display = 'none';
  }
}

function loadLogo(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      logoPreview.innerHTML = `<img src="${e.target.result}" alt="Logo" style="max-width: 100px; max-height: 100px; margin: 10px auto;">`;
    };
    reader.readAsDataURL(file);
  }
}

function downloadCard() {
  html2canvas(businessCard).then(canvas => {
    const link = document.createElement('a');
    link.download = 'Suraj(STM)-card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}

logoInput.addEventListener('change', loadLogo);
document.querySelectorAll('input, select').forEach(input => {
  input.addEventListener('input', updateCard);
});