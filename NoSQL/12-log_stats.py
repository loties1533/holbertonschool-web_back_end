#!/usr/bin/env python3
"""
stat logs Nginx dans MongoDB
"""
from pymongo import MongoClient


def log_stats():
    """
     analyse la collection nginx et affiche les stat
      """
    client = MongoClient('mongodb://127.0.0.1:27017')
    ma_collection = client.logs.nginx

    nombre_total = ma_collection.count_documents({})
    print(f"{nombre_total} logs")

    print("Methods:")
    liste_methodes = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    for methode in liste_methodes:
        compte = ma_collection.count_documents({"method": methode})
        print(f"\tmethod {methode}: {compte}")

    verif_status = ma_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{verif_status} status check")


if __name__ == "__main__":
    log_stats()
