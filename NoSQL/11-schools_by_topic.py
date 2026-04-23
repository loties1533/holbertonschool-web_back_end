#!/usr/bin/env python3
"""
module pour filtrer les école par sujet spécifique (topics)
"""


def schools_by_topic(mongo_collection, topic):
    """
    retourne une liste des écoles avec un sujet (topic)
    """
    return list(mongo_collection.find({"topics": topic}))
