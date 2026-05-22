#!/usr/bin/env python3
"""Module documentation."""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Returns the expected result."""

    tasks = []

    for i in range(n):
        tasks.append(task_wait_random(max_delay))

    results = []

    for task in asyncio.as_completed(tasks):
        result = await task
        results.append(result)

    return results
