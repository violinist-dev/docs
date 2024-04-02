---
title: "labels_security"
date: 2019-04-04T20:22:04+02:00
anchor: "labels_security"
weight:
---

> This feature is only available on the agency and enterprise plans.

## Configuration

__name__: labels_security
__type__: array
__default__: []

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "labels_security": []
    }
  }
}
{{< /highlight >}}

An array of labels that should be added to the merge request, if the merge request is for a security update.

> Note! This option is not supported for Bitbucket, as Bitbucket does not support labels for their pull requests.

## Explanation

If you need to label the merge requests coming from violinist that are security updates, for example for sorting them or even run logic in your CI pipeline, this option is probably what you want.

> Note! Security labels will be added in addition to any labels you have configured with the option `labels`.

## Example

Say you wanted to label all security related pull requests coming from violinist with the label `security asap`. And say your composer.json looks something like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project"
}
{{< /highlight >}}


To make Violinist add the label `security asap` to all of the pull requests created that are security updates, simply add the following to your composer.json:


{{< highlight JSON "hl_lines=4-10" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "extra": {
    "violinist": {
      "labels_security": [
        "security asap"
      ]
    }
  }
}
{{< /highlight >}}
