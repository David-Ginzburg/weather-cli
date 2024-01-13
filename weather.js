#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { setKeyValue, TOKEN_DECTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
	if (!token.length) {
		printError('Не передан токен')
		return;
	}
	try {
		await setKeyValue(TOKEN_DECTIONARY.token, token)
		printSuccess('Токен сохранен');
	} catch (e) {
		printError(e.message)
	}
}

const getForecast = async () => {
	try {
		const weather = await getWeather(process.env.CITY);
		console.log(weather) // Красивый вывод погоды
	} catch(e) {
		if (e?.response?.status === 404) {
			printError('Неверно указан город')
		} else if (e?.response?.status === 400) {
			printError('Город не указан')
		}
		 else if (e?.response?.status === 401) {
			printError('Неверно указан токен')
		} else {
			printError(e.message)
		}
	}
}

const initCLI = () => {
	const args = getArgs(process.argv)
	if (args.h) {
		printHelp()
	}
	if (args.s) {
		// Сохранение города
	}
	if (args.t) {
		return saveToken(args.t)
	}
	getForecast()
}

initCLI();