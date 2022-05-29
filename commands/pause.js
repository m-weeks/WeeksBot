const { SlashCommand } = require('slash-create');
const createPlayer = require('../helpers/createPlayer');
const handleError = require('../helpers/handleError');

module.exports = class extends SlashCommand {
  constructor(creator) {
    super(creator, {
      name: 'pause',
      description: 'Pause the current song',

      guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
    });
  }

  async run (ctx) {
    try {
      await ctx.defer();

      const player = await createPlayer(ctx);
      if (!player.playing) {
        return void ctx.sendFollowUp({ content: '❌ | No music is being played!' })
      }

      player.pause(true);

      return void ctx.sendFollowUp({ content: '⏸ | Paused!' });
    } catch (err) {
      handleError(err, ctx, 'pause');
    }
  }
};
