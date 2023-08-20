let total = 0;
let discountPrice = 0;

if (total == 0) {
  const purchaseButton = document.getElementById("make-purchase");
  purchaseButton.disabled = true;
}


function handleClick(target) {
  const productTitle = target.childNodes[3].innerText;
  const productPrice = target.childNodes[5].innerText.split(" ")[0];
  const selectedItemContainer = document.getElementById("selectedItems");

  const li = document.createElement("li");
  li.innerText = productTitle;
  li.classList.add("selected-items");
  selectedItemContainer.appendChild(li);

  const totalContainer = document.getElementById("total");
  total = parseInt(total) + parseInt(productPrice);
  totalContainer.innerText = total + " TK";

  const grandTotal = parseInt(total) - parseInt(discountPrice);
  const grandContainer = document.getElementById("grand-total");
  grandContainer.innerText = grandTotal + " TK";

  const purchaseButton = document.getElementById("make-purchase");
  purchaseButton.removeAttribute('disabled');
}

function applyCoupon() {
  const couponCode = document.getElementById("coupon_input").value;
  const validCouponCodes = ["SELL200"];
  const percentage = 0.2;
  const totalPrice = parseInt(
    document.getElementById("total").innerText.split(" ")[0]
  );

  if (validCouponCodes.includes(couponCode)) {
    discountPrice = totalPrice * percentage;
    const discountContainer = document.getElementById("discount");
    discountContainer.innerText = discountPrice.toFixed(2) + " TK";

    const grandContainer = document.getElementById("grand-total");
    const grandTotal = totalPrice - discountPrice;
    grandContainer.innerText = grandTotal + " TK";
    document.getElementById("coupon_input").value = "";
  }
}

function goHome() {
  const totalContainer = document.getElementById("total");
  const grandContainer = document.getElementById("grand-total");
  const discountContainer = document.getElementById("discount");

  totalContainer.innerText = "00";
  grandContainer.innerText = "00";
  discountContainer.innerText = "00";

  const selectedItems = document.getElementById("selectedItems");
  selectedItems.innerHTML = '';
}
