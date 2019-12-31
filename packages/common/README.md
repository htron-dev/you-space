# `@youspace/common`

> A Packeage with common funcitons and helpers to use with @youspace packages

## Cli command ys-mocha
Command to run mocha tests more easy without need to intall directly the packages, all options mocha works with the package

> ys-mocha [optionsMocha] [file(s) path]

In console type:
```shell
ys-mocha /__tests__/**/*
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
