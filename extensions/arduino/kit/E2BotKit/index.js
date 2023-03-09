const E2BotKit = formatMessage => ({
    name: formatMessage({
        id: 'E2BotKit.name',
        default: 'E2BotKit'
    }),
    extensionId: 'E2BotKit',
    version: '1.0.0',
    supportDevice: [],
    author: 'MBC-Robot',
    iconURL: `asset/E2BotKit.png`,
    description: formatMessage({
        id: 'E2BotKit.description',
        default: 'E2BotKit'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://www.facebook.com/E2BOT/'
});

module.exports = E2BotKit;
