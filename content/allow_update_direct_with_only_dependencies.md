---
title: "allow_update_direct_with_only_dependencies"
date: 2018-03-25T10:50:02+02:00
anchor: "allow_update_direct_with_only_dependencies"
weight:
---

## Configuration

__name__: allow_update_direct_with_only_dependencies
__type__: int
__default__: 0

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "allow_update_direct_with_only_dependencies": 0
    }
  }
}
{{< /highlight >}}

A string representing a prefix that will be prepended before the default violinist branch name.

## Explanation

By default, violinist will create merge requests from a branch following a specific naming scheme. An update that updates psr/log from 1.0.0 to 1.1.4 would for example have a branch named `psrlog100114`.

If you want to create some logic in your CI/CD system with regards to violinist, it can be practical to have all merge requests follow a prefix pattern. So then this option comes in handy.

## Example

Say you wanted to have all merge requests to follow the following pattern (same example update as above): `violinist-prefix/psrlog100114`

> If you want to end your prefix with a special character. Say a slash (as above) or a dash. Please note that you have to specify the entire prefix string, including said last character.

Then you would add the following configuration (please note the last character is the slash in the prefix):

{{< highlight JSON "hl_lines=4-8" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "extra": {
    "violinist": {
      "branch_prefix": "violinist-prefix/"
    }
  }
}
{{< /highlight >}}
