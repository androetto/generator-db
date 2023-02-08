# Generator DB

## Data generator for mongodb

> generates random data in a database of your choice and collection

## Example

Request:

> /collections
> body : {
    "database" : "joffer",
    "collection": "user",
    "fields": [{
        "key": "nombre",
        "values" : ["franco","luis"]
    },
    {
        "key": "edad",
        "values": ["20"]
    }]
} 
