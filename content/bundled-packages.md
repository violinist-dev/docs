---
title: "bundled_packages"
date: 2018-03-25T10:50:02+02:00
anchor: "bundled-packages"
weight:
---

## Configuration

__name__: bundled_packages
__type__: array
__default__: []

{{< highlight JSON "hl_lines=5" >}}
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "bundled_packages": []
    }
  }
}
{{< /highlight >}}


An array of packages to bundle with other packages, keyed by the main package.

>Quite often you probably want to also avoid getting pull requests for the packages you are bundling. To do this, you probably want to use a [block list](#blocklisting-projects) the packages in question.

## Explanation

Some times you depend on packages that are typically released in new versions at the same time. For example symfony packages. So instead of getting one pull request per symfony package your project depends on, you can get one pull request with all of them, bundled together with the update of one package.

This is even better when coupled with a block list of projects, so you just skip those bundled packages all together.

If you want to bundle some projects, you can add some extra information into your composer.json.

## Examples

### Simple example

Say your project depends on both `symfony/dom-crawler` and `symfony/yaml`. And you want to get them both updated in one pull request, bundled with `symfony/dom-crawler`. And say your composer.json looks something like this:

{{< highlight JSON >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "symfony/dom-crawler": "^3.4",
    "symfony/yaml": "^3.4"
  }
}
{{< /highlight >}}


To make Violinist update them both together, you would do something like this:


{{< highlight JSON "hl_lines=8-16" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "symfony/dom-crawler": "^3.4",
    "symfony/yaml": "^3.4"
  },
  "extra": {
    "violinist": {
      "bundled_packages": {
        "symfony/dom-crawler": [
          "symfony/yaml"
        ]
      }
    }
  }
}
{{< /highlight >}}

### Example with a block list

> With the configuration above, when a new release is released for __symfony/dom-crawler__ and __symfony/yaml__ (which usually are released at the same time) you will get 2 pull requests. One pull request will update symfony/dom-crawler, bundled with symfony/yaml. The other one will update symfony/yaml. This is probably not what you want. You probably want to have just the one pull request for symfony/dom-crawler where symfony/yaml is already updated, and not get individual pull requests for symfony/yaml. To achieve this, you need to also add symfony/yaml to the block list. Like so:

{{< highlight JSON "hl_lines=8-19" >}}
{
  "name": "company/project",
  "description": "My awesome project",
  "require": {
    "symfony/dom-crawler": "^3.4",
    "symfony/yaml": "^3.4"
  },
  "extra": {
    "violinist": {
      "bundled_packages": {
        "symfony/dom-crawler": [
          "symfony/yaml"
        ]
      },
      "blocklist": [
        "symfony/yaml"
      ]
    }
  }
}
{{< /highlight >}}
