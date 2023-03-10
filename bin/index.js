#!/usr/bin/env node
import inquirer from 'inquirer';
import {
	leetcode
} from './service/index.js'
inquirer.prompt([
	{
		type: 'list',
		name: 'type',
		message: '找我干啥？',
		choices: [
			{ value: 'leetcode'}
		]
	},
	{
		type: 'input',
		name: 'name',
		message: '创建笔记，给个名呗！',
		default: '',
		validate: function (input) {
			const done = this.async();
			if (!input) {
				done('你倒是输点啥啊~');
				return;
			}
			done(null, true);
		}
	}
]).then((answers) => {
	if(answers.type === 'leetcode') {
		leetcode(answers);
	}
})