// Biscuit bio page — theme toggle + seamless background video loop

(function () {
  const root = document.body;
  const toggleBtn = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'biscuit-theme';

  function applyTheme(theme) {
    root.classList.toggle('dark', theme === 'dark');
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const isDark = root.classList.toggle('dark');
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    });
  }
})();

// CRITICAL LOOP FIX: reset currentTime slightly before the end to avoid
// a black-frame flash while the video buffers its next loop iteration.
const video = document.getElementById('bg-video');
if (video) {
  video.addEventListener('timeupdate', function () {
    if (this.currentTime >= this.duration - 0.15) {
      this.currentTime = 0;
      this.play();
    }
  });
}
