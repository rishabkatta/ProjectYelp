mongoimport --db YelpProject --collection Business --type json --file ./data/yelp_academic_dataset_business.json
mongoimport --db YelpProject --collection Checkin --type json --file ./data/yelp_academic_dataset_checkin.json
mongoimport --db YelpProject --collection Review --type json --file ./data/yelp_academic_dataset_Review.json
mongoimport --db YelpProject --collection Tip --type json --file ./data/yelp_academic_dataset_tip.json