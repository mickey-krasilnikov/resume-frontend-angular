import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expiration',
})
export class ExpirationPipe implements PipeTransform {
  transform(expirationDate: Date | string | undefined): string {
    if (!expirationDate) {
      return 'Never expires';
    }

    try {
      const today = new Date();
      const date =
        typeof expirationDate === 'string'
          ? new Date(expirationDate)
          : expirationDate;
      const dateStrings = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

      return date >= today
        ? `Expires on ${dateStrings}`
        : `Expired on ${dateStrings}`;
    } catch (error) {
      console.error(error);
      return expirationDate.toString();
    }
  }
}
