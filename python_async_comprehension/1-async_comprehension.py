#!/usr/bin/env python3
"""Module pour utiliser une compréhension asynchrone."""

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    retourne une liste de 10 nombres aléatoires entre 0 et 10
    """
    return [nbr async for nbr in async_generator()]
