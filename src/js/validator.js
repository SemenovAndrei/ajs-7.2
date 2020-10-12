/* eslint-disable no-unused-vars */

/**
 * Validator
 */
class Validator {
  /**
   *
   * @param {string} name - Строка для проверки
   */
  constructor(name) {
    if (typeof name === 'string') {
      this.name = name;
    }
  }

  /**
   * Проверяет name на корректность, согласно правилам
   *
   * Возвращает true в случае успеха
   *
   * @throws {error} - Выбрасывает ошибки name
   */
  validateUsername() {
    if (!this.name.length) {
      throw new Error('Имя должно быть не пустой строкой');
    }
    if (/[^a-z\d-_]/i.test(this.name)) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (/^[\d_-]|\d{3}|[\d_-]$/.test(this.name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире');
    }
    return true;
  }
}

export default Validator;
