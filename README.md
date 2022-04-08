# ✈ Notify via Telegram
[GitHub Action](https://github.com/features/actions) for sending a Telegram notification message.

This action send a message via Telegram when there is a push/release.

## 👓 Usage
Send a default message on push/release event:
```yaml
name: Notify
on:
  push:
  release:
    types: [published]

jobs:
  notify:
    name: Notify via Telegram
    runs-on: ubuntu-latest
    steps:
      - name: Send message to Telegram
        uses: kekedaine/telegram-action@v2
        env:
          TELEGRAM_TOKEN: ${{ secrets.telegram_token }}
          TELEGRAM_CHAT: ${{ secrets.telegram_chat }} # || TELE_CHAT_ID
        with:
          text: "helloworld"
          parse_mode: "html"

```

## 💼 Environment variables

- **TELEGRAM_TOKEN** `string` - Telegram authorization token
- **TELE_CHAT_ID || TELEGRAM_CHAT** `string` - Unique identifier chat

>How to get a telegram token: [BotFather](https://core.telegram.org/bots#6-botfather)
>
>How to get a telegram chat identifier:
>
>1. Forward a message from the target chat to [@JsonDumpBot](https://telegram.me/JsonDumpBot)
>2. Copy the *message* ➡ *forward_from_chat* ➡ **id**

## ✨ Workflow examples

Check this workflow: [test.yml](.github/workflows/test.yml)

## 📖 License
Please see the [LICENSE.md](LICENSE) file for more information.