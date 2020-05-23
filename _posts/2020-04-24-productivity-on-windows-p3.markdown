---
layout: post
title:  "Increasing productivity on Windows 10, part 2 - Chocolatey package manager"
date:   2020-04-13 12:40:00 +0200
categories: [Windows]
tags: [Windows, Productivity]
---

Welcome to the second part of this series on productivity in Windows 10.

For this part we'll be looking at how to install packaged programs via the command line in Windows.

To begin, open up at Powershell prompt as admin `Win + X + A`
Paste in the following: 
```Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))```

This will install chocolatey on your system in a one-liner.

<!--more-->

**Word of caution before you proceed** - if you already have some of the programs installed through an MSI or another installer, you may face issues starting the program. The best course of action is then to uninstall either the chocolatey package or the installed program through "Add or Remove programs".

Also note that many of the packages chocolatey hosts are unofficial. In theory you could believe you are installing something "safe" and well known product, but there are no guarantees for this in non-official packages.

Next, try to find a program you wish to install. 
You can find this either with Google, searching on chocolatey.org or using the `choco find <packagename>` command

Let's install google chrome. 

`choco install googlechrome -y`

Let's list our installed chocolatey packages `choco list --local-only`

This works great when bootstrapping new client machines. Say you wish to have a list of programs installed with the latest versions on your machine. Create a script which runs choco install and takes a list of programs to install.

To update your package, type `choco update <packagename>` 
To update all your installed packages, type `choco update all`
