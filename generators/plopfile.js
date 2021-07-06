module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where should it be created?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{location}}/{{pascalCase name}}/index.js',
        templateFile: 'templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{location}}/{{pascalCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs',
      },
    ],
  });
};
