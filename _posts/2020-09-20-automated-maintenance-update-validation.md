---
title: 'Automated maintenance update validations'
date: 2020-09-20T19:07:00+00:00
author: Oubiti
layout: post
comments: true
desc: 'Automated maintenance update validations'
permalink: /automated-mu-validation/    
icon: /static/assets/img/blog/maintenance_update.png
keywords: "test,pipelines,maintenance"
categories:
  - Development
tags:
  - QA
  - Maintenance
  - Automation
---

I presented this session at SUSECON Digital 2020.

In the past, our products were validated manually for every maintenance update, requiring as much as three days to complete. Now, having integrated the maintenance QA process into the main project lifecycle, we are able to automate the maintenance update validation using the same technology that had been implemented for end-to-end tests in our continuous Integration workflow. 

During the presentation, we are going to show how we have a faster and unassisted deployment using Terraform & Salt and how we use Jenkins pipelines to run a set of Cucumber tests in parallel. These tests are designed to bootstrap clients while simultaneously deploying SLESx, Ubuntu, etc. Of course this architecture can also be adopted by other projects with similar needs.

<div class="video-container">
	<center>
		<iframe 
			width="800" 
			height="500" 
			src="https://www.youtube.com/embed/U1osyy6Lk00" 
			frameborder="0" 
			allow="autoplay; encrypted-media; picture-in-picture" 
			allowfullscreen>
		</iframe>
	</center>
</div>
