---
title: "matchRules"
---

## Configuration

<div className="config-wrapper"><div className="config">__name__: matchRules</div>
<div className="config">__type__: array</div>
<div className="config">__required__: yes</div></div>

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Symfony packages",
          "slug": "symfony-group",
          // highlight-start
          "matchRules": [
            {
              "type": "names",
              "values": ["symfony/*"]
            }
          ],
          // highlight-end
          "config": {
            "automerge": 1
          }
        }
      ]
    }
  }
}
```

An array of match rule objects that determine which packages this rule applies to. At least one match rule is required.

## Explanation

The `matchRules` property defines the criteria for determining which packages should be affected by this rule. Each match rule has a `type` and additional properties depending on the type.

A package will be matched if it satisfies **at least one** of the match rules in the array. This allows you to combine different matching criteria for a single rule.

## Match Rule Types

### names

The `names` match rule type matches packages based on their name using pattern matching.

**Properties:**
- **type**: Must be set to `"names"`
- **values**: An array of package name patterns

**Pattern Features:**
- **Wildcards**: Use `*` to match any characters (e.g., `"symfony/*"` matches all Symfony packages)
- **Negation**: Prefix a pattern with `!` to exclude packages (e.g., `"!symfony/yaml"` excludes symfony/yaml)
- **Multiple patterns**: Combine multiple patterns in the values array

## Examples

### Example 1: Simple Wildcard Match

Match all packages in the Symfony namespace:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Symfony packages",
          // highlight-start
          "matchRules": [
            {
              "type": "names",
              "values": ["symfony/*"]
            }
          ]
          // highlight-end
        }
      ]
    }
  }
}
```

### Example 2: Multiple Packages

Match specific packages:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Core Laravel Packages",
          // highlight-start
          "matchRules": [
            {
              "type": "names",
              "values": [
                "laravel/framework",
                "laravel/sanctum",
                "laravel/tinker"
              ]
            }
          ]
          // highlight-end
        }
      ]
    }
  }
}
```

### Example 3: Wildcard with Negation

Match all Drupal packages except specific ones:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Drupal Contrib",
          // highlight-start
          "matchRules": [
            {
              "type": "names",
              "values": [
                "drupal/*",
                "!drupal/core-composer-scaffold",
                "!drupal/core-project-message",
                "!drupal/core-recommended"
              ]
            }
          ]
          // highlight-end
        }
      ]
    }
  }
}
```

### Example 4: Multiple Wildcards

Match packages from multiple namespaces:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Testing Packages",
          // highlight-start
          "matchRules": [
            {
              "type": "names",
              "values": [
                "phpunit/*",
                "mockery/*",
                "phpspec/*",
                "pest*"
              ]
            }
          ]
          // highlight-end
        }
      ]
    }
  }
}
```

### Example 5: Multiple Match Rules

Use multiple match rules to match packages from different criteria:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      "rules": [
        {
          "name": "Frontend and Build Tools",
          // highlight-start
          "matchRules": [
            {
              "type": "names",
              "values": ["webpack", "webpack-*"]
            },
            {
              "type": "names",
              "values": ["vite", "vite-*"]
            }
          ]
          // highlight-end
        }
      ]
    }
  }
}
```

In this example, packages will match if they match either the webpack patterns OR the vite patterns.
