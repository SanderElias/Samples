export const weekDayNames: string[] = weekDays();
export const monthNames: string[] = months();

function weekDays(countryCode = navigator.language): string[] {
  const date = new Date();
  const day = date.getDate();
  return Array.from({ length: 7 })
    .map((e, i) => {
      const workDate = new Date(date.setDate(day + i));
      return [
        new Intl.DateTimeFormat(countryCode, {
          weekday: 'long',
        }).format(workDate),
        workDate.getDay(),
      ];
    })
    .sort((a, b) => (a[1] < b[1] ? -1 : 1))
    .map(d => d[0] as string);
}

function months(countryCode = navigator.language) {
  return Array.from({ length: 12 }).map((e, i) => {
    return new Intl.DateTimeFormat(countryCode, {
      month: 'short',
    })
      .format(new Date(2000, i, 2))
      .substr(0, 3);
  });
}
