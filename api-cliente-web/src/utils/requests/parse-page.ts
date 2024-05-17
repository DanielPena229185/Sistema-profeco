export function parsePage(pageParam: string): number {
  if (pageParam === undefined) {
    return 1;
  }
  let page: number = parseInt(pageParam) || 0;
  if (page < 0) {
    page = 1;
  }
  if (page > 1000000) {
    page = 1000000;
  }
  return page;
}
