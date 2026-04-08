#!/usr/bin/env python3
"""
fonction asynchrone simple , attend un delais aléatoir et retourn le delais
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:

    """
    attend un delais aléatoirs entre 0 et max_delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
