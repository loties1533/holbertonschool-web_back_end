#!/usr/bin/env python3
"""
types mixtes avec utilisation de union
pour accepter plusieurs type dans une meme liste
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    recup une liste de int et float et renvoie la somme
    """
    return float(sum(mxd_lst))
