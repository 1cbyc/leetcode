import pandas as pd

def selectData(students: pd.DataFrame) -> pd.DataFrame:
    student_101 = students[students['student_id'] == 101]
    result = student_101[['name', 'age']]
    return result
