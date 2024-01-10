import chalk from "chalk"
import dedent from 'dedent-js'

const printError = (error) => {
	console.log(`${chalk.bgRed(' ERROR ')}  ${error}`)
}

const printSuccess = (message) => {
	console.log(`${chalk.bgGreen(' ERROR ')}  ${message}`)
}

const printHelp = () => {
	console.log(
		dedent(`${chalk.bgCyan(' HELP ')}
		Без параметров - вывод погоды
		-s [CITY] для установки города
		-t [API_KEY] для сохранени токена
		`)
	);
}

export { printError, printSuccess, printHelp };