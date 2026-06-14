function dayOfYear(): boolean | number | string | any {
  def dayOfMonth(M):
      return (28 if (M == 2) else 31-(M-1)%7%2);
}

export { dayOfYear };
