const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const { routesList } = require('@/models/utils');

const { globSync } = require('glob');
const path = require('path');

const pattern = './src/controllers/appControllers/*/**/';
const controllerDirectories = globSync(pattern).map((filePath) => {
  return path.basename(filePath);
});

const appControllers = () => {
  const controllers = {};
  const hasCustomControllers = [];

  controllerDirectories.forEach((controllerName) => {
    try {
      const customController = require('@/controllers/appControllers/' + controllerName);

      if (customController) {
        hasCustomControllers.push(controllerName);
        controllers[controllerName] = customController;
      }
      console.log('custom controller array',hasCustomControllers);
    } catch (err) {
      throw new Error(err.message);
    }
  });

  routesList.forEach(({ modelName, controllerName }) => {
    // if (!hasCustomControllers.includes(controllerName)) {
    //   controllers[controllerName] = createCRUDController(modelName);
    // }
    if (!hasCustomControllers.includes(controllerName)) {
      const crudController = createCRUDController(modelName);
      if (!crudController.create) {
        console.error(`Failed to generate 'create' method for ${modelName}`);
      }
      controllers[controllerName] = crudController;
    }
  });

  return controllers;
};

module.exports = appControllers();
