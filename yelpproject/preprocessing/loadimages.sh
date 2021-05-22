yourfilenames=`ls ./data/yelp_photos/photos/*.jpg`
for eachfile in $yourfilenames
do
  mongofiles --db YelpProject --prefix Photos put $eachfile
done