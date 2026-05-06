document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.getElementById("envelope");
  const btn_open = document.getElementById("open");
  const btn_reset = document.getElementById("reset");

  envelope.addEventListener("click", function () {
    open();
  });
  btn_open.addEventListener("click", function () {
    open();
  });
  btn_reset.addEventListener("click", function () {
    close();
  });

  function open() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
  }
  function close() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
  }
});