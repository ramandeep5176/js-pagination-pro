const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pagesIndex) => {
    return `
    <button class="page-btn ${
      activeIndex === pagesIndex ? "active-btn" : "null"
    }" data-index="${pagesIndex}">
    ${pagesIndex + 1}
    </button>`;
  });
  // prev-next
  btns.push(`<button class="next-btn">next</button>`);

  btns.unshift(`<button class="prev-btn">prev</button>`);

  container.innerHTML = btns.join("");
};

export default displayButtons;
