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

## Why are Config branches not configuration 
