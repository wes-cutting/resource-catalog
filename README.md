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

### RESOURCES  
-CSS
 - [How To Create a Modal Box](https://www.w3schools.com/howto/howto_css_modals.asp)
 - [CSS Tooltip](https://www.w3schools.com/css/css_tooltip.asp)

-Regex
 - [Regex Cheatsheet](https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html#zz-2.2)