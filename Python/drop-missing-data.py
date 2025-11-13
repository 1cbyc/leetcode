import pandas as pd

def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:
    students.dropna(axis = 0, how = "any", subset = "name", inplace = True)
    return students
