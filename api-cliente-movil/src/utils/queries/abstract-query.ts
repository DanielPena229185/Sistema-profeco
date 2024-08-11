export class AbstractQuery {
  page: number;
  count: number;

  constructor(page: number, count: number) {
    this.page = page;
    this.count = count;
  }
}
