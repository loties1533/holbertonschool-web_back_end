#!/usr/bin/env python3
'''
module qui crée une fonction pour multiplier des nombres
'''
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    crée une fonction qui multiplie par le facteur donné (multiplier)
    """
    def action(number: float) -> float:
        """
        fait la multiplication au nombre passé en paramètre
        """
        return number * multiplier

    return action
