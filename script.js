const form = document.querySelector('#contact-form');
const phoneBookList = document.querySelector('#phone-book-list');
const contacts = [];

// Prepopulate form fields with default values
document.querySelector('#first-name').value = 'Coder';
document.querySelector('#last-name').value = 'Byte';
document.querySelector('#phone').value = '8885559999';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const phone = document.querySelector('#phone').value;

  // Add contact to list of contacts
  contacts.push({
    firstName,
    lastName,
    phone,
  });

  // Sort contacts by last name
  contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));

  // Clear phone book list
  phoneBookList.innerHTML = '';

  // Add contacts to phone book list
  contacts.forEach((contact) => {
    const li = document.createElement('li');
    li.textContent = `${contact.firstName} ${contact.lastName} - ${contact.phone}`;
    phoneBookList.appendChild(li);
  });

   // Clear form fields
   form.reset();
});
