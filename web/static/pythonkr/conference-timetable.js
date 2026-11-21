document.querySelectorAll('.timetable-scroll').forEach((scroller) => {
  scroller.classList.add('has-sticky-time');
  scroller.addEventListener('focusin', ({ target }) => {
    const timeHeader = target.closest('tr')?.querySelector('th[scope="row"]');
    if (
      !timeHeader || getComputedStyle(timeHeader).position !== 'sticky' ||
      scroller.scrollWidth <= scroller.clientWidth
    ) return;

    // Let the browser finish its focus scroll before accounting for the sticky column.
    requestAnimationFrame(() => {
      if (document.activeElement !== target) return;

      const left = target.getBoundingClientRect().left;
      const headerRight = timeHeader.getBoundingClientRect().right;
      if (left < headerRight + 4) {
        scroller.scrollBy({ left: left - headerRight - 4, behavior: 'instant' });
      }
    });
  });
});
