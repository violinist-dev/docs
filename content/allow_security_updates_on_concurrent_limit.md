---
title: "allow_security_updates_on_concurrent_limit"
date: 2024-06-28T13:10:02+02:00
anchor: "allow-security-updates-on-concurrent-limit"
weight: 
---


## Configuration

__name__: allow_security_updates_on_concurrent_limit
__type__: int
__default__: 0

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "allow_security_updates_on_concurrent_limit": 0
    }
  }
}
{{< /highlight >}}

Indicates if you do not want to allow security package updates when the concurrent limit is reached.

## Explanation

This option controls the Violinist's behavior when the concurrent limit is reached. By default, the Violinist does not allow bypassing any security package updates when the concurrent limit is reached. However, when the concurrent limit is reached, you must manually check and perform the security updates.

## Example

If you have used the parameter `number_of_concurrent_updates` to limit the number of concurrent, the Violinist will block any package updates, including security updates, even when the concurrent limit has been reached. In case you have, for example, limited CI minutes or any other reason, you want to keep strict control over the number of concurrent updates but still want to always allow any security package updates to bypass the concurrent limit.

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
      "allow_security_updates_on_concurrent_limit": 1
    }
  }
}
{{< /highlight >}}

This way, the security packages will always be bypassed when the concurrent limit is reached.
