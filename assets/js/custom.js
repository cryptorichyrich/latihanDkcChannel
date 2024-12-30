const iframe = document.getElementById('youtube-iframe');
const container = document.getElementById('youtube-container');

function resizeIframe() {
  const width = container.offsetWidth;
  const height = width * 0.5625; // 16:9 aspect ratio
  iframe.width = width;
  iframe.height = height;
}

window.addEventListener('resize', resizeIframe);
resizeIframe();
