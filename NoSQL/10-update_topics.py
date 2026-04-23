#!/usr/bin/env python3
"""
module MAJ topics dans MongoDB
 """


def update_topics(mongo_collection, name, topics):
    """
    modifie tous les sections d un document scolaire suivant le nom demander
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
