---
title: Test Report Vibes, a deterministic Cucumber report summary tool
date: 2026-05-09T12:00:00+00:00
author: Oscar Barrios
layout: post
comments: true
desc: A small deterministic report tool I vibe-coded on the train ride home from SeleniumConf.
permalink: /test-report-vibes-tool/
keywords: "cucumber,seleniumconf,test automation,python,reporting"
categories:
  - Development
tags:
  - Test
  - Automation
  - Python
---

Yesterday, on the train back from **SeleniumConf**, I opened my laptop and started vibe-coding a small idea inspired by several talks and hallway discussions: make failure triage from Cucumber runs faster, cleaner, and deterministic.

That is how **Test Report Vibes** was born:

- Repo: [github.com/srbarrios/test-report-vibes](https://github.com/srbarrios/test-report-vibes)
- Focus: deterministic HTML summaries of Cucumber test reports
- Goal: quickly review what failed and why, without noisy report clutter

<img width="150" src="https://github.com/user-attachments/assets/2d347d22-b88e-472f-8416-595caaed4524" />

## Why I built it

A recurring theme at SeleniumConf was practical feedback loops: when tests fail, teams need quick and reliable context to decide what to fix first.

Most large reports are too broad when what you need is this:

- failing, undefined, and pending steps first
- scenario context preserved
- recurring error patterns highlighted
- plain, deterministic summary with no external AI dependency

So I built exactly that.

## What Test Report Vibes does

`test-report-vibes` transforms Cucumber JSON into a focused, self-contained HTML report.

It includes:

- filtered output for failed/undefined/pending steps
- pass/fail/skipped stats across the full run
- grouped issues by feature
- deterministic executive summary cards
- optional tag-based classification (`@new_issue`, `@flaky`, etc.)
- screenshot rendering from supported embeddings/hooks

## Quick usage

Install from source:

```bash
git clone https://github.com/srbarrios/test-report-vibes.git
cd test-report-vibes
pip install -e .
```

Generate a report:

```bash
test-report-vibes examples/sample_report_with_classifiers.json
```

## A train-to-code moment

I love these moments where conference energy turns into a working tool in just a few hours. SeleniumConf gave me the spark; the train ride gave me uninterrupted focus.

If you work with Cucumber and want tighter failure triage, give it a try and tell me what you think.
