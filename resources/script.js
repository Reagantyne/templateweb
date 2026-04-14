<script>
  function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
      alert("Please rotate your device to landscape!");
    }
  }
  window.addEventListener("resize", checkOrientation);
  checkOrientation();
</script>