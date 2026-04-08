#!/usr/bin/env python3
"""
mesure le temps d'execution total de wait_n
"""

import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """calcule le temps d'execution de wait_n(n, max_delay)"""
    start_time = time.perf_counter()

    asyncio.run(wait_n(n, max_delay))

    end = time.perf_counter()
    total_time = end - start_time

    return total_time / n
