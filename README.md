# Weeks Bot

Discord music bot with slashcommands. Requires a lavalink server to play audio

## Installation

### Docker 
* Copy the `.env.example` file as `.env` and fill it.
```sh
docker build . -t weeks-bot
docker run -d --env-file .env weeks-bot 
