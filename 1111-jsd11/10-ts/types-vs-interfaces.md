# Summary Types vs. Interfaces

| Feature              | Type            | Interface                  |
| -------------------- | --------------- | -------------------------- |
| Object shapes        | ✔️ Yes          | ✔️ Yes                     |
| Function types       | ✔️ Best         | ⚠️ Possible but uncommon   |
| Union types          | ✔️ Yes          | ❌ No                       |
| Intersection (`&`)   | ✔️ Yes          | ⚠️ Rare                    |
| Extendability        | ⚠️ Can with `&` | ✔️ Best (`extends`)        |
| Declaration merging  | ❌ No            | ✔️ Yes                     |
| Class implementation | ✔️ Yes          | ✔️ Yes                     |


