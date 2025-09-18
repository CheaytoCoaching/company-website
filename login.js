document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const topic = document.getElementById('topic');
  const terms = document.getElementById('terms');
  const result = document.getElementById('result');
  const submitBtn = document.getElementById('submitBtn');

  
  function isEmailValid(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }
  function isPhoneValid(v) {
    return /^[0-9+\-\s()]{6,}$/.test(v);
  }

  function clearErrors() {
    ['err-fname','err-lname','err-email','err-phone','err-topic','err-terms'].forEach(id => {
      document.getElementById(id).textContent = '';
    });
    result.textContent = '';
  }

  function validate() {
    clearErrors();
    let ok = true;

    if (fname.value.trim().length < 2) {
      document.getElementById('err-fname').textContent = 'Enter first name (min 2 chars).';
      ok = false;
    }
    if (lname.value.trim().length < 2) {
      document.getElementById('err-lname').textContent = 'Enter last name (min 2 chars).';
      ok = false;
    }
    if (!isEmailValid(email.value.trim())) {
      document.getElementById('err-email').textContent = 'Enter a valid email.';
      ok = false;
    }
    if (!isPhoneValid(phone.value.trim())) {
      document.getElementById('err-phone').textContent = 'Enter a valid phone.';
      ok = false;
    }
    if (!topic.value) {
      document.getElementById('err-topic').textContent = 'Choose a topic.';
      ok = false;
    }
    if (!terms.checked) {
      document.getElementById('err-terms').textContent = 'You must accept the terms.';
      ok = false;
    }

    return ok;
  }
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validate()) {
      result.textContent = 'Form submitted successfully ✅';
    } else {
      result.textContent = '';
    }
  });

  function updateSubmitState() {
    submitBtn.disabled = !terms.checked;
  }
  terms.addEventListener('change', updateSubmitState);
  updateSubmitState();
});
