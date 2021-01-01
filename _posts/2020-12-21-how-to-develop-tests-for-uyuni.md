---
title: 'How to develop End to End tests for Uyuni'
date: 2020-12-21T20:07:00+00:00
author: Oubiti
layout: post
comments: true
desc: 'Starter skeleton of Cucumber a Test Framework'
permalink: /uyuni-test-development/    
icon: /static/assets/img/blog/test_development.png
keywords: "test,development,framework,ruby,cucumber,capybara,chromedriver"
categories:
  - Development
tags:
  - Cucumber
  - Terraform
  - ChromeDriver
---

Having new joiners in our QA Squad, I decided to record a video that explains how to set up a local sandbox for Uyuni and how to configure a RubyMine or IntelliJ IDE to develop and debug our Cucumber End to End tests. 

In order to deploy our test environment, we use Sumaform, which is a tool that make use of Terraform and Salt to deploy our Virtual Machines in local. By the way, it also supports deployment in AWS.
To debug our tests, we use ChromeDriver poping up a browser where we can follow all the actions made by our test framework, thanks to the breakpoints in our IDE.

<div class="video-container">
	<center>
		<iframe 
			width="800" 
			height="500" 
			src="https://www.youtube.com/embed/4U_68ddRAHg" 
			frameborder="0" 
			allow="autoplay; encrypted-media; picture-in-picture" 
			allowfullscreen>
		</iframe>
	</center>
</div>


