---
title: "security_updates_only"
date: 2021-02-05T11:11:29+01:00
anchor: "security-updates-only"
weight:
---

## Configuration

__name__: security_updates_only
__type__: int
__default__: 0

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "security_updates_only": 0
    }
  }
}
{{< /highlight >}}

Only update security updates to dependencies.

## Explanation

If you are only interested in getting automated pull requests for security updates to your dependencies, this option will do that for you.

## Example

Say you have a project with a lot of updates coming in all the time, but you are only interested in getting security updates through violinist. Then you would change the option `security_updates_only` to 1. So in practice, change composer.json to look something like this:

{{< highlight JSON "hl_lines=9" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "~1.0.0",
  },
  "extra": {
    "violinist": {
      "security_updates_only": 1
    }
  }
}
{{< /highlight >}}

This way, violinist will only send pull requests if a security updates is released of the package `vendor/package`. For a regular update, no pull request is created.
