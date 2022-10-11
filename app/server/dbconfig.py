from pymongo import MongoClient

conn = MongoClient("mongodb+srv://adminarticulos:arti654321@cluster0.c635bpi.mongodb.net/?retryWrites=true&w=majority")
db = conn.pokemon  # Nombre de la BBDD
