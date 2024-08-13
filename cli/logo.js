import chalk from 'chalk';

const { green: g, red, white, magenta: m, yellow } = chalk;

export const getLogo = version => `
${yellow('   ##     #####   ########  ########  ######   #######  ########  ######## ########   ######  ')}
${yellow(' ####    ##   ##  ##     ## ##       ##    ## ##     ## ##     ## ##       ##     ## ##    ## ')}
${yellow('   ##   ##     ## ##     ## ##       ##       ##     ## ##     ## ##       ##     ## ##       ')}
${yellow('   ##   ##     ## ##     ## ######   ##       ##     ## ##     ## ######   ########   ######  ')}
${yellow('   ##   ##     ## ##     ## ##       ##       ##     ## ##     ## ##       ##   ##         ## ')}
${yellow('   ##    ##   ##  ##     ## ##       ##    ## ##     ## ##     ## ##       ##    ##  ##    ## ')}
${yellow(' ######   #####   ########  ########  ######   #######  ########  ######## ##     ##  ######  ')}

${white.bold('                            https://www.10decoders.com')}

${white('Welcome to 10Decoders.NET ') + yellow(`v${version}`)}
${white(`Application files will be generated in folder: ${yellow(process.cwd())}`)}
${g(' _______________________________________________________________________________________________________________')}

${white(`  Documentation for creating an application is at ${yellow('https://www.10decoders.com/creating-an-app/')}`)}
${white(`  If you find 10Decoders useful, consider sponsoring the project at ${yellow('https://opencollective.com/10decoders')}`)}
${g(' _______________________________________________________________________________________________________________')}
`;
