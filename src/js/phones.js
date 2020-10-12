/* eslint-disable no-unused-vars */

/**
 *
 * @param {string} phoneNumber - номер для форматирования
 *
 * @throws {error} выбрасывает ошибку 'номер не корректен'
 *
 * Возвращает номер в формате +7хххххххххх (в зависимости от страны)
 */
function numberFormatting(phoneNumber) {
  const numberIncorrect = 'номер не корректен';

  let phone = String(phoneNumber);

  phone = phone.replace(/[\D]/g, '');

  if (phone.length === 9 || phone.length < 7) {
    throw new Error(numberIncorrect);
  }

  switch (phone.length) {
    case (7):
      phone = `+7812${phone}`;
      break;
    case (10):
      phone = `+7${phone}`;
      break;
    case (11):
      phone = `+${phone.replace(/^[8]/, '7')}`;
      break;
    default:
      phone = `+${phone}`;
      break;
  }
  return phone;
}

export default numberFormatting;
