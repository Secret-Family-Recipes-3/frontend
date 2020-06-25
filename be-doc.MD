<a name="top"></a>
# recipe-be v1.0.0

Back end for recipe app

#API URL
https://sfr-backend.herokuapp.com/

 - [Recipes](#Recipes)
   - [Create a recipe](#Create-a-recipe)
   - [Delete a recipe](#Delete-a-recipe)
   - [Retrieve all recipes](#Retrieve-all-recipes)
   - [Retrieve recipe by id](#Retrieve-recipe-by-id)
   - [Update a recipe](#Update-a-recipe)
 - [Users](#Users)
   - [Log in to the application](#Log-in-to-the-application)
   - [Register a user](#Register-a-user)

___


# <a name='Recipes'></a> Recipes

## <a name='Create-a-recipe'></a> Create a recipe
[Back to top](#top)

```
POST /api/recipes
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| created_by | `Integer` | <p>ID of user creating recipe. Obtained via token</p> |
| title | `String` | <p>Recipe Title</p> |
| description | `String` | <p>Recipe Description</p> |
| private | `Boolean` | <p>Optional value to flag recipe as private</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| recipe | `json` | <p>Recipe Object</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP 201 CREATED
{
  "id": 1,
  "created_by": 1,
  "title": "Recipe Title",
  "description": "Recipe Description",
  "creation_date": "Date string"
}
```

## <a name='Delete-a-recipe'></a> Delete a recipe
[Back to top](#top)

```
DELETE /api/recipes/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Integer` | <p>ID of recipe</p> |
| created_by | `Integer` | <p>ID of user to allow access to function. Obtained via token</p> |

## <a name='Retrieve-all-recipes'></a> Retrieve all recipes
[Back to top](#top)

```
GET /api/recipes
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| userID | `Integer` | <p>ID of user to filter out private recipes not owned by user. Obtained from token</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| recipe | `json` | <p>Recipe object</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP 200 OK
[
  {
    "id": 1,
    "created_by": 1,
    "title": "Recipe Title",
    "description": "Recipe Description",
    "creation_date": "Date string"
  },
  {
    "id": 2,
    "created_by": 1,
    "title": "Recipe Title",
    "description": "Recipe Description",
    "creation_date": "Date string"
  }
]
```

## <a name='Retrieve-recipe-by-id'></a> Retrieve recipe by id
[Back to top](#top)

```
GET /api/recipes/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `param` | <p>Recipe ID</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| recipe | `json` | <p>Recipe Object</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP 200 OK
{
  "id": 1,
  "created_by": 1,
  "title": "Recipe Title",
  "description": "Recipe Description",
  "creation_date": "Date string"
}
```

## <a name='Update-a-recipe'></a> Update a recipe
[Back to top](#top)

```
PUT /api/recipes/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Integer` | <p>ID of recipe</p> |
| created_by | `Integer` | <p>ID of user to allow access to function. Obtained vai token</p> |
| title | `String` | <p>Recipe Title</p> |
| description | `String` | <p>Recipe Description</p> |
| private | `Boolean` | <p>Optional value to flag recipe as private</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| recipe | `json` | <p>Recipe Object</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP 200 OK
{
  "id": 1,
  "created_by": 1,
  "title": "Recipe Title",
  "description": "Recipe Description",
  "creation_date": "Date string"
}
```

# <a name='Users'></a> Users

## <a name='Log-in-to-the-application'></a> Log in to the application
[Back to top](#top)

```
POST /api/auth/login
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | <p>username field for login</p> |
| password | `String` | <p>password field for login</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| token |  | <p>Logging in returns a token</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP 200 OK
{
  "token": "encrypted jwt"
}
```

## <a name='Register-a-user'></a> Register a user
[Back to top](#top)

```
POST /api/auth/register
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | <p>username field for User</p> |
| email | `String` | <p>email field for User</p> |
| password | `String` | <p>password field for User</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| token |  | <p>Registers user and returns token</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP 201 CREATED
{
  "token": "encrypted jwt"
}
```
