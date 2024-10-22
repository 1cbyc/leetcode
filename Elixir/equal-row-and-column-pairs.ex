defmodule Solution do
  @spec equal_pairs(grid :: [[integer]]) :: integer
  def equal_pairs(grid) do
    Enum.frequencies(grid)
    |> then(fn map ->
      Enum.zip_with(grid, &(&1))
      |> Enum.map(&(Map.get(map, &1, 0)))
    end)
    |> Enum.sum()
  end
end

# https://leetcode.com/problems/equal-row-and-column-pairs/
