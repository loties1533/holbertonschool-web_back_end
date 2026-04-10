#!/usr/bin/env python3
"""
module contenant une fonction qui utilise un async generator
pour produire des nombres aléatoires
"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[None, None]:
    """
    genere 10 fois un nombre entre 0 et 10
    avec un delais de 1 seconde
    """
    for i in range(10):
        await asyncio.sleep(1)

        yield random.uniform(0, 10)
