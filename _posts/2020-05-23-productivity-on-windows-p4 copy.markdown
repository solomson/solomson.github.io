---
layout: post
title:  "Increasing productivity on Windows 10, part 4 - CLI"
date:   2020-05-23 13:40:00 +0200
categories: [Windows]
tags: [Windows, Productivity, PowerShell, WSL]
---


For this part we'll be looking at how to improve your CLI experience on Windows.

To get started, first install the Windows Terminal `choco install microsoft-windows-terminal`

I also recommend using PowerShell 7.x as your main shell, with a few settings. If you want to copy-paste mine, you can find them at dotfiles can be found at https://github.com/solomson/dotfiles/startup/raw , but beware that some of the settings are personalized.

The end result will look something like this, given that you have the correct modules installed:

```
posh-git
oh-my-posh + Paradox Theme
PSReadLine version 2.1.0-beta1 or higher
```

<img src="{{site.baseurl}}/assets/img/2020-05-23-1.png">

To install the modules, use the Install-Module cmdlet. for pre-releases, use the `-AllowPrerelease` switch parameter.

I also recommend installing WSL (Windows Subsystem for Linux) on your machine. This allows you to use linux utils interchangeably in your shell, or having different tabs running either on your Windows host, or in a Linux distro of your choice. WSL2 is set to be released with Windows 10 2004 in the end of May with further improvements.
For your Linux CLI I recommend using zsh together with the autosugesstions plugin. zsh is more or less compatible with bash, but adds some extra extensions (as far as my understanding goes). 

I'll likely go into more detail on how to get started with WSL in another article. Personally I mostly deal with bash/sh on Linux due to de facto Linux standards.

Moving back to Windows and PowerShell. What I love about PowerShell is its syntax consistency, tab-autocompletion and modular approach. Last but not least, in PowerShell you deal with objects rather than string manipulation. 

Let's use a more or less useless example:

`Get-Process | Where-Object -Property Name -eq "AutoHotkey" | Select-Object -Property Name`

Given the example from someone with experience with either SQL or programming (ideally both), it is simple to understand what we are doing with the above command. We do not have to be so verbose about it, but for scripts and maintainability, reading comprehension should be prioritized over letters typed in my opinion. Using the CLI, we can achieve the same thing with fewer keystrokes using the following command:

`ps | where Name -eq "autohotkey" | select name`

The above command uses the "ps" alias for Get-Process, and uses positional parameter values so that we don't have to specify the `-Property` flags.

How do to this in sh/bash?

`ps | grep autohotkey | awk ...`

Since sh is text based rather than object based, you can't just ask for properties, you have to use awk to manipulate the string based on the input sent through the pipeline. Naturally there will be some bash wizards out there, but for a regular CLI user, both "guessing" what the correct command for the task is based on consistent naming + having consistent parameters, properties is just a far simpler way to deal with this without having to dig in deep.

One of my main use cases for PowerShell is dealing with tasks which are either time consuming, error prone or simply not possible with point and click.

Let me show just a simple use-case where I create a mailing list based on AAD group membership

`Get-AzADGroup -DisplayName "MyAADGroupName" | Get-AzADGroupMember | select -Property UserPrincipalName | ForEach-Object { echo ($_.UserPrincipalName +";")  } | Set-Clipboard`

Now simply open up Outlook, paste your clipboard into the Bcc. section and type your email. (Note that Outlook currently has a limit of 500 recipients per email)

