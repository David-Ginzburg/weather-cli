#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { setKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
	try {
		await setKeyValue('token', token)
		printSuccess('Токен сохранен');
	} catch (e) {
		printError(e.message)
	}
}

const initCLI = () => {
	const args = getArgs(process.argv)
	if (args.h) {
		printHelp()
	}
	if (args.s) {
	}
	if (args.t) {
		return saveToken(args.t)
	}
	// Вывести погоду
}

initCLI();