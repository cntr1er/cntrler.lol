function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  var str = 'cntrler';
  document.title = '';
  async function typewriteTitle() {
    for (let i = str.length; i > 0; i--) {
      document.title = str.slice(0, i);
      await sleep(90);
    }
    for (let i = 1; i <= str.length; i++) {
      document.title = str.slice(0, i);
      await sleep(130);
    }
    typewriteTitle();
  }
  typewriteTitle();

