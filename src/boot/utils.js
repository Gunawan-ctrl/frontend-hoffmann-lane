const formatDate = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('id-ID', { month: 'long' });
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${month} ${day}, ${year} ${hours}:${minutes}`;
}

const formatDateNotTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('id-ID', { month: 'long' });
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

const formatCurrency = (value) => {
  if (!value) return "-";
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

const formatTime = (waktuPublikasi) => {
  const today = new Date()
  const publicationDate = new Date(waktuPublikasi)
  return publicationDate > today
}

export default {
  formatDate,
  formatDateNotTime,
  formatCurrency,
  formatTime,
}
