#!/usr/bin/env python3
"""
module qui execute plusieurs task en meme temps
"""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """execute n task_wait_random en meme temps et retourne
      les delais dans l ordre d execution
    """
    tasks = []
    ma_list = []
    for i in range(n):
        task = task_wait_random(max_delay)
        tasks.append(task)
    for task in asyncio.as_completed(tasks):
        delay = await task
        ma_list.append(delay)
    return ma_list
