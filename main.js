function showSection(id) {
  document.querySelectorAll('.content').forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');

  // ⭐ FIX LỖI: luôn cuộn về đầu khi đổi mục
  window.scrollTo({ top: 0, behavior: "smooth" });
}
