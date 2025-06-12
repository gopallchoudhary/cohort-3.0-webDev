1. mongodb is schemaless, schema is for node js
2. NoSQL => for for fast development,can change schema easily
3. SQL => for large scalable applications
4. in mongodb schema strictness is present only at the node js level
5. Postgress => define schema, put in data, update the schema as your application changes and perform migration

6. Create a table
   create table users(
   id serial primary key,
   username varchar(255) unique not null,
   email varchar(255) unique not null,
   password varchar(255) not null,
   created_at timestamp with time zone default current_timestamp
   )

7. Inserting in table:-
   Insert into users(username, email, password)
   values ('username', 'email@gmail.com'i, 'password')

8. Updating table:-
   update users
   new "parameter name" = "parameters's new value"
   where "parameter" = "paramter value" // for identifation"

   Ex => update users
         new password = "password123"
         where email = gopal@23@gmailcl
