#!/usr/bin/env python3
"""Module documentation."""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns the expected result."""

    def multiplier_func(n: float):
        return n * multiplier

    return multiplier_func
