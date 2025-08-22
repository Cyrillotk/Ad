// Address Book Object
const addressBook = {
    contacts: [],

    addContact: function (name, email, phone) {
        const contact = {
            name: name,
            email: email,
            phone: phone
        };
        this.contacts.push(contact);
        this.displayContacts();  
    },

    displayContacts: function () {
        const contactsList = document.getElementById('contacts');
        contactsList.innerHTML = ''; 

        for (let i = 0; i < this.contacts.length; i++) {
            const contact = this.contacts[i];
            const listItem = document.createElement('li');
            listItem.textContent = `${contact.name} | Email: ${contact.email || 'N/A'} | Phone: ${contact.phone || 'N/A'}`; 

            contactsList.appendChild(listItem);
        }
    }
};


document.getElementById('add-button').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name.trim() === '') {
        alert('Name is required.');
        return;
    }

    addressBook.addContact(name, email, phone);

    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
});



addressBook.displayContacts();
