import pandas as pd
from typing import List

def getDataframeSize(players: pd.DataFrame) -> List[int]:
    rows, columns = players.shape
    return [rows, columns]
