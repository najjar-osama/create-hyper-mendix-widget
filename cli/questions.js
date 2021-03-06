module.exports = [{
		type: 'input',
		name: 'widgetName',
		message: 'Widget Name:',
		default: 'MyHyperMendixWidget',
		validate: (input) => {
			const validWidgetNameRegex = /^[0-9a-zA-Z_-]+$/;
			const isValid = validWidgetNameRegex.test(input.trim());
			!isValid && console.log('\nPlease enter a valid widget name!');
			return isValid;
		}
	},
	{
		type: 'input',
		name: 'description',
		message: 'Widget description:',
		default: 'My brand new hyper widget!',
		validate: (input) => {
			const isValid = input.trim().length > 0 && input.trim().length <= 500;
			!isValid && console.log('\nPlease enter a valid widget description (no more than 500 characters)!');
			return isValid;
		}
	},
	{
		type: 'input',
		name: 'author',
		message: 'Author',
		default: 'John Doe',
		validate: (input) => {
			const isValid = input.trim().length > 0;
			!isValid && console.log('\nPlease enter a valid author name!');
			return isValid;
		}
	},
	{
		type: 'input',
		name: 'email',
		message: 'Email:',
		default: 'john.doe@example.com',
		validate: (input) => {
			const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			const isValid = validEmailRegex.test(input.trim());
			!isValid && console.log('\nPlease enter a valid email address!');
			return isValid;
		}
	},
	{
		type: 'input',
		name: 'initialVersion',
		message: 'Initial Version:',
		default: '1.0.0',
		validate: (input) => {
			const validVersionRegex = /^(\d+\.)?(\d+\.)?(\*|\d+)$/;
			const isValid = validVersionRegex.test(input.trim());
			!isValid && console.log('\nPlease enter valid version number!');
			return isValid;
		}
	},
	{
		type: 'input',
		name: 'license',
		message: 'License:',
		default: 'MIT',
		validate: (input) => {
			const isValid = input.trim().length > 0;
			!isValid && console.log('\nPlease enter a valid license!');
			return isValid;
		}
	},
	{
		type: 'list',
		name: 'template',
		message: "Which implementation you'd like to use (More frameworks are comming soon!):",
		choices: ['React (No dojo wrapper, for Mx7.13.1 or Higher)!','Hyperapp!', 'React (with dojo wrapper)!', 'Vue!', "JQuery!", 'ES6 only!'],
		default: 'React (no dojo wrapper)!'
	}
];