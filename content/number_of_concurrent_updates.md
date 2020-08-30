---
title: "number_of_concurrent_updates"
date: 2018-12-06T19:28:34+01:00
anchor: "number-of-concurrent-updates"
weight:
---

## Configuration

__name__: number_of_concurrent_updates
__type__: int
__default__: 0

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "number_of_concurrent_updates": 0
    }
  }
}
{{< /highlight >}}

Indicate how many open pull requests you want at a time.

## Explanation

If you have a whole range of build steps and environments for a project per branch, having a bunch of branches come in from Violinist might clog up your build pipeline or spin up many servers. If this is the case, and you want to throttle the pull requests Violinist keeps open, then this option is for you.

## Example

If you have a large project, some times the number of dependencies that are out of date could be many, especially when starting Violinist monitoring for the first time. And maybe you are creating QA enviroments for all your branches, or maybe your branches trigger build steps that take a long time to complete. So you want to throttle Violinist somehow. Then this option is for you. So if you wanted to limit the number of open pull requests to `5`, for example, then you would change your composer.json to look something like this:

{{< highlight JSON "hl_lines=9" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "~1.0.0",
  },
  "extra": {
    "violinist": {
      "number_of_concurrent_updates": 5
    }
  }
}
{{< /highlight >}}

This way, the number of open pull requests will not pass 5 at any point. This will be true, even if you decide to change other configuration options, such as `one_pull_request_per_package` for example, so it might be the case that you have to close some pull requests manually to achieve the desired result.
