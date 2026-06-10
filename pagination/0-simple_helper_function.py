#!/usr/bin/env python3
"""Pagination helper function module."""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """Return a tuple containing start and end indexes."""

    start_index = (page - 1) * page_size
    end_index = page * page_size

    return (start_index, end_index)
	
