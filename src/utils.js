export function formatDate(date) {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function sortByDateDesc(array) {
  return array.sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);

    return dateB - dateA;
  });
}
