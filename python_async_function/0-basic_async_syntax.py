#!/usr/bin/env python3
"""Module documentation."""
import asyncio
import random


async def wait_random(max_delay: int = 10):
    """Returns the expected result."""

    random_num = random.uniform(0, max_delay)
    await asyncio.sleep(random_num)
    return random_num
