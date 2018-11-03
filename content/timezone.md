---
title: "timezone"
date: 2018-03-25T10:50:02+02:00
anchor: "timezone"
weight: 
---

## Configuration

__name__: timezone
__type__: string
__default__: +0000

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "timezone": "+0000"
    }
  }
}
{{< /highlight >}}

Indicate what timezone to use for the option timeframe_disallowed.

## Explanation

It would not help much to restrict the timeframe for the updates to be run, unless you could also say what timezone you were talking about. This is what the __timezone__ option is for.

## Example

Say you want to only update the project with Violinist outside working hours, and you are located in the timezone __PDT__. By default, specifying a timeframe would use the UTC timezone, so to avoid having to convert the time to your timezone, you could specify this in your composer.json. So say your project, including timeframe_disallowed, had the following composer.json: 

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "dependencies": {
    "vendor/package": "~1.0.0",
  },
  "extra": {
    "violinist": {
      "timeframe_disallowed": "06:00-18:00"
    }
  }
}
{{< /highlight >}}


To make Violinist start using your timezone, you would add something like this:


{{< highlight JSON "hl_lines=10" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "dependencies": {
    "vendor/package": "^1.4.0",
  },
  "extra": {
    "violinist": {
      "timeframe_disallowed": "06:00-18:00",
      "timezone": "-0700"
    }
  }
}
{{< /highlight >}}

You can also use one of the [predefined PHP timezones](http://php.net/manual/en/timezones.php):

{{< highlight JSON "hl_lines=10" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "dependencies": {
    "vendor/package": "^1.4.0",
  },
  "extra": {
    "violinist": {
      "timeframe_disallowed": "06:00-18:00",
      "timezone": "America/Los_Angeles"
    }
  }
}
{{< /highlight >}}
