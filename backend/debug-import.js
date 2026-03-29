// Run this with `node debug-import.js` to capture import-time errors from server.js
(async () => {
  try {
    await import('./server.js');
    console.log('server.js imported successfully');
  } catch (err) {
    console.error('Import error detected:');
    console.error(err && err.stack ? err.stack : err);
    process.exit(1);
  }
})();
