---
title: FailTale Uyuni PoC with CrewAI Agents
date: 2026-04-12T12:00:00+00:00
author: Oscar Barrios
layout: post
comments: true
desc: New PoC using crewAI agents to review Uyuni test failures
permalink: /failtale-uyuni-agents-poc/
keywords: "failtale,uyuni,crewai,agents,testing,automation,ai,root-cause"
categories:
  - Development
tags:
  - Test
  - Automation
  - AI
---

Hello everyone,

I want to share a new milestone of my FailTale journey: a new Proof of Concept focused on **agentic test failure review for Uyuni test environments**.

Project repository:
**[FailTale for Uyuni on GitHub](https://github.com/srbarrios/failtale-uyuni/)**

This is the second PoC after my original FailTale experiment, and it is built around a multi-agent workflow powered by **crewAI**.

<br><br>

### Why this PoC

When an automated test fails in a large environment, the hardest part is not seeing the failure itself. The hardest part is collecting the right context quickly and turning it into a useful root cause hint.

This PoC focuses on automating exactly that path: from failure signal, to targeted data collection, to guided analysis.

<br><br>

### Key Features

* **Targeted Collection:** The system uses configuration files to define which logs and commands are useful for each product component.
* **Agentic Collaboration:** Multiple agents split responsibilities (target identification, data collection, and analysis) and collaborate on each failure.
* **Secure Data Retrieval:** Data is collected through SSH with minimal privileges and source-side filtering (`tail`, `grep`) to reduce noise and exposure.
* **Flexible LLM Usage:** The architecture supports cloud providers (OpenAI, Gemini) and local models through Ollama.

<br><br>

### Architecture and Workflow

The flow is collaborative instead of linear:

1. **Trigger:** FailTale receives failure context (report, failure details, screenshot, config).
2. **Targeting:** An agent identifies the most relevant hosts and components.
3. **Execution and Collection:** Agents run targeted commands via custom tools (Uyuni MCP and SSH MCP).
4. **Analysis:** The collected context is processed to generate root cause hints.
5. **Output:** Insights are returned in a format that can be injected back into test results or client tooling.

Agent roles and tasks are configured in:
- `src/failtale/config/agents.yaml`
- `src/failtale/config/tasks.yaml`

<br><br>

### Runtime Notes

The project uses Python and UV tooling, with a couple of important runtime prerequisites:

* `GOOGLE_API_KEY` configured in `.env` (Gemini is the default provider).
* `docker` available in `PATH` for the Uyuni MCP tool.
* `npx` available in `PATH` for the SSH MCP tool.
* Ollama running locally with `nomic-embed-text` for knowledge embeddings.

A practical detail I like in this PoC is that inputs can be pointed to one concrete failure through `.env` variables (`CONFIG_PATH`, `TEST_REPORT_PATH`, `TEST_FAILURE_PATH`, `SCREENSHOT_PATH`), which makes it easier to run focused analysis sessions.

<br><br>

### Cucumber Integration

One of the most useful integrations is triggering FailTale in a Cucumber `After` hook only when a scenario fails. The hook can persist failure artifacts and call `crewai run` automatically, making post-failure debugging far more consistent.

<br><br>

### What I Like Most About This Iteration

Compared to the first PoC, this version moves toward a cleaner and more modular architecture:

* Configuration-driven targeting by component role.
* Better separation between orchestration and data collection tools.
* Better support for combining product context and documentation knowledge.

The result is not just "more AI", but a workflow that is easier to evolve and reason about.

<br><br>

### Next Steps

I plan to keep improving this PoC in three directions:

* Better prompt and task design for more consistent root cause quality.
* More reusable integrations with existing test frameworks.
* More observability around agent decisions to validate and tune the workflow.

If you are working with Uyuni, Cucumber-based suites, or large acceptance test environments, I would love your feedback.

