# How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface? And how does this keep our code DRY?

## Introduction

In Typescript, we do make large interfaces for a complete data model. But in real-world scenarios, we don't always need every property of that interface everywhere. If we want to keep our code DRY or look simple or not look messy then we have to rewrite similar interfaces for different use cases which makes code base large and makes duplicacy of codes.
To solve these issues, Typescript provides utility types like "Pick" and "Omit" which helps us to create smaller, specialized versions of a master interface and helps us to keep our code DRY.

---

## 1. How `Pick` and `Omit` prevent code duplication

`Pick` and `Omit` help us avoid repeating interface definitions by creating derived types from an existing interface.

- **`Pick`** → Selects only specific properties from a type  
- **`Omit`** → Removes specific properties from a type  

Instead of manually creating multiple interfaces, we reuse the same base structure.

### Example:

```ts
// Master User interface
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Pick: selects only required properties
type UserProfile = Pick<User, "name" | "email">; // only keeps name and email

// Omit: removes specific property
type PublicUser = Omit<User, "password">; // removes password and keeps rest
```

## 2. How `Pick` and `Omit` keep our code DRY

DRY (Don’t Repeat Yourself) means: avoid repeating the same logic or structure in multiple places.

`Pick` and `Omit` help us achieve this in a clean way:

### ✔ Single source of truth
We define the `User` interface only once.

### ✔ Automatic consistency
If we update the main interface, all derived types automatically reflect the changes.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
}
```
## Conclusion

`Pick` and `Omit` are powerful TypeScript utility types that help us create reusable “slices” of a master interface. Instead of duplicating code, we build smaller types from a single source of truth.

This approach:
- reduces code duplication  
- improves maintainability  
- keeps the code DRY (Don’t Repeat Yourself)