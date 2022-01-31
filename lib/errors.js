const ERRORS = {
  BadRootSchemaError: (tag) => `Root schema is not html, got ${tag}`,

  BadInputSchemaError: (input) => {
    const json = JSON.stringify(input);
    return `No tag or path found, got ${json}`;
  },

  UnscopedChannelError: (
    tag
  ) => `You must provide meta ({ tag: '${tag}', meta: import.meta })
  component property to use channels intercomponent communication`,
};
export class SwayerError extends Error {
  constructor(message = '', context = null) {
    const fullMessage = ERRORS[message] ? ERRORS[message](context) : message;
    super(fullMessage);
  }
}

export class BadRootSchemaError extends SwayerError {
  name = BadRootSchemaError.name;
  constructor(tag) {
    super(`Root schema is not html, got ${tag}`);
  }
}

export class BadInputSchemaError extends SwayerError {
  name = BadInputSchemaError.name;
  constructor(input) {
    super(`No tag or path found, got ${JSON.stringify(input)}`);
  }
}

export class UnscopedChannelError extends SwayerError {
  name = UnscopedChannelError.name;
  constructor(tag) {
    super(`You must provide meta ({ tag: '${tag}', meta: import.meta })
component property to use channels intercomponent communication`);
  }
}
