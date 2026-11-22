---
title: "Moving a Large Cucumber Suite from Capybara and Selenium to Playwright"
date: 2026-11-22T13:00:00+00:00
author: Oscar Barrios
layout: post
comments: true
desc: A proof of concept that migrates the Uyuni web test framework from Ruby, Capybara and Selenium to TypeScript, Playwright and CucumberJS.
permalink: /uyuni-playwright-cucumberjs/
keywords: "playwright,cucumberjs,typescript,capybara,selenium,migration,bdd,test automation,uyuni"
categories:
  - Development
tags:
  - Test
  - Automation
  - Playwright
---

During Hack Week I explored what it would take to replace the browser layer of a large BDD test suite. The result is a proof of concept, **[uyuni-cucumber-playwright](https://github.com/srbarrios/uyuni-cucumber-playwright)**, that moves the Uyuni web tests from **Capybara + Selenium (Ruby)** to **Playwright (TypeScript)** with **CucumberJS** as the test runner. The Hack Week project page is [here](https://hackweek.opensuse.org/25/projects/move-uyuni-test-framework-from-selenium-to-playwright).

<br><br>

### Why migrate

* **Playwright's auto-waiting** removes most of the explicit waits and a good share of the timing-related flakiness.
* **Tooling**: traces, screenshots and video come out of the box, which shortens the analysis of a failed run.
* **Ecosystem**: TypeScript and Playwright are what many teams use today, which makes the suite easier to share and to hire for.

The Gherkin feature files, which describe the behaviour, are the part worth preserving. What changes is the implementation of the steps and the runner.

### How the project is organised

* `testsuite/features/`: the Gherkin scenarios.
* `testsuite/step_definitions/`: the steps, now in TypeScript.
* `testsuite/helpers/`: API clients, configuration and shared actions.
* `config/cucumber.cjs`: CucumberJS profiles.

### Running subsets with profiles

The suite is executed in ordered stages, and each stage is a CucumberJS **profile** listing its feature files (sanity check, core, repository sync, client initialisation, proxy, finishing). `npm run cucumber:core`, for example, runs only the `core` profile. Adding a new subset means adding a profile with its `paths` and an npm script.

### Lessons so far

1. Keep the feature files stable and migrate step by step, so both stacks can be compared on the same scenarios.
2. Treat the migration as a chance to remove obsolete steps, not only to translate them.
3. Measure flakiness before and after; otherwise the benefit is only an impression.

It is a proof of concept and the repository is now archived, but it shows the migration path is realistic for a suite of this size.
