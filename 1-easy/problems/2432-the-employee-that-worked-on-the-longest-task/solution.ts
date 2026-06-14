function hardestWorker(n: any, logs: any): boolean | number | string | any {
  """
  :type n: int
  :type logs: List[List[int]]
  :rtype: int
  """
  return logs[max(Array.from({length: (logs}, (_, i) => i).length), key=lambda x: (logs[x][1]-(logs[x-1][1] if x-1 >= 0 else 0), -logs[x][0]))][0];
}

export { hardestWorker };
