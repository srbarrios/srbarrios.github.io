---
title: "Detecting Flaky Tests with Prometheus, Gemini and Grafana"
date: 2026-11-22T12:00:00+00:00
author: Oscar Barrios
layout: post
comments: true
desc: An open-source, Dockerised agent that reads Jenkins test history from Prometheus, classifies flaky tests with an LLM and exposes the result to Grafana.
permalink: /jenkins-flaky-tests-detector/
keywords: "flaky tests,jenkins,prometheus,grafana,gemini,llm,testops,observability,docker,salt"
categories:
  - Development
tags:
  - Test
  - Automation
  - AI
  - Observability
---

Flaky tests erode trust in a CI/CD pipeline. When a build goes red, nobody knows whether it is a real regression or yet another test that fails "sometimes". I open-sourced the tool I built to answer that question with data: **[jenkins-flaky-tests-detector](https://github.com/srbarrios/jenkins-flaky-tests-detector)**.

<br><br>

### The problem with failure counters

A dashboard that only counts failures cannot tell a flaky test from a legitimate regression. The difference is in the *shape* of the history:

* a **regression** is a linear change: it passes, then it fails from some build onwards;
* a **flaky test** oscillates: pass, fail, pass, pass, fail, without a change in the code under test.

### How it works

The `flaky-detector` is a small Python agent that runs in a loop:

1. **Harvests** the last days of test results from Prometheus, where they are published by a `jenkins-exporter`.
2. **Reconstructs** the time series. Prometheus only has samples when a test ran, so missing points are inferred as "pass".
3. **Classifies** each test. Obvious cases are resolved with deterministic rules; the ambiguous ones are sent to a Gemini model that decides between chaotic oscillation and linear regression.
4. **Exposes** the result as a JSON file served over HTTP, ready to be consumed by Grafana through the Infinity data source.

```
Jenkins -> jenkins-exporter -> Prometheus -> flaky-detector -> flaky_tests.json -> Grafana
```

### Operating it

The agent ships as a Docker image with a sidecar web server for the JSON output. A single `config.yaml` defines the Prometheus URL, the Jenkins job (or `all` to auto-discover), the look-back window and the model. In my setup it is deployed with a Salt state, with the API key kept in the pillar, and re-analyses every few hours.

### Why a hybrid approach

Using an LLM for every test would be slow and expensive, and using only rules would miss the grey areas. Rules first, model for the doubtful cases, is a pattern I find useful in many TestOps problems: keep the deterministic part deterministic, and spend the model's reasoning where it adds value.

The project is open source and no longer actively maintained, but the code remains available.
