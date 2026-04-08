#!/usr/bin/env python3
"""
Crée une asyncio.Task a partir d'une coroutine
"""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Crée et renvoie une task asyncio planifiée
    """

    return asyncio.create_task(wait_random(max_delay))
