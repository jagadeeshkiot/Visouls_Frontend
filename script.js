const form = document.getElementById('notifyForm');
const message = document.getElementById('message');


async function sendEmail(emailObj) {
return axios.post(CONFIG.REST_API_BASE_URL, emailObj);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  
  if (email) {
    try {
      await sendEmail({ email });
      message.textContent = '✅ Thanks! You’ll be notified when we launch.';
      message.style.color = '#00ff66';
      form.reset();
    } catch (error) {
      console.error("Error saving email:", error);
      message.textContent = '❌ Server error. Please try again later.';
      message.style.color = 'red';
    }
  } else {
    message.textContent = '❌ Please enter a valid email.';
    message.style.color = 'red';
  }
});
