#!/usr/bin/env python3
"""
module qui contient une fonction pour la pagination
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    renvoie un tuple contenant les ind de début et de fin de la pagination
    Args:
        page (int): le numero de page
        page_size (int): nombre d'element par page
    Returns:
        un tuple contenant les ind de début et de fin de la pagination
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size

    return (start_index, end_index)
