# Controllers

## Concept

Controllers are JavaScript files which contain a set of methods called **actions** reached by the client according to the requested route. It means that every time a client requests the route, the action performs the business logic coded and sends back the response. They represent the _C_ in the _MVC_ pattern. In most cases, the controllers will contain the bulk of a project's business logic.

```js
module.exports = {
  // GET /hello
  index: async ctx => {
    ctx.send('Hello World!');
  },
};
```

In this example, any time a web browser is pointed to the `/hello` URL on your app, the page will display the text: `Hello World!`.

### Where are the controllers defined?

The controllers are defined in each `./api/**/controllers/` folders. Every JavaScript file put in these folders will be loaded as a controller. They are also available through the `strapi.controllers` and `strapi.api.**.controllers` global variables. By convention, controllers' names should be Pascal-cased, so that every word in the file (include the first one) is capitalized `User.js`, `LegalEntity.js`.

## Core controllers

When you create a new Content type or a new model. You will see a new empty controller has been created. It is because Strapi builds a generic controller for your models by default and allows you to override and extend it in the generated files.

### Extending a Model Controller

Here are the core methods (and their current implementation).
You can simply copy and paste this code in your own controller file to customize the methods.

::: warning
In the following example we will consider your controller, service and model is named `restaurant`
:::

#### Utils

First require the utility functions

```js
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
```

- `parseMultipartData`: This function parses strapi's formData format.
- `sanitizeEntity`: This function removes all private fields from the model and its relations.

:::: tabs cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab "find" id="find"

#### `find`

```js
module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await service.search(ctx.query);
    } else {
      entities = await service.find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model }));
  },
};
```

:::

::: tab "findOne" id="findone"

#### `findOne`

```js
module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const entity = await service.findOne(ctx.params);
    return sanitizeEntity(entity, { model });
  },
};
```

:::

::: tab "count" id="count"

#### `count`

```js
module.exports = {
  /**
   * Count records.
   *
   * @return {Number}
   */

  count(ctx) {
    if (ctx.query._q) {
      return service.countSearch(ctx.query);
    }
    return service.count(ctx.query);
  },
};
```

:::

::: tab "create" id="create"

#### `create`

```js
module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await service.create(data, { files });
    } else {
      entity = await service.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model });
  },
};
```

:::

::: tab "update" id="update"

#### `update`

```js
module.exports = {
  /**
   * Update a record.
   *
   * @return {Object}
   */

  async update(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await service.update(ctx.params, data, { files });
    } else {
      entity = await service.update(ctx.params, ctx.request.body);
    }

    return sanitizeEntity(entity, { model });
  },
};
```

:::

::: tab "delete" id="delete"

#### `delete`

```js
module.exports = {
  /**
   * delete a record.
   *
   * @return {Object}
   */

  async delete(ctx) {
    const entity = await service.delete(ctx.params);
    return sanitizeEntity(entity, { model });
  },
};
```

:::

::::

## Custom controllers

You can also create custom controllers to build your own business logic and API endpoints.

### How to create a custom controller

There are two ways to create a controller:

- Using the CLI `strapi generate:controller restaurant`. Read the [CLI documentation](../cli/CLI.md#strapi-generatecontroller) for more information.
- Manually create a JavaScript file in `./api/**/controllers`.

### Adding Endpoints

Each controller’s action must be an `async` function.
Every action receives a `context` (`ctx`) object as first parameter containing the [request context](./requests-responses.md) and the [response context](./requests-responses.md).

::: note
Every action must be referenced by a route.
:::

### Example

In this example, we are defining a specific route in `./api/hello/config/routes.json` that takes `Hello.index` as handler.

It means that every time a request `GET /hello` is sent to the server, Strapi will call the `index` action in the `Hello.js` controller.
Our `index` action will return `Hello World!`. You can also return a JSON object.

**Path —** `./api/hello/config/routes.json`.

```json
{
  "routes": [
    {
      "method": "GET",
      "path": "/hello",
      "handler": "Hello.index"
    }
  ]
}
```

**Path —** `./api/hello/controllers/Hello.js`.

```js
module.exports = {
  // GET /hello
  index: async ctx => {
    ctx.send('Hello World!');
  },
};
```

::: note
A route handler can only access the controllers defined in the `./api/**/controllers` folders.
:::
