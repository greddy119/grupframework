import {$} from '@core/dom';
export const tableResize = (event, $root) => {
  if (event.target.dataset.resize) {
    const $resizer = $(event.target);
    const type = $resizer.data.resize;
    const $parent = $resizer.closest('[data-type = "resizable"]');
    const cell = $root.findAll(`[data-col = "${$parent.data.col}"]`);
    const coords = $parent.getCoords();
    const siteProperty = type === 'col' ? 'height' : 'width';
    let value;
    $resizer.css({
      opacity: 1,
      zIndex: 1000,
      [siteProperty]: '1000vw',
    });
    document.onmousemove = (event) => {
      if (type === 'col') {
        const delta = event.pageX - coords.right;
        value = coords.width + delta;
        $resizer.css({right: `${-delta}px`});
      } else {
        const delta = event.pageY - coords.bottom;
        value = coords.height + delta;
        $resizer.css({bottom: `${-delta}px`});
      }
    };
    document.onmouseup = () => {
      if (type === 'col') {
        $parent.css({width: `${value}px`});
        $resizer.css({right: 0, opacity: 0});
        cell.forEach((item)=> {
          item.style.width = `${value}px`;
        });
      } else {
        $parent.css({height: `${value}px`});
        $resizer.css({bottom: 0, opacity: 0});
      }
      document.onmousemove = null;
    };
  }
};
