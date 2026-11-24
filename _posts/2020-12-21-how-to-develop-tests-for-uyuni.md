---
title: 'How to develop End to End tests for Uyuni'
date: 2020-12-21T20:07:00+00:00
author: Oscar Barrios
layout: post
comments: true
desc: "How to develop end-to-end tests for Uyuni with Cucumber, Capybara, ChromeDriver and Terraform test environments, with a walkthrough video."
permalink: /uyuni-test-development/    
keywords: "test,development,framework,ruby,cucumber,capybara,chromedriver"
categories:
  - Development
tags:
  - Cucumber
  - Terraform
  - ChromeDriver
videos:
  - id: 4U_68ddRAHg
    name: "Uyuni Test Development"
    description: "Video guide to setting up a local sandbox for Uyuni and configuring an IDE to develop and debug Cucumber end-to-end tests."
    uploadDate: 2020-12-18T13:13:27-08:00
    duration: PT57M26S
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


