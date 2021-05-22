conn = new Mongo("localhost:27017");
db = conn.getDB("YelpProject");
coll = db.getCollection("Business");


print("Removing all Cinema halls");
result = coll.remove({ categories: { $regex: '\w*cinema\w*', $options: "si" } });
print("");
print("All Cinema Halls removed from Yelp Dataset");

printjson( result );

print("Removing all Restaurants");
result = coll.remove({ categories: { $regex: '\w*restaurant\w*', $options: "si" } });
print("");
print("All Restaurants removed from Yelp Dataset");

printjson( result );