module.exports.apply = (program, ctx, config) => {
  program
    .command("hello")
    .description("Command to say hi using a plugin")
    .option("--name <name>", "your name", "world")
    .action((options) => {
      const greeting = config?.greeting || "Hello";
      console.log(`${greeting}, ${options.name}! 👋`);
    });
};
