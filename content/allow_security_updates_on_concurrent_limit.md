---
title: "allow_security_updates_on_concurrent_limit"
date: 2024-06-28T13:10:02+02:00
anchor: "allow-security-updates-on-concurrent-limit"
weight: 
---


## Configuration

__name__: allow_security_updates_on_concurrent_limit
__type__: int
__default__: 1

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "allow_security_updates_on_concurrent_limit": 1
    }
  }
}
{{< /highlight >}}

Indicate if you want to allow security package updates when the concurrent limit is reached.

## Explanation

This option controls the Violinist's behavior when the concurrent limit is reached. By default, the Violinist bypasses any security package updates when the concurrent limit is reached.

## Example

By default, if you have used `number_of_concurrent_updates` to limit the number of concurrent, the Violinist will still bypass any security package updates even when the concurrent limit has been reached. In case you have, for example, limited CI minutes or any other reason still to keep strict control over the number of concurrent updates, you can do the following to ensure that the security updates will not bypass:


{{< highlight JSON "hl_lines=9" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "vendor/package": "~1.0.0",
  },
  "extra": {
    "violinist": {
      "number_of_concurrent_updates": 5,
      "allow_security_updates_on_concurrent_limit": 0
    }
  }
}
{{< /highlight >}}

This way, the security packages will not be bypassed when the concurrent limit is reached. However, when the concurrent limit is reached, you have to manually check and perform the security updates.
