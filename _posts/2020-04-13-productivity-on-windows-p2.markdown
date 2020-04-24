---
layout: post
title:  "Increasing productivity on Windows 10, part 3 - AutoHotKey"
date:   2020-04-24 20:10:00 +0200
categories: [Windows]
tags: [Windows, Productivity]
---

Welcome to the third part of this series on productivity in Windows 10.

For this part we'll be looking at how to create custom keybindings and macros on Windows.

Autohotkey has been around for quite a lot of years, and is probably the most used macro tool on Windows. I remember first encountering the tool in 2010 to rebind some commands in GTA San Andreas multiplayer to button combinations. For this article I'll showcase parts of my dotfiles and explain how I use them. Hopefully you can also get some inspiration from this too.

My full dotfiles can be found at https://github.com/solomson/dotfiles/startup/raw

To begin, open up at Powershell prompt as admin `Win + X + A`
Paste in the following: 
```choco install autohotkey -y```

This will install autohotkey on your system in a one-liner.

The way to use autohotkey is to create an .ahk file and run it. As you want keybindings to be consistent, it makes sense to put them into your startup folder.
To go to your startup folder, simply open Windows explorer, `Win + E` and type `shell:startup` in the menu bar. Once you are satisfied with your file, drag it here.

My current keybinds.ahk file

```
#SingleInstance force

; Default state of lock keys
SetCapsLockState, AlwaysOff
SetScrollLockState, AlwaysOff
return

; Suspend AutoHotKey
CapsLock & p::Suspend ; 
return

; Always on Top
^SPACE:: Winset, Alwaysontop, , A ; ctrl + space
Return

; Google Search highlighted text
CapsLock & Space::
{
    Send, ^c
    Sleep 50
    Run, http://www.google.com/search?q=%clipboard%
    Return
}

; Rebind useless key to braces
+|::
{
    Send, {RAlt Down}{7}{RAlt Up} 
    Send, {RAlt Down}{0}{RAlt Up}
    return
}


; Scroll tab forward (chrome) 
CapsLock & WheelDown::
{
    Send ^{Tab}
    sleep 50
    return
}

; Scroll tab back (chrome)
CapsLock & WheelUp::
{
    Send, ^+{Tab}
    sleep 50
    return
}

; Cleanup for calculators
#c::
if WinExist("Kalkulator") || if WinExist("Calculator")
{
    WinActivate  ; Automatically uses the window found above.
    Send, {Escape}
    Send, {Enter}
    return
}
else 
{
   ; Run, calc.exe
    return
}

#n::
if WinExist("Untitled - Notepad") || if WinExist("*Untitled - Notepad")
{
    WinActivate  ; Automatically uses the window found above.
    Send, {Enter}
    Send, {Enter}
    return
}
else 
{
    Run, notepad.exe
    return
}

; Unused F keys


; Mouse click with useless key (right ctrl)
RCtrl::
{
    Click
    Return
}
```

Notice that I've disabled my capslock key, and instead use it as a function key. CapsLock is placed at a great place to use for your pinky finger, and is very underutilized due to its default function. 
Capslock + Space for me takes the current clipboard and googles it. 

I never use right control, now I've rebound it so I can get an easy left click if I have two hands at the keyboard. Can be useful in some situations

I've bound My freed up caps-lock + wheeldown / wheelup to scroll through tabs (ctrl + tab, ctrl + shift + tab). I am a tab junkie, so I find this very useful to scroll through my tabs quickly.

Win + C opens up a calculator
Win + N opens up notepad, but makes sure you reuse an existing notepad if you have one. Before I started using this I always ended up with my quick notes spread all over in multiple notepads. Making a mess of my notes. I have tried OneNote and Notepad++, but for some reason I still enjoy notepad (as long as it doesn't get messy).