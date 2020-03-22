---
title: 'Jenkins Pipeline &#038; Parallel Cucumber'
date: 2019-07-06T09:07:00+00:00
author: Oubiti
layout: post
comments: true
desc: 'Jenkins Pipeline &#038; Parallel Cucumber'
permalink: /jenkins-pipeline-parallel-cucumber/
enclosure:
  - |
    /static/assets/img/blog/jenkins-pipelines.mp4
    0
    video/mp4
    
icon: /static/assets/img/blog/jenkins.png
keywords: "ci,jenkins,pipelines,parallel,tests"
categories:
  - Development
---
During a hack week, I put in place a [Jenkins Pipeline](https://jenkins.io/doc/book/pipeline/) which has different stages, for our [testsuite project](https://github.com/uyuni-project/uyuni/tree/master/testsuite), so in case a stage fails further stages will be skipped. In addition, as the testsuite is written using [Cucumber](https://cucumber.io/) in Ruby, I make a profit of parallel_tests framework and gain almost 50% of total execution time.

A presented an informal demo to my team, I hope it can be useful to have an idea of Jenkins Pipelines.


<video controls preload="auto" src="/static/assets/img/blog/jenkins-pipelines.mp4"></video>

