1. All ts codes are compiled into js
2. TS is a development tool (it is a wrapper around the javascript)
3. Types => number, string, boolean, null, undefined, void, array, object, tuples, ANY, never, unknown
4. Syntax => let variableName: type = value
5. Primitive => STRING, NUMBER & BOOLEAN
6. any => when ts cannot infer the value of any variable, it turns off the typechecking of the variable
7. we use any whenever we dont want any particualar value to have typechecking error
8. we use ANY just to convice typescript that particular line of code is okay
9. arrow function me return karna hi padta hai agar declared type kuch dete hai to
10. some functions never returns a value ex => (): never and it is used to handle error or some internal crash
11. readonly => cannot be further changed
12. ? => optional
13. Union => operations tabhi laga sakte hai jab type confirm ho (ex-> if())
14. let pi:3.14 = 3.14 (pi cannot be changed)
15. interface => it can be reopen or we can add new fields to the existing interface
16. type cannot be changed after being created i.e. reopening of the type is not possible
17. setter => does not require declaration type or theres nothing to return
18. getter => does not have parameters but returns something
19. protected => can be accessible outside the class but only to the class which inherits (extends) it
20. you cannot create instance or an object directly from the abstract class but you can from the class which is extending the abstract class
21. <T,> => it is a generic syntax not a html tag or jsx syntax
22. type supports union but interface does not
23. one interface can use another interface
24. we do not write definition of fucntion in interface we just initialize the function
25. we can implement interfaces as classes but we cannot implement types as classes -> wrong
26. in abstract class we can give default implementations or defintion of the function i.e. we can give the definition of the function not just initialize it
27. Unions and intersections are only possible in types and not in interface
28. Pick => lets you pick selected things from the type or interface
29. Partial => makes all the fields are optional (like name?:, age?:)
30. readonly and Readonly<User>
31. Record<string, User> (key & value)
