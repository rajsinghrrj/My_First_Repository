// Example JS: You can expand with interactivity later
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      alert(`You clicked the "${button.innerText}" button.`);
    });
  });
  