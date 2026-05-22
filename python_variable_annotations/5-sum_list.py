#!/usr/bin/env python3
"""Module documentation."""

def sum_list(input_list: list) -> float:
    """Returns the expected result."""
    new_list = list(map(float, input_list))

    return sum(map(float, new_list))
