#!/bin/bash

DB=$1
COLLECTIONS=$(mongo mongodb://juan:juan@localhost:27017/$DB --quiet --eval "db.getCollectionNames()" | jq '. | join(" ")')
echo $COLLECTIONS;

for collection in $COLLECTIONS; do
    echo "Exporting $DB/$collection ..."
    mongoexport -d $DB -c $collection -o $collection.json
done