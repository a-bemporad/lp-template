module.exports = (plop) => {
  plop.setGenerator('container', {
    description: 'Create a container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your container name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/containers/{{pascalCase name}}/index.js',
        templateFile: 'templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: '../src/containers/{{pascalCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs',
      },
    ],
  });
};
