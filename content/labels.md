---
title: "labels"
date: 2019-04-04T20:22:04+02:00
anchor: "labels"
weight:
---

> This feature is only available on the agency and enterprise plans.

## Configuration

__name__: labels
__type__: array
__default__: []

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "labels": []
    }
  }
}
{{< /highlight >}}

An array of labels that should be added to the merge request.

> Note! This option is not supported for Bitbucket, as Bitbucket does not support labels for their pull requests.

## Explanation

If you need to label the merge requests coming from violinist, for example for sorting them or even run logic in your CI pipeline, this option is probably what you want.

## Example

Say you wanted to label all pull requests coming from violinist with the label `dependencies`. And say your composer.json looks something like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project"
}
{{< /highlight >}}


To make Violinist assign `my-review-user` to all of the pull requests created, simply add the following to your composer.json:


{{< highlight JSON "hl_lines=4-10" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "extra": {
    "violinist": {
      "labels": [
        dependencies"
      ]
    }
  }
}
{{< /highlight >}}
