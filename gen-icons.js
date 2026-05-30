const { createCanvas } = require('canvas');
const fs = require('fs');

function makeIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#0A0A0A';
  ctx.fillRect(0, 0, size, size);
  
  // Gold accent bar
  const barH = size * 0.06;
  ctx.fillStyle = '#C8A96E';
  ctx.fillRect(size * 0.15, size * 0.2, size * 0.7, barH);
  
  // R letter
  ctx.fillStyle = '#C8A96E';
  ctx.font = `bold ${size * 0.45}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('R', size / 2, size * 0.6);
  
  return canvas.toBuffer('image/png');
}

try {
  fs.writeFileSync('/home/claude/pwa-tasks/icon-192.png', makeIcon(192));
  fs.writeFileSync('/home/claude/pwa-tasks/icon-512.png', makeIcon(512));
  console.log('Icons created');
} catch(e) {
  console.log('Canvas not available, creating placeholder icons');
  // Create minimal valid PNG (1x1 dark pixel)
  const png1x1 = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
  fs.writeFileSync('/home/claude/pwa-tasks/icon-192.png', png1x1);
  fs.writeFileSync('/home/claude/pwa-tasks/icon-512.png', png1x1);
}
