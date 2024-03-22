## What it is
StackCalc is a stack based calculator.
## How to use it
Input a number or a command in the text box, press enter to apply it.
You can input multiple space-separated values and commands at the same time.
Values are pushed to the stack, commands operate on the stack values.
Following is a table of the currently supported commands:
| Command | Name           | Effect         |
|---------|----------------|----------------|
| `+`     | Add            | `a b => (a+b)` |
| `-`     | Subtract       | `a b => (a-b)` |
| `*`     | Multiply       | `a b => (a*b)` |
| `/`     | Divide         | `a b => (a/b)` |
| `%`     | Modulo         | `a b => (a%b)` |
| `^`     | Exponentiation | `a b => (a^b)` |
| `_`     | Floor          | `a => ⌊a⌋`     |
| `d`     | Duplicate      | `a => a a`     |
| `c`     | Remove         | `a b => a`     |
| `s`     | Swap           | `a b => b a`   |
| `r`     | Reset          | `--`           |
## Examples
- `1 1 +` => `2`
- `7 5 -` => `2`
- `3 2 *` => `6`
- `5 2 /` => `2.5`
- `2 3 5 + *` => `16`
- `2 3 5 * +` => `17`
- `1 -5 -` => `6`
- `24.1 _` => `24`
- `2 d +` => `4`
- `10 7 s -` => `-3`
