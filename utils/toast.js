function showToast(message) {
  let toast = document.createElement("div");
  toast.textContent = message;
  toast.className = "toast";
  document.body.appendChild(toast);
  setTimeout(function () {
    toast.style.opacity = "1";
  }, 10);
  setTimeout(function () {
    toast.style.opacity = "0";
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 1800);
}

export default showToast;
