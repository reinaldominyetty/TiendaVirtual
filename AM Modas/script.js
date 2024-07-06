let cart = [];

function addToCart(product, price) {
    cart.push({product, price});
    alert(`${product} agregado al carrito`);
}

function openModal() {
    document.getElementById('paymentModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('paymentModal').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
});