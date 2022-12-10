# Weeks Bot

## Installation

### Docker 
* Copy the `.env.example` file as `.env` and fill it.
```sh
docker build . -t weeks-bot
docker run -d --env-file .env weeks-bot 
