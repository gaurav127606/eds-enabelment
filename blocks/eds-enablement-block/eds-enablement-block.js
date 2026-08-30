export default function decorate(block) {
  [...block.children].forEach((row) => {
    [...row.children].forEach((cell) => {
      if (cell.querySelector('picture')) {
        cell.classList.add('eds-enablement-block-image');
      } else {
        cell.classList.add('eds-enablement-block-text');
      }
    });
  });
}
