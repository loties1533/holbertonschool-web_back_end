#!/usr/bin/env python3
"""
Module pour calculer la longueur des éléments d'un iterable
 Duck Typing avec iterable et sequence
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    prend un iterable d élément et renvoie liste de tuple
    chaque tuple contient élément et longueur
    """
    return [(i, len(i)) for i in lst]
