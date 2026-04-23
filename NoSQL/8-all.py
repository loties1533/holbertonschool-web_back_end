#!/usr/bin/env python3
"""
 module pour lister tous les documents d une collection MongoDB
 """


def list_all(mongo_collection):
    """
    liste tous les documents dans une collection
    retourne une liste vide si aucun document
    """
    return list(mongo_collection.find())
