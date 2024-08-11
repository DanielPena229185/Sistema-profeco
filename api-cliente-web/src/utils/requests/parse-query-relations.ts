export function parseQueryRelations(
  paramRelations: string,
  queryRelations: string[],
): string[] {
  if (!paramRelations) {
    return [];
  }
  const relations: string[] = paramRelations
    .split(',')
    .map((relation) => relation.trim());
  const relationsResult: string[] = [];
  relations.forEach((relation) => {
    if (queryRelations.includes(relation)) {
      relationsResult.push(relation);
    }
  });
  return relationsResult;
}
