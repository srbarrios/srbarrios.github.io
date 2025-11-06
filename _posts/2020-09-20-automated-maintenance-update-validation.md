---
title: 'SUSECon 2020 Talk: Automated QA for Maintenance Updates'
date: 2020-09-20T19:07:00+00:00
author: Oscar Barrios
layout: post
comments: true
desc: 'SUSECon 2020 Talk: Automated QA for Maintenance Updates'
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

Hello from SUSECon Digital 2020!

This has been an amazing conference, and I was thrilled to have the opportunity to present my session, "Automated QA Maintenance Updates in SUSE Manager". For anyone who couldn't make it, I wanted to share the story of how we tackled a major challenge for our team: the long and tedious process of validating maintenance updates.

The journey began by confronting a significant bottleneck. In the past, our team spent an average of two weeks and 3-4 QA Engineers to perform a single manual validation for our monthly maintenance updates. It felt like Groundhog Day; the steps were always the same, methodical but highly repetitive.

Our key strategic shift was to stop treating maintenance QA as a separate phase and instead automate it. We achieved this by defining the QAM workflow  and then applying our existing technologies to it. During the talk, I demonstrated how we now have a fast and unassisted deployment using **Terraform** for provisioning virtual machines and **Salt** for configuration.

On top of that, we use **Jenkins Pipelines** to orchestrate the entire workflow as code. This pipeline runs a suite of **Cucumber** tests in parallel, which are written in natural language to reproduce customer steps. These automated tests perform complex actions like synchronizing products, bootstrapping clients, running various client tests, and more.

One of the best outcomes of this automation is a much happier and more efficient team. We reduced the validation time to just one or two days, allowing us to focus on more complex cases and contribute more to the development cycle. Furthermore, the architecture is scalable and can be adapted by other projects facing similar challenges. Our tech stack for this solution includes Jenkins, Terraform, Salt (as part of Sumaform), and a testing framework based on Ruby, Capybara, Cucumber, and parallel_tests.

### Watch the Full Talk Here!

The official recording of the session is available, and I've embedded it below so you can watch the full presentation and see all the details.
<div class="video-container">
<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/U1osyy6Lk00" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>
</div>