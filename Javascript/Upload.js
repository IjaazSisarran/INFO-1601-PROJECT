var l = document.getElementById("loader");

window.addEventListener("load", function(){
  l.style.display = "none";
})

const form = document.getElementById('product-form');
const imageInput = document.getElementById('image');
const previewImage = document.getElementById('preview');

// Show preview image when user selects an image
imageInput.addEventListener('change', function() {
	if (this.files && this.files[0]) {
		const reader = new FileReader();
		reader.onload = function(e) {
			previewImage.src = e.target.result;
			previewImage.style.display = 'block';
		}
		reader.readAsDataURL(this.files[0]);
	}
});

// Validate form input and submit form using AJAX when user clicks the submit button
form.addEventListener('submit', function(e) {
	e.preventDefault();

	const name = document.getElementById('name').value.trim();
	const price = document.getElementById('price').value.trim();
	const contact = document.getElementById('contact').value.trim();
	const description = document.getElementById('description').value.trim();
	const image = document.getElementById('image').files[0];

	// Validate form input
	if (name === '') {
		alert('Please enter the product name.');
		return;
	}
	if (isNaN(price) || price === '') {
		alert('Please enter a valid price.');
		return;
	}
	if (!(/^\d{10}$/.test(contact))) {
		alert('Please enter a valid 10-digit contact number.');
		return;
	}
	if (description === '') {
		alert('Please enter the product description.');
		return;
	}
	if (!image) {
		alert('Please select a product image.');
		return;
	}

	// Disable submit button to prevent multiple submissions
	const submitButton = form.querySelector('button[type="submit"]');
	submitButton.disabled = true;
	submitButton.textContent = 'Uploading...';

	// Submit form using AJAX
	const formData = new FormData();
	formData.append('name', name);
	formData.append('price', price);
	formData.append('contact', contact);
	formData.append('description', description);
	formData.append('image', image);
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'upload.php', true);
	xhr.onload = function() {
		submitButton.disabled = false;
		submitButton.textContent = 'Submit';
		if (this.status === 200) {
			alert('Product uploaded successfully!');
			form.reset();
			previewImage.style.display = 'none';
		} else {
			alert('Error uploading product.');
		}
	}
	xhr.send(formData);
});
