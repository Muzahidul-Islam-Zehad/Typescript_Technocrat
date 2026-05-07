# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? And this keeps our code DRY?

1. ## How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface?
Pick and Omit help prevent code duplication by creating smaller, specialized versions of a large interface instead of rewriting the same properties multiple times.
- Pick -> Selects only specific properties
- Omit -> Removes specific properties

For example:

```
// Exmaple User interface
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Pick
type UserProfile = Pick<User, "name" | "email">; // only keeps name and email.

// Omit
type PublicUser = Omit<User, "password">; // removes password and selects rest.

```
So, instead of manually writing new interfaces again and again, Pick and Omit create reusable “slices” from the main interface automatically.

2. ## How do Pick and Omit utility types keeps our code DRY?
Pick and Omit keep our code DRY (Don't Repeat Yourself) by allowing us to create smaller versions of an existing interface instead of rewriting the same properties multiple times.
This keeps the code DRY because:
- we define properties only once
- changes in the main interface automatically update derived types
- code becomes easier to maintain and less error-prone