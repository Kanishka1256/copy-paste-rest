document.addEventListener('copy', e => e.stopImmediatePropagation(), true);
document.addEventListener('paste', e => e.stopImmediatePropagation(), true);
document.addEventListener('cut', e => e.stopImmediatePropagation(), true);

alert("Copy/Paste restriction bypass attempt done. Try now.");