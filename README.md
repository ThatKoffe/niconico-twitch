![NNxTW_BANNER](https://i.ibb.co/Zzh9NyT/Twitchxniconico.png)

# Niconico Twitch
[Niconico](https://www.nicovideo.jp/) Douga style chat overlay - Simply set it up.

"What kind of style are you referring to?" you might be asking. Well, here are some examples you might recognize!

### Niconico platform comments
![Niconico](https://i.ibb.co/jkPrDb9/niconico.gif)

### Osu! replay comments
![example1](https://i.ibb.co/4V7Zcwf/osu.gif)

# Installation
## StreamElements
> 🛑 One-click installation is on its way, all we need is overlay sharing approval from StreamElements!
1. On your StreamElements overlay, add a new custom widget by selecting "+" then `STATIC/CUSTOM` then `Custom widget`.
2. On your left side panel, select your widget → `Position, size and style` → Width and Height. Change your widget size to be the full resolution of your overlay. For example, if your overlay was 1080p, then your widget size should be 1920px by 1080px.
3. Center your widget by clicking on `CENTER WIDGET`.
4. On your widget, select `Settings`.
5. navigate to the StreamElements folder on our repository and paste each file content to the appropiate field on StreamElements. `layout.html` → `HTML`, `chat.css` → `CSS`, `chat.js` → `JS`, `chat.json` → `FIELDS`. Do not mess with the `DATA` field.

## Streamlabs - ⚠ WIP ⚠
1. Navigate to the `Streamlabs` folder on our repository and copy each of the files.
2. Head into Streamlabs' [chatbox configuration dashboard](https://streamlabs.com/dashboard#/chatbox)
3. Navigate down to `Enable Custom HTML/CSS` and select `Enabled`.
4. Replace the code in each of the fields with the code from our repository.

# Configuration
## StreamElements
Super straight-forward. Upon installing the widget correctly, new sections will appear on your left side panel with options to configure character limit, command hiding, bot and user chat hiding, and a ton of typography options as well.

## Streamlabs
As the Streamlabs' current widget theme is experimental, configuration is unfortunately manual for the most part through code modification. `chat.js` contains comments documenting what each line of code does. For beginners, we'll recommend you use [StreamElements](https://streamelements.com/) until the Streamlabs version is user-friendly to some extent <3