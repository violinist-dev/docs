---
title: "Config Branches"
is_intro: true
date: 2018-03-25T10:50:02+02:00
anchor: "config-branches"
weight:
---

> Note! Config branches are only available on the _agency_ and _enterprise_ plans.

It's possible to have 2 instances of a project on violinist with different update strategies. Config branches indicates which branch will be used to read the violinist config. By default, this will be read from the same branch the updates are targeting. But using config branches you can overrides this. This can be useful for a couple of different reasons:

- You are using one git repo for several projects. For example, if you use the repo for customer 1 in branch `customer1` and customer 2 in branch `customer2`. If that is the case you might want to have automated merge requests towards both branches.
- You want different strategies for different update types. Maybe you want security updates only, and merged automatically into `main` (using options `security_updates_only`, `default_branch` and `automerge`. But in addition maybe you want violinist to open regular merge requests towards `develop` without `automerge` and with all dependencies.
- You want to test some violinist option (or violinist altogether) without having to actually merge violinist config into the default (or target) branch.

## How do you specify a config branch?

When you add a new project to violinist, you will have the option to choose a config branch together with setting the URL to your project or choosing a PHP version.

> Note! This option would only be enabled if you are on a plan that support config branches. Otherwise the option would appear as disabled.

## Why are Config branches not configuration?

As the name suggests, the config branch will be used to check out a specific branch, and then read the violinist config from there. If this was used because there is no violinist config in the main branch, well, then there would be no place to read the config branch from, would there? 
