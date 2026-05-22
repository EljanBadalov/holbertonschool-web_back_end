#!/usr/bin/env python3
"""Module documentation."""
from typing import Union


def to_kv(k: str, v: Union[int, float]) -> tuple[str, float]:
    """Returns the expected result."""
    
    return (k, v ** 2) 
