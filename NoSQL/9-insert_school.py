#!/usr/bin/env python3
"""
module pour ajouter un document dans une collection
"""


def insert_school(mongo_collection, **kwargs):
    """
    ajoute un nouveau document dans une collection basé sur kwargs
    renvoie le nouvel _id
    """
    resultat = mongo_collection.insert_one(kwargs)
    return resultat.inserted_id
