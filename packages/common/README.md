# `@youspace/common`

> A Packeage with common funcitons and helpers to use with @youspace packages

## ys-service command line
Command-line helpers, used to run mocha and eslint more easy without need to intall directly the packages, all options mocha and lint works with the packages.

```shell
    ys-service test [mochaOptions] [file(s) path]
    ys-service lint [eslintOptions] [file(s) path]
```

## Tsconfig
Use the tsconfig.common of the package with the default options

```json
{
    "extends": "@youspace/common/tsconfig.common.json",
    "compilerOptions": {
        "moduleResolution": "node"
    }
}
```

## ysLogger
This Class is used to handle all logs of  @youspace packages, this will make more easy to add new features like logs in .txt or change the format of the logs in the future.

```ts
import { ysLogger } from "@youspace/common";

// normal info log
ysLogger.info("Log something");

// logs in debug level
ysLogger.debug("Log just in debug", "youspace:common");

```
## ysError
This class is for the handle the errors of @youspace packages, like the ysLogger is made to to make easy to add new features in the future or change the format of messages.

```ts
import { ysError } from "@youspace/common";

const error = new ysError("Some Error message");

throw error;

```

### About eslint.common.js
For now i will use this method insted of create a @youspace/eslint-config, because if I do that eslint eslint will require the instalations of plugins of @typescpt-eslint, this is something i wanna avoid in main project to be more clean.

But i see some issues in eslint rfs repository and they have some good ideas to resolve this problem if they are accepted, so for now I will wait for this features.
