# API routes

## Object routes

### Read multiple objects

**Method:** GET

**Path:** /registeredObject

**Attributes:** none

**Body:** none

### Read one object

**Method:** GET

**Path:** /registeredObject/:id

**Attributes:** id - the id of an existing object

**Body:** none

### Create one object

**Method:** POST

**Path:** /registeredObject

**Attributes:** none

**Body:**
``` json
{
  "name": "name",
  "code": "code",
  "userId": 2
}
```

### Update one object

**Method:** PUT

**Path:** /registeredObject/:id

**Attributes:** id - the id of an existing object

**Body:**
``` json
{
  "name": "name",
  "code": "code"
}
```

### Delete one object

**Method:** DELETE

**Path:** /registeredObject

**Attributes:** none

**Body:** none

## User routes

### Read multiple users

**Method:** GET

**Path:** /user

**Attributes:** none

**Body:** none

### Read one user

**Method:** GET

**Path:** /user/:id

**Attributes:** id - the id of an existing user

**Body:** none

### Create one user

**Method:** POST

**Path:** /user

**Attributes:** none

**Body:**
``` json
{
  "name": "username",
  "email": "email",
  "type": "admin"
}
```

### Update one user

**Method:** PUT

**Path:** /user/:id

**Attributes:** id - the id of an existing user

**Body:**
``` json
{
  "name": "username",
  "email": "email",
  "type": "admin"
}
```

### Delete one user

**Method:** DELETE

**Path:** /user

**Attributes:** none

**Body:** none

## Log routes

### Read multiple logs

**Method:** GET

**Path:** /log

**Attributes:** none

**Body:** none

### Read one user

**Method:** GET

**Path:** /log/:id

**Attributes:** id - the id of an existing log

**Body:** none
