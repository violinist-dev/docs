import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

var map = {"allow-list":"configuration/allow_list","allow_update_direct_with_only_dependencies":"configuration/allow_update_indirect_with_direct","updating-beyond":"configuration/allow_updates_beyond_constraint","always-allow-direct":"configuration/always_allow_direct_dependencies","updating-all":"configuration/always_update_all","assignees":"configuration/assignees","automerge":"configuration/automerge","automerge_security":"configuration/automerge_security","blacklisting-projects":"configuration/blacklist","blocklisting-projects":"configuration/blocklist","branch-prefix":"configuration/branch_prefix","branches":"introduction/branches","bundled-packages":"configuration/bundled_packages","check-only-direct":"configuration/check_only_direct_dependencies","commands":"introduction/commands","commit_message_convention":"configuration/commit_message_convention","config-branches":"introduction/config-branches","contribute":"introduction/contribute","default_branch":"configuration/default_branch","extensions":"introduction/extensions.txt","labels":"configuration/labels","labels_security":"configuration/labels_security","number-of-concurrent-updates":"configuration/number_of_concurrent_updates","one-pull-request-per-package":"configuration/one_pull_request_per_package","repo-access":"introduction/repository-access","run-scripts":"configuration/run_scripts","security-updates-only":"configuration/security_updates_only","timeframe_disallowed":"configuration/timeframe_disallowed","timezone":"configuration/timezone","update_dev_dependencies":"configuration/update_dev_dependencies","update-with-deps":"configuration/update_with_dependencies"}

if (ExecutionEnvironment.canUseDOM) {
  // Check if we have a hash in the url.
  if (window.location.hash) {
    processHash();
  }
  window.addEventListener(
    "hashchange",
    () => {
      processHash()
    },
    false,
  );
}

function processHash () {
    // Get the hash and remove the #.
    const hash = window.location.hash.slice(1);
    // See if we have it in the map.
    if (map[hash]) {
      window.location.href = '/' + map[hash]
    }
}
