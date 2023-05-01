/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	tutorialSidebar: [
		'intro',
		{
			type: 'category',
			label: 'Getting Started',
			items: [
				'getting_started/how_to_use_windmill/index',
				{
					type: 'category',
					label: 'Scripts Quickstart',
					items: [{ type: 'autogenerated', dirName: 'getting_started/0_scripts_quickstart' }]
				},
				'getting_started/flows_quickstart/index',
				'getting_started/apps_quickstart/index',
				'getting_started/trigger_scripts/index',
				'getting_started/trigger_flows/index'
			],
			collapsed: false
		},
		{
			type: 'category',
			label: 'Core Concepts',
			items: [
				'core_concepts/variables_and_secrets/index',
				'core_concepts/resources_and_types/index',
				'core_concepts/groups_and_folders/index',
				'core_concepts/worker_groups/index',
				'core_concepts/auto_generated_uis/index',
				'core_concepts/webhooks/index',
				'core_concepts/scheduling/index',
				'core_concepts/monitor_past_and_future_runs/index',
				'core_concepts/error_handling_in_flows/index',
				'flows/sleep',
				'flows/flow_approval',
			],
			collapsed: true
		},
		{
			type: 'category',
			label: 'Flow Editor',
			items: [
				'flows/flow_editor',
				'flows/flow_error_handler',
				'flows/retries',
				'flows/flow_loops',
				'flows/flow_branches',
				'flows/flow_trigger',
				'flows/early_stop',
				'flows/sleep',
				'flows/flow_approval',
			],
			collapsed: true
		},
		{
			type: 'category',
			label: 'App Editor',
			items: [{ type: 'autogenerated', dirName: 'apps' }],
			collapsed: true
		},
		{
			type: 'category',
			label: 'Integrations',
			items: [{ type: 'autogenerated', dirName: 'integrations' }],
			collapsed: true
		},
		{
			type: 'category',
			label: 'Advanced',
			items: [{ type: 'autogenerated', dirName: 'advanced' }],
			collapsed: false
		},
		'openflow/index',
		'reference/index',
		{
			type: 'category',
			label: 'Miscellaneous',
			items: [{ type: 'autogenerated', dirName: 'misc' }],
			collapsed: true
		}
	]
};

module.exports = sidebars;
