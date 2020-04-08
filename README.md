# Resource Catalog
**Wiki of Tech Info used as a reference**

### TO-DO Tasks
- HTTP Verbs per Resource Type
    - Using Express Router
        - GET
        - POST
        - PUT
        - PATCH
        - DELETE
- Simple Views with EJS
    - Home/Directory
    - List Page per Resource Type
        - Articles as Links
        - Vocab (Eventually)
        - Concepts (Eventually)
    - Details Page for Resources Types
        - Individual Page showing more details
        - With Edit & Delete 
    - Create Page for Resources Types
- Create Database in MongoDB Atlas
- Build Data Access Layer per Resource Type
    - Connected to Mongo
        - InsertOne/InsertMany (CREATE)
        - Find (READ)
        - Upsert (UPDATE/PUT)
        - UpdateOne/UpdateMany (UPDATE/PATCH)
        - Remove (DELETE)
    
### Data Model

ARTICLE 
```
{
    "title": STRING,
    "author": STRING,
    "link": URL as a STRING,
    "desc": STRING, 
    "topics": ARRAY of STRINGs,
    "dateAdded": DATE
}
```