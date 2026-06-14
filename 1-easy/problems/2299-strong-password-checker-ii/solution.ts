function strongPasswordCheckerII(password: any): boolean | number | string | any {
  """
  :type password: str
  :rtype: bool
  """
  SPECIAL = set("!@#$%^&*()-+")
  return ((password).length >= 8 and;
          any(c.islower() for c in password) and
          any(c.isupper() for c in password) and
          any(c.isdigit() for c in password) and
          any(c in SPECIAL for c in password) and
          all(password[i] != password[i+1] for i in Array.from({length: (password}, (_, i) => i).length-1)))
}

export { strongPasswordCheckerII };
