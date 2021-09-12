---
title: "branch_prefix"
date: 2018-03-25T10:50:02+02:00
anchor: "branch-prefix"
weight:
---

## Configuration

__name__: branch_prefix
__type__: string
__default__: ""

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "branch_prefix": ""
    }
  }
}
{{< /highlight >}}

A string representing a prefix that will be prepended before the default violinist branch name.
