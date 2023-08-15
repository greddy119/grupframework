const CODES = {
  A: 65,
  Z: 90,
};
const createCol = (col, index) => {
  return `<div class="column" data-type="resizable" data-col="${index}">
${col}
<div class="col-resize" data-resize="col"></div>
</div>`;
};
const createRow = (index, content) => {
  const resizer = index ?
    `<div class="row-resize" data-resize="row"></div>` : ``;
  return `<div class="row">
             <div class="row-info">${index ? index : ''}
            ${resizer}
             </div>
             <div class="row-data">${content}</div>
          </div>  
  `;
};
const createCell = (_, index) => {
  return `
    <div class="cell" contenteditable="true" data-col="${index}"></div>
    `;
};
const toChar = (_, index) => {
  return String.fromCharCode(CODES.A + index);
};

export const createTable = (rowsCount= 15) =>{
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('');
  rows.push(createRow(null, cols));
  for (let i = 0; i < rowsCount; i++) {
    const cell = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('');
    rows.push(createRow(i+1, cell));
  }
  return rows.join('');
};
