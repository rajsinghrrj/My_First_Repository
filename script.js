// Example JS: You can expand with interactivity later
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      alert(`You clicked the "${button.innerText}" button.`);
    });
  });
  <script>
  document.getElementById('aboutLink').addEventListener('click', function (e) {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1024) {
      // For mobile/tablet – open modal
      e.preventDefault();
      openAboutModal(); // your modal function here
    } else {
      // For laptop – navigate to about.html
      window.location.href = 'about.html';
    }
  });

  function openAboutModal() {
    alert("Open modal or show button to reveal ABOUT section here.");
    // Replace this with actual modal logic if you have one.
  }
</script>
