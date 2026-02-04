const hello = (options, ctx) => {
  const greeting = options?.greeting || "Hello";
  console.log(`${greeting}, ${options.name || 'world'}! 👋`);
};

module.exports.hello = hello;

module.exports.apply = (program, ctx, config) => {
  program
    .command("hello")
    .description("Command to say hi using a plugin")
    .option("--name <name>", "your name", "world")
    .action((options) => {
      const mergedOptions = Object.assign({}, config, options);
      hello(mergedOptions, ctx);
    });
};

