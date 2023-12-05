export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }
  get rows() {
    let rows = this.matrix;
    rows = rows.split("\n");
    const mappedResult = rows.map((row) => {
      const splitResult = row.split(" ");
      return splitResult.map((number) => {
        return Number(number);
      });
    });
    return mappedResult;
  }
  get columns() {
    const columns = [];

    for (let i = 0; i <= this.rows.length; i++) {
      columns[i] = this.rows.map((row) => {
        return row[i];
      });
    }
    return columns;
  }
}
