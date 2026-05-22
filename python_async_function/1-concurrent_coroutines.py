#!/usr/bin/env python3
"""Module documentation."""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Returns the expected result."""

    tasks = []

    for i in range(n):
        tasks.append(wait_random(max_delay))

    results = []

    for task in asyncio.as_completed(tasks):
        result = await task
        results.append(result)

    return results
