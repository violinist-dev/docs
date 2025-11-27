---
title: "slug"
---

## Configuration

<div className="config-wrapper"><div className="config">__name__: slug</div>
<div className="config">__type__: string</div>
<div className="config">__required__: no</div></div>

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Symfony packages",
          // highlight-next-line
          "slug": "symfony-group",
          "matchRules": [
            {
              "type": "names",
              "values": ["symfony/*"]
            }
          ],
          "config": {
            "automerge": 1
          }
        }
      ]
    }
  }
}
```

A slug identifier for the rule. This is an optional field that can be used to uniquely identify a rule.

## Explanation

The `slug` property provides a machine-friendly identifier for the rule. While optional, it can be useful for:

- Programmatic identification of rules
- URL-friendly identifiers
- Tracking and logging purposes

The slug should be lowercase and use hyphens to separate words (kebab-case).

## Example

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Laravel Development Tools",
          // highlight-next-line
          "slug": "laravel-dev-tools",
          "matchRules": [
            {
              "type": "names",
              "values": ["laravel/telescope", "laravel/horizon"]
            }
          ],
          "config": {
            "labels": ["laravel-dev"]
          }
        }
      ]
    }
  }
}
```
