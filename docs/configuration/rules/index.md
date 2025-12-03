---
title: "rules (beta)"
---


## Configuration

<div className="config-wrapper"><div className="config">__name__: rules</div>
<div className="config">__type__: array</div>
<div className="config">__default__: []</div></div>

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      // highlight-next-line
      "rules": []
    }
  }
}
```

>This option is currently in __beta__. This means its options are considered stable (no backwards incompatible changes will be added), but that there are some stability and usability improvements expected.

This option is used to group several packages together and apply different configuration settings to different groups of packages. The groups will be used to both differentiate the configuration and to group the updates together in a merge request.

## Explanation

If you want to group some packages together in a more flexible pattern than using [bundled_packages](/configuration/bundled_packages), then this option is for you. The main differences between them are:

- [bundled_packages](/configuration/bundled_packages) will only update its bundled packages if the "parent" package has an update, while rules can update the group if any of the packages has an update.
- Rules make it possible to have different configurations per group. For example, if you wanted one group to be automerged but the rest of the updates not.
- Rules support pattern matching with wildcards and negation, making them much more flexible.

## Rule Structure

Each rule in the `rules` array is an object with the following properties:

- **name** (required): A human-readable name for the rule, used for display purposes
- **slug** (optional): A slug identifier for the rule (e.g., "symfony-group")
- **matchRules** (required): An array of match rule objects that determine which packages this rule applies to
- **config** (optional): Configuration options that will override the base configuration for matching packages

## Match Rules

Match rules determine which packages a rule applies to. Currently, the following match rule type is supported:

### Names Match Rule

The `names` match rule type allows you to match packages by their name using patterns.

Properties:
- **type**: Must be set to `"names"`
- **values**: An array of package name patterns to match

Pattern matching features:
- **Wildcards**: Use `*` to match any characters (e.g., `"symfony/*"` matches all Symfony packages)
- **Negation**: Prefix a pattern with `!` to exclude packages (e.g., `"!drupal/core"` excludes drupal/core)
- Multiple patterns can be combined in the `values` array

## Configuration Options

Any Violinist configuration option can be overridden in the `config` section of a rule. Some commonly used options include:

- `automerge` - Enable automerge for packages matching this rule
- `automerge_security` - Enable automerge for security updates
- `labels` - Add specific labels to pull requests for this group
- `assignees` - Assign specific users to pull requests for this group
- `update_dev_dependencies` - Control whether to update dev dependencies
- `check_only_direct_dependencies` - Check only direct dependencies
- `default_branch` - Specify a different target branch for pull requests
- And many more - see the configuration documentation for all available options

## Examples

### Example 1: Automerge Symfony Packages

If you want Violinist to automerge all packages in the `symfony/*` namespace, but not other packages in your project:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      // highlight-start
      "rules": [
        {
          "name": "Symfony packages",
          "slug": "symfony-group",
          "matchRules": [
            {
              "type": "names",
              "values": [
                "symfony/*"
              ]
            }
          ],
          "config": {
            "automerge": 1
          }
        }
      ]
      // highlight-end
    }
  }
}
```

### Example 2: Exclude Specific Packages with Negation

This example matches all Drupal packages except for certain core packages, and assigns them to a specific team member:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      // highlight-start
      "rules": [
        {
          "name": "Drupal Contrib Modules",
          "slug": "drupal-contrib",
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
          ],
          "config": {
            "assignees": ["drupal-team-lead"]
          }
        }
      ]
      // highlight-end
    }
  }
}
```

### Example 3: Different Labels for Different Package Groups

This example assigns different labels to different groups of Laravel-related packages:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      // highlight-start
      "rules": [
        {
          "name": "Laravel Core Packages",
          "matchRules": [
            {
              "type": "names",
              "values": [
                "laravel/framework",
                "laravel/sanctum",
                "laravel/tinker"
              ]
            }
          ],
          "config": {
            "labels": ["laravel-core", "dependencies"]
          }
        },
        {
          "name": "Laravel Development Tools",
          "matchRules": [
            {
              "type": "names",
              "values": [
                "laravel/telescope",
                "laravel/horizon",
                "barryvdh/*"
              ]
            }
          ],
          "config": {
            "labels": ["laravel-dev", "dependencies"]
          }
        },
        {
          "name": "Spatie Laravel Packages",
          "matchRules": [
            {
              "type": "names",
              "values": [
                "spatie/laravel-*"
              ]
            }
          ],
          "config": {
            "labels": ["spatie", "laravel", "dependencies"]
          }
        }
      ]
      // highlight-end
    }
  }
}
```

### Example 4: Automerge Security Patches for Magento

This example automatically merges security updates for Magento packages, and only applies patch-level updates to Magento:

```json showLineNumbers
{
  "name": "company/project",
  "extra": {
    "violinist": {
      // highlight-start
      "rules": [
        {
          "name": "Magento Security Patches",
          "matchRules": [
            {
              "type": "names",
              "values": [
                "magento/*"
              ]
            }
          ],
          "config": {
            "automerge_security": 1,
            "composer_outdated_flag": "patch"
          }
        }
      ]
      // highlight-end
    }
  }
}
```

## Multiple Match Rules

A single rule can have multiple match rules. The package must match at least one of the match rules for the rule's configuration to apply.

## Priority and Merging

When multiple rules match the same package, their configurations are merged. Later rules in the array will override settings from earlier rules if there are conflicts.
