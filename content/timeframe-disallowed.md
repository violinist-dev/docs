---
title: "timeframe_disallowed"
date: 2018-03-25T10:50:02+02:00
anchor: "timeframe_disallowed"
weight: 
---

## Configuration

__name__: timeframe_disallowed
__type__: string
__default__: 0

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "timeframe_disallowed": 0
    }
  }
}
{{< /highlight >}}

Indicate what timeframe the updater are allowed and disallowed to run.

## Explanation

By default, violinist will try to run updates all of the time. When a new package is released, or when it is time to rebase the existing pull requests. If you are actively working on a project during work hours, this can be either annoying or impractical. For example, it could clog up the CI pipeline if you have many projects monitored. So maybe you want to restrict the updater to run in a certain timeframe, so these pull requests and rebased branches can run when they are not getting in your way? If that is the case, you probably want the option __timeframe_disallowed__.

If you want to combine this with your local time, you want to use the option [timezone](#timezone)

## Example

Say you want to only update the project with Violinist outside working hours. For example not inside the timeframe 6AM to 6PM (06:00 - 18:00). And say your composer.json looks like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "~1.0.0",
  }
}
{{< /highlight >}}


To make Violinist stop trying to update during working hours. Then you would specify a timeframe like so:


{{< highlight JSON "hl_lines=7-11" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "^1.4.0",
  },
  "extra": {
    "violinist": {
      "timeframe_disallowed": "06:00-18:00"
    }
  }
}
{{< /highlight >}}
