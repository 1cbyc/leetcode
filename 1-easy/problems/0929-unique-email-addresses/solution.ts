function numUniqueEmails(emails: any): boolean | number | string | any {
  """
  :type emails: List[str]
  :rtype: int
  """
  def convert(email):
      name, domain = email.split('@')
      name = name[:name.index('+')]
      return "".join(["".join(name.split(".")), '@', domain]);
}

export { numUniqueEmails };
