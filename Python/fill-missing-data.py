import pandas as pd

def fillMissingValues(products: pd.DataFrame) -> pd.DataFrame:
    products['quantity'] = products['quantity'].fillna(0)
    return products

    products['quantity'].fillna(0, inplace = True)
    return products

    products.fillna(value={'quantity': 0}, inplace = True)
    return products

    products.loc[products['quantity'].isnull(),'quantity'] = 0
    return products

    result = []
    for i in products.quantity:
        if pd.isna(i):
            result.append(0)
            continue
        result.append(i)
    products['quantity'] = result
    return products

# https://leetcode.com/problems/fill-missing-data/