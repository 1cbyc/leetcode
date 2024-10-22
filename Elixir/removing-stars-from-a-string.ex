defmodule Solution do
  @spec remove_stars(s :: String.t) :: String.t
  def remove_stars(s) do
    s
    |> String.split("", trim: true)
    |> Enum.reverse()
    |> compute(0, [])
    |> Enum.join("")
  end

  defp compute([], _, ret), do: ret # all done
  defp compute(["*" | s], stars, ret), do: compute(s, stars+1, ret) # increase star count
  defp compute([c | s], 0, ret), do: compute(s, 0, [c | ret])
  defp compute([c | s], stars, ret), do: compute(s, stars-1, ret)
end

# https://leetcode.com/problems/removing-stars-from-a-string/
