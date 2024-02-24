import inquirer from "inquirer";
import chalk from "chalk";
let num = await inquirer.prompt({
    type: `number`,
    name: `user`,
    message: 'Please enter an amount.'
});
const countdown = (second) => {
    const interval = setInterval(() => {
        console.log(chalk.bold.italic.red(`${second}`), chalk.italic.green("seconds remaining"));
        second--;
        if (second < 0) {
            clearInterval(interval);
            console.log(chalk.bold.italic.yellow("countdown finish"));
        }
    }, 1000);
};
countdown(num.user);
