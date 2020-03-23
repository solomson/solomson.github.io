---
layout: post
title:  "Increasing productivity on Windows 10, part 1 - Built-in hotkeys"
date:   2020-03-23 20:25:00 +0100
categories: [Windows]
tags: [Windows, Productivity, Hotkeys]
---

I've decided to make a series on how to increase your productivity on Windows 10. The series will mainly be focused for people in the IT industry, but most of the articles in this series will have some carryover to all Windows users. 

Some of the reasoning behind this is that after starting my latest job I've been surrounded with people having their highly customized personal setup on Linux or MacOS. And I'll have to say that some of the things they showed me impressed me, and I wondered if I could do the same in Windows.

Obviously I could switch to Mac or Linux, but being a Windows user since 1998, I've grown quite accustomed to it. So after a few months on and off improving my productivity and general user experience on Windows 10, I thought this would be a good opportunity to share some tips, thoughts and tricks on the matter.

<h2>Hotkeys</h2>

One neat tool for learning Windows shortcuts is to install the tool [PowerToys](https://github.com/microsoft/PowerToys). While the program runs, holding down the Windows key for a second or so will list all available hotkeys.

To get a full overview of most hotkeys, see [here](https://support.microsoft.com/en-us/help/12445/windows-keyboard-shortcuts). I will only be listing hotkeys I actually use my self, some more than others. I'd suggest you read what a hotkey actually accomplishes, and if it's relevant to your or not before trying to remember the combinations.

<h3>Windows key combinations</h3>

| Combination | Accomplishes  |
|---|---|
| Win + L  | Lock your PC  |
| Win + (1-9)  | Open Window n from taskbar  |
| Win + Shift + ArrowKey  |  Move current window to another monitor |
| Win + E  | Open explorer  |
| Win + P  |  Multi-monitor settings |
| Win + ,  |  Peek desktop background |
| Win + Ctrl + ArrowKey  | Switch to next virtual desktop  |
| Win + ArrowKey  | Snap window   |
| Win + X  |  Right click on Windows icon |

The top 3 hotkeys listed above are shortcuts I use multiple times every day on my machine. I only recently learned about number 2 and 3. Instead of having to aim your mouse at the top of your window, drag it to another screen and double click to maximize, I now just `Win + Shift + LeftArrow` or `Win + Shift + RightArrow`

Using the `Win + (1-9)` hotkey also works great, especially if you have pinned your most used programs to the taskbar. I keep my top three most used programs at the same position across all my PC's. 

The `Win + x` combination is really only useful if you are willing to learn the other sub-commands you can type, e.g. `Win + x, u u` shut downs your computer. This isn't for everyone, as reaching your hand away from your desktop onto the 'off' button seems easier to remember for some unexplainable reason.

<h3>Ctrl key combinations</h3>

| Combination | Accomplishes  |
|---|---|
| Ctrl +  C  | Copy selected item/text  |
| Ctrl +  V  | Paste selected item/text  |
| Ctrl +  Z  | Undo last  |
| Ctrl +  Y  | Reverse undo  |
| Ctrl + Tab   |  Open next tab in most programs |
| Ctrl + Shift + Tab  | Open previous tab in most programs   |
| Ctrl + Shift + Escape   | Open task manager  |
| Ctrl + Alt + Delete  | The great escape key |
| Ctrl +  T  | Open new tab in browser |
| Ctrl +  W  | Close current tab in browser |
| Ctrl + (1-9)   |  Open tab n in most browsers |
| Ctrl +  J  | Open downloads in browser |
| Ctrl + Shift +  N  | Open new incognito tab in browser |
| Ctrl + Shift +  T  | Open last closed tab in browser |

Personally I am a tab junkie, so the built-in maneuvering between tabs with ctrl tab and ctrl shift tab gets difficult. I'll post my setup on how to simplify "hard to reach but useful hotkeys" in a future post in this series.

The `ctrl + shift + t` combination can also be used if you accidentally closed an entire window, in that case opening a new browser window and hitting the combination will bring up all closed tabs from the last session.

<h3>Terminal specific combinations</h3>

The following combinations are tested in my PowerShell console on Windows, but I know for a fact that multiple of them work on Linux as well.

| Combination | Accomplishes  |
|---|---|
| Ctrl + C  | Stop your current command ASAP  |
| Alt + .  | Paste last argument from previous command |
| Ctrl + Insert  | Copy clipboard from terminal |
| Shift + Insert  | Paste clipboard to terminal |
| Ctrl + R  | Inline search history for your commands  |
| Ctrl + LeftArrow  |  Jump an entire word to the left in terminal |
| Ctrl + RightArrow |  Jump an entire word to the right in terminal |

In all honesty I still use my right mouse button click to paste text, as I find the insert button "too far away" from my right hand (even though in reality my mouse is even further away for much of the time)

The most interesting in my opinion is `Alt + .` Say if you are creating a directory in bash `mkdir ./very/long/path/tomyfile` Instead of having to copy and paste the file name, or type cd `./very/long/path/tomyfile` you can simply type `cd` and press `Alt + .` and hit the enter key.

That's a wrap for now. Stay tuned for more.