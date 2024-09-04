import pandas as pd

def selectData(students: pd.DataFrame) -> pd.DataFrame:
    student_101 = students[students['student_id'] == 101]
    result = student_101[['name', 'age']]
    return result

# DataFrame students
# +-------------+--------+
# | Column Name | Type   |
# +-------------+--------+
# | student_id  | int    |
# | name        | object |
# | age         | int    |
# +-------------+--------+
#
# Input:
# +------------+---------+-----+
# | student_id | name    | age |
# +------------+---------+-----+
# | 101        | Ulysses | 13  |
# | 53         | William | 10  |
# | 128        | Henry   | 6   |
# | 3          | Henry   | 11  |
# +------------+---------+-----+
#
# the question solved is https://leetcode.com/problems/select-data