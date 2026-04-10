#!/usr/bin/env python3
"""
Ce module mesure le temps d'exécution de plusieurs compréhensions
asynchrones lancées en parallèle
"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Lance 4 fois async_comprehension en parallèle avec gather,
    mesure le temps total et le renvoie
    """
    start = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.perf_counter()
    return end - start
