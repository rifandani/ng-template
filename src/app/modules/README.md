# Modules / Features

Business features live in this directory. Make a module per feature.

## Contents

That module can contain:

- components,
- directives,
- pipes,
- services,
- interfaces,
- enums,
- utils, and so on.

The idea is to keep things close.
So, a pipe, that is solely used in the Login module should not be defined in the global scope or inside Core.
The same goes for any other angular building block required by this module only.
