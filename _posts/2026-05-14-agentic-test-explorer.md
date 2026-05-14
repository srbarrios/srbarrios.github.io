---
title: "Agentic Test Explorer: Open-Sourcing My AI-Driven Exploratory Testing Framework"
date: 2026-05-14T12:00:00+00:00
author: Oscar Barrios
layout: post
comments: true
desc: A product-agnostic, AI-driven exploratory testing framework built with LangGraph to help Quality Engineering teams.
permalink: /agentic-test-explorer/
icon: /static/assets/img/blog/agentic-test-explorer.png
keywords: "agentic,exploratory testing,langgraph,playwright,ai,qa,automation,mcp,claude"
categories:
  - Development
tags:
  - Test
  - Automation
  - AI
---

I just open-sourced my Proof of Concept for **Agentic Test Explorer**, a product-agnostic, AI-driven exploratory testing framework built with **LangGraph**.

Project repository: https://github.com/srbarrios/agentic-test-explorer

What started as a private project for a specific application has been completely refactored to be adaptable to any web stack. The goal is to evolve this autonomous QA approach with community feedback shaping its direction.

<br><br>

### What It Does

Configure it for your stack via a small `config.yaml`, point it at your app, and let specialized agents drive a real browser to find bugs, render anomalies, and unscripted edge cases.

It intelligently gathers test context directly from **Pull Requests**, **documentation**, or **API specifications** via **MCP tools**.

<br><br>

### Architecture

The framework is built on a **Supervisor-Worker Swarm** pattern powered by LangGraph, Playwright, and your choice of **Claude** (default) or **Google Gemini**.

Based on the mission type, the system spins up either a **Standard** or **Advanced** routing graph:

- **Standard QA Swarm**: Three personas (New User, Power User, Adversarial User) for core exploratory testing.
- **Advanced Testing Swarm**: Five specialized agents (Accessibility, Data Heavy, Impatient, Returning User, and Explorer) for deeper coverage.

A **Supervisor** node dynamically evaluates the workspace state and dispatches control to specialized worker nodes. Agents never touch the browser directly. Instead they emit strict JSON intents to a **Record-and-Translate Browser Engine**, which validates selectors, executes commands with Playwright, and captures an Accessibility Tree / DOM snapshot.

<br><br>

### Key Features

* **Product-Agnostic**: One small `config.yaml` adapts the framework to any web app.
* **Persona-Driven QA Agents**: Eight agents, each prompted around a specific testing strategy.
* **Record-and-Translate Engine**: Agents emit JSON intents; the deterministic engine executes and records every step to an immutable Action Tape. Every bug automatically generates a reproducible `reproduction_*.spec.ts` Playwright script.
* **Resilient Selector Policy**: The engine rejects brittle XPath / positional selectors at runtime, enforcing `data-test-subj` > `aria-label` > visible text priority.
* **Self-Healing Browser Execution**: Errors are returned as natural language so agents can adapt strategies on the fly.
* **Bring-Your-Own MCP**: Plug in any MCP servers via `mcp_servers.json` for domain knowledge.
* **Bring-Your-Own Skills**: Install Agent Skills under `AGENT_SKILLS_ROOT` and they are exposed automatically.
* **PR-Driven Test Generation**: Pass a GitHub PR URL and the framework extracts the diff, sends it to an LLM, and auto-generates targeted mission YAML covering the UI areas impacted by the code changes.
* **Automated Artifact Generation**: Every test produces execution traces, the Action Tape, bug screenshots, reproducible `.spec.ts` files, and an executive Markdown report.

<br><br>

### Quick Start

```bash
# Install
pip install -e .
playwright install chromium

# Authenticate against your app
agent-auth

# Run a standard QA mission
agent-explorer --missions missions/new_user_agent.yaml

# Run with visible browser
agent-explorer --missions missions/explorer_agent.yaml --headed

# Generate tests from a PR
agent-explorer --pr-url https://github.com/org/repo/pull/123 --execute --headed
```

<br><br>

### Test Artifacts

For every mission, the framework generates a `report_<thread_id>/` directory containing:

1. **`traces.log`** -- Full audit trail of every thought, plan, and tool invocation.
2. **`test_report.md`** -- Concise executive summary (objective, actions, bugs, PASS/FAIL).
3. **`action_tape.jsonl`** -- Line-delimited JSON log of every browser command.
4. **`reproduction_*.spec.ts`** -- Auto-generated Playwright tests, one per bug detected.
5. **`screenshots/`** -- Image evidence captured on every detected bug.

<br><br>

### Call for Feedback

My goal is to evolve this autonomous QA approach, and community feedback is critical to shaping its direction. If you are an SDET, QE Architect, or simply interested in the future of AI in software testing, I would appreciate it if you could test it out and share your thoughts. Contributions are welcomed.

