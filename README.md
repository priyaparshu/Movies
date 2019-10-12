# Movies

Graphql is a query language, REST Api is an architectural concept.
Each query you send to your API gets you exactly what you want. What I mean is that you’ll receive nothing more and nothing less on the other end than exactly what you need. The data required is determined client side instead of letting servers control it, helping to build apps that are way faster and more stable.

Query: A query is what a client sends to a server in order to specify the necessary data. 

Schema: The blueprint for communication between client and server. It specifies what queries clients can make, the types of data retrievable, and relationships between types.

Resolvers: A function applied to every field. It specifies how that field is connected to the backend and fetches data for that field from a database.

Express  is a simple framework that adds key web application features on top of Node.js.

In this example our application will read data from the code itself rather than using a database. In this example we will create three endpoint 1.Hello 2. Movie 3.director in query.js
The return type of the endpoint movie is movieType which is defined in types.js
movieType is created as a GraphQLObjectType which has fields that comes directly from movie list.

resolve function : returns the movie corresponding to the id, from the movies list. 
find is a function from lodash library used to find an element in a list.

When director endpoint is called we have to return the director details, as well as all the movies the director has directed. The resolve function is inside movies. The type of movies field is a "GraphQLList" of movieType ( List of movies )
The input to resolve function is source and args. source will have the parent object details (source.id =1)
resolve function finds out all the movies where directorId matches the Id of the required Director.



Test: 1 

{
  movie(id: 1) {
    name
  }
}

test2:
{
  director(id: 1) {
    name
    id,
    age,
    movies{
      name,
      year
    }
  }
}
