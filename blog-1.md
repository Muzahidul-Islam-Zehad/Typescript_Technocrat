# Understanding why "unknown" is more safer than "any" and concept of Type Narrowing in TypeScript

## 1. why "unknown" type is more safer than "any" type
Type "any" completely disables type checking for a value. Once a variable becomes "any", Typescript stops validating about what operation we are going to do next on that variable. So, Typescript allows any opperation on that "any" type variable. Ultimately we get error on runtime.
For example:
```
let value: any = "hello";

value.toUpperCase(); // Allowed by Typescript

value = 123;

value.toUpperCase(); //Allowed by Typescript but get Runtime error

```

Type "unknown" is designed to handle unpredictable data safely. Unlike "any" type, Typescript don't allow to do operation on that "unknown" type variable without type validation or type narrowing.
For example:
```
let value: unknown = "hello";

value.toUpperCase(); // Error

```

## 2. What Is Type Narrowing?
Type narrowing is the process of reducing a broad type into a more specific type using conditional checks.
It's basically what we do after assigning a variable type "unknown". There are several kinds operators to do type narrowing such as "typeof", "instanceof", "in".
For example:
```

// using typeof
if (typeof value === "number") {
    console.log(value.toFixed(2));
}

// using instanceof
if (date instanceof Date) {
    console.log(date.getFullYear());
}

// using in
if ("name" in user) {
    console.log(user.name);
}

```