let cartItems = [];

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-250px";
  document.getElementById("overlay").style.width = "100%";
  document.getElementById("overlay").style.opacity = "0.8";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("overlay").style.width = "0";
  document.getElementById("overlay").style.opacity = "0";
}

function openCartModal() {
  document.getElementById("cartModal").style.display = "block";
  document.getElementById("overlay").style.width = "100%";
  document.getElementById("overlay").style.opacity = "0.8";
}

function closeCartModal() {
  document.getElementById("cartModal").style.display = "none";
  document.getElementById("overlay").style.width = "0";
  document.getElementById("overlay").style.opacity = "0";
}

function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  updateCart();
  showAlert(itemName);
}

function updateCart() {
  let cartItemsModal = document.getElementById("cartItemsModal");
  cartItemsModal.innerHTML = "";
  let total = 0;
  cartItems.forEach((item, index) => {
    const itemId = `item-${index}`;
    cartItemsModal.innerHTML += `
      <div id="${itemId}" class="cart-item">
        <p>${item.name}: $${item.price}</p>
        <button onclick="removeFromCart('${itemId}')">Eliminar</button>
      </div>`;
    total += item.price;
  });
  cartItemsModal.innerHTML += `<h3>Total: $${total}</h3>`;
}
function removeFromCart(itemId) {
  const index = itemId.split("-")[1]; // Extraer el índice del identificador
  cartItems.splice(index, 1); // Eliminar el elemento del carrito
  updateCart(); // Actualizar el carrito después de eliminar el elemento
}


function showAlert(itemName) {
  const alertContainer = document.createElement("div");
  alertContainer.classList.add("custom-alert");
  alertContainer.textContent = `¡${itemName} ha sido añadido al carrito!`;
  document.body.appendChild(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
}

document.getElementById("overlay").addEventListener("click", closeCartModal);

function clearCart() {
  cartItems = []; // Vaciar el array de productos del carrito
  updateCart(); // Actualizar la vista del carrito
}
function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  updateCart();
  showAlert(itemName);
  updateCartItemCount(); // Actualiza el contador de productos en el icono del carrito
}

function updateCartItemCount() {
  const cartItemCountElement = document.getElementById("cartItemCount");
  cartItemCountElement.textContent = cartItems.length; // Actualiza el contador con la cantidad de elementos en el carrito
}
function payCart() {
  // Aquí podrías realizar acciones adicionales relacionadas con el pago, como procesamiento de pagos, etc.
  // Pero para el propósito de esta implementación, simplemente vaciaremos el carrito.
  cartItems = []; // Vaciar el carrito
  updateCart(); // Actualizar la vista del carrito
  updateCartItemCount(); // Actualizar el contador de productos en el icono del carrito
  closeCartModal(); // Cerrar el modal del carrito después de pagar
}