import { BadRequestException } from '@nestjs/common';

export function parseQueryFields(
  paramFields: string,
  queryFieldsValid: string[],
): string[] {
  if (!paramFields) {
    return [];
  }
  const fields: string[] = paramFields.split(',').map((field) => field.trim());
  let fieldsResult: string[] = [];
  fields.forEach((field) => {
    if (queryFieldsValid.includes(field)) {
      fieldsResult.push(field);
    }
  });
  return fieldsResult;
}
