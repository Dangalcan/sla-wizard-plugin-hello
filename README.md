# sla-wizard-plugin-hello

Example plugin for [sla-wizard](https://www.npmjs.com/package/sla-wizard) that adds a `hello` command.

This plugin demonstrates how to extend **sla-wizard** by registering a custom command that greets the user.  
It can be used as a base for building your own plugins.

---

## Installation

```bin/bash
npm install sla-wizard-plugin-hello
```

## Usage

After installing, the plugin will add the `hello` command to **sla-wizard**.

```bin/bash
sla-wizard hello
```

This will give the following output:

```bin/bash
Hello, world! 👋
```

## --name option

You can pass a custom name:

```bin/bash
sla-wizard hello --name Dani
```

This will give the following output:

```bin/bash
Hello, Dani! 👋
```

## Additional configuration (custom `greeting`)

The plugin also supports a `greeting` configuration in your **sla-wizard** config file. The config file ***must*** be named `sla-wizard.config.json` and it has this structure:

```json
{
  "plugins": [
    {
      "name": "sla-wizard-plugin-hello",
      "config": {
        "greeting": "Ho la"
      }
    }
  ]
}
```

***NOTE:*** You can create plugins with no `config` options.

Now running:

```bin/bash
sla-wizard hello --name Dani
```

Will give the following output:

```bin/bash
Ho la, Dani! 👋
```

## Specs

### Command: hello

+ Description: Prints a friendly greeting.

+ Options:

    1. --name `<name>` → Name to greet. Defaults to `world`.

+ Config:

    1. greeting (string) → Custom greeting text. Defaults to `Hello`.

## Contributing

Feel free to fork this repo and adapt it for your own sla-wizard plugins.
Issues and PRs are welcome!
