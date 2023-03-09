const e2bot = formatMessage => ({
    name: 'E2-Bot',
    deviceId: 'e2bot_arduinoUno',
    manufactor: 'MBC Robot',
    learnMore: 'https://e2bot.tech/aieducation/',
    iconURL: 'asset/e2bot.png',
    description: formatMessage({
        id: 'e2bot.description',
        default: 'Education and Engineering robot'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: ['USB\\VID_1A86&PID_7523'], // CH340
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/e2bot-illustration.svg',
    connectionSmallIconURL: 'asset/e2bot-small.svg',
    programMode: ['upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'cpp', 'c'],
    //tags: ['arduino', 'kit'],
    deviceExtensions: ['E2BotKit','moreComments'],
    deviceExtensionsCompatible: '',
    helpLink: 'https://www.facebook.com/E2BOT/'
});

module.exports = e2bot;
