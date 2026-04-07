#!/usr/bin/env python3
"""
module qui transforme clé /valeur en Tuple
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    renvoie un tuple =  chaîne k et carré de v en float
    """
    return (k, float(v * v))
