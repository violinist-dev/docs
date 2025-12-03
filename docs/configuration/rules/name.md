---
title: "name"
---

## Configuration

<div className="config-wrapper"><div className="config">__name__: name</div>
<div className="config">__type__: string</div>
<div className="config">__required__: yes</div></div>

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          // highlight-next-line
          "name": "Symfony packages",
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

A human-readable name for the rule, used for display purposes in pull requests and the Violinist interface.

## Explanation

The `name` property is a required field that helps identify what the rule is for. It should be descriptive and clearly indicate which packages or what purpose the rule serves.

## Example

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          // highlight-next-line
          "name": "Laravel Core Packages",
          "matchRules": [
            {
              "type": "names",
              "values": ["laravel/*"]
            }
          ]
        }
      ]
    }
  }
}
```
