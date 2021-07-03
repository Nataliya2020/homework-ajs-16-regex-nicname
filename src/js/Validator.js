export default class Validator {
  validateUsername(name) {
    const basicCheck = /^[A-Za-z][\w-]+[A-Za-z]$/;
    const checkTheNumbers = /\d{4}/;

    const finalVerification = basicCheck.test(name) && !checkTheNumbers.test(name);

    if (finalVerification) {
      this.name = name;
      return true;
    }
    throw new Error('Имя не соответствует правилам');
  }
}
