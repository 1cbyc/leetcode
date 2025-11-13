object Solution {
  def isArraySpecial(nums: Array[Int]): Boolean = {
    if (nums.length <= 1) {
      true
    } else {
      var ok = true
      var i = 1
      while (i < nums.length && ok) {
        if ((nums(i) & 1) == (nums(i - 1) & 1)) {
          ok = false
        }
        i += 1
      }
      ok
    }
  }
}

