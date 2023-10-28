
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GJS_DEBUG_TOPICS: string;
	export const LESSOPEN: string;
	export const npm_package_scripts_dev_i18n: string;
	export const npm_package_scripts_clean_QWER: string;
	export const npm_package_scripts_cleandeep: string;
	export const npm_package_scripts_typesafe_i18n: string;
	export const npm_package_devDependencies__iconify_json_ic: string;
	export const npm_package_devDependencies__iconify_json_tabler: string;
	export const npm_package_devDependencies__sveltejs_adapter_vercel: string;
	export const npm_package_devDependencies_flexsearch: string;
	export const USER: string;
	export const LC_TIME: string;
	export const npm_package_scripts_up: string;
	export const npm_package_scripts_createblog: string;
	export const npm_config_user_agent: string;
	export const npm_package_bugs_url: string;
	export const npm_package_scripts_up_QWER_deps: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_scripts_dev_sveltekit: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const MODE: string;
	export const SHLVL: string;
	export const npm_package_scripts_clean_sveltekit: string;
	export const npm_package_devDependencies_vite_imagetools: string;
	export const HOME: string;
	export const CONDA_SHLVL: string;
	export const OLDPWD: string;
	export const npm_package_devDependencies__sveltejs_adapter_netlify: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const npm_package_devDependencies_lz_string: string;
	export const npm_package_devDependencies_sass: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const NVM_INC: string;
	export const npm_package_scripts_build_partytown: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_package_devDependencies__unocss_transformer_variant_group: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const LC_MONETARY: string;
	export const MANAGERPID: string;
	export const npm_package_scripts_check: string;
	export const npm_package_devDependencies_rimraf: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_scripts_clean_husky: string;
	export const npm_package_devDependencies_husky: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const _CE_M: string;
	export const npm_package_devDependencies__iconify_json_bxs: string;
	export const npm_package_devDependencies__unocss_transformer_compile_class: string;
	export const npm_package_devDependencies_medium_zoom: string;
	export const npm_package_devDependencies_typescript: string;
	export const NVM_DIR: string;
	export const npm_package_homepage: string;
	export const npm_package_scripts_build_QWER: string;
	export const npm_package_devDependencies__kwchang0831_qwer: string;
	export const npm_package_devDependencies_nprogress: string;
	export const npm_config_sharp_libvips_binary_host: string;
	export const IM_CONFIG_PHASE: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_build_i18n: string;
	export const npm_package_devDependencies_prettier: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const npm_package_scripts_clean: string;
	export const npm_package_devDependencies__types_flexsearch: string;
	export const npm_config_sharp_binary_host: string;
	export const JOURNAL_STREAM: string;
	export const _: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_devDependencies__sveltejs_adapter_node: string;
	export const npm_package_devDependencies_unocss_preset_scrollbar: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_devDependencies__iconify_json_line_md: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies_tippy_js: string;
	export const npm_config_registry: string;
	export const USERNAME: string;
	export const TERM: string;
	export const npm_package_workspaces_0: string;
	export const npm_package_scripts_build_sveltekit: string;
	export const npm_package_scripts_up_deps: string;
	export const npm_package_devDependencies__unocss_extractor_svelte: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const _CE_CONDA: string;
	export const npm_package_workspaces_1: string;
	export const npm_package_scripts_changeset_add: string;
	export const WINDOWPATH: string;
	export const npm_package_scripts_dev_watch: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const INVOCATION_ID: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const npm_package_repository_type: string;
	export const XDG_MENU_PREFIX: string;
	export const LC_ADDRESS: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_devDependencies__iconify_json_vscode_icons: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const npm_package_scripts_clean_node_modules: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LC_TELEPHONE: string;
	export const npm_package_scripts_build_QWER_Without_Meta: string;
	export const npm_package_scripts_deploy_vercel_local_build: string;
	export const npm_package_lint_staged____html_scss_css_svelte_ts_js_: string;
	export const npm_package_devDependencies__unocss_transformer_directives: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies_gitmoji_cli: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const npm_package_scripts_clean_routeFolder: string;
	export const npm_package_scripts_husky: string;
	export const npm_package_devDependencies_typesafe_i18n: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const CONDA_PYTHON_EXE: string;
	export const npm_package_devDependencies__kwchang0831_svelte_qwer: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const LC_NAME: string;
	export const NODE_PATH: string;
	export const npm_package_version: string;
	export const npm_package_repository_url: string;
	export const npm_package_devDependencies__iconify_json_akar_icons: string;
	export const npm_package_devDependencies__sveltejs_adapter_cloudflare: string;
	export const npm_package_devDependencies__types_nprogress: string;
	export const npm_package_devDependencies__unocss_core: string;
	export const npm_package_devDependencies_katex: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_lint_staged: string;
	export const npm_package_devDependencies_sharp: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_tslib: string;
	export const LESSCLOSE: string;
	export const npm_package_author: string;
	export const npm_package_devDependencies_imagetools_core: string;
	export const LC_MEASUREMENT: string;
	export const npm_package_devDependencies__builder_io_partytown: string;
	export const GPG_AGENT_INFO: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const LC_IDENTIFICATION: string;
	export const npm_package_license: string;
	export const npm_package_devDependencies__unocss_preset_uno: string;
	export const QT_IM_MODULE: string;
	export const npm_package_scripts_format: string;
	export const npm_package_devDependencies__iconify_json_mdi: string;
	export const npm_package_devDependencies__unocss_reset: string;
	export const npm_package_devDependencies_eslint_plugin_prettier: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const CONDA_EXE: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const LC_NUMERIC: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_devDependencies__changesets_cli: string;
	export const npm_package_devDependencies__iconify_json_carbon: string;
	export const npm_package_devDependencies__iconify_json_fluent_emoji_flat: string;
	export const npm_package_devDependencies_cross_env: string;
	export const npm_command: string;
	export const LC_PAPER: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_unocss: string;
	export const PNPM_HOME: string;
	export const VTE_VERSION: string;
	export const npm_package_devDependencies_npm_run_all: string;
	export const INIT_CWD: string;
	export const npm_package_scripts_dev_QWER: string;
	export const npm_package_devDependencies__unocss_preset_icons: string;
	export const NODE_ENV: string;
	export const VIPSHOME: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GJS_DEBUG_TOPICS: string;
		LESSOPEN: string;
		npm_package_scripts_dev_i18n: string;
		npm_package_scripts_clean_QWER: string;
		npm_package_scripts_cleandeep: string;
		npm_package_scripts_typesafe_i18n: string;
		npm_package_devDependencies__iconify_json_ic: string;
		npm_package_devDependencies__iconify_json_tabler: string;
		npm_package_devDependencies__sveltejs_adapter_vercel: string;
		npm_package_devDependencies_flexsearch: string;
		USER: string;
		LC_TIME: string;
		npm_package_scripts_up: string;
		npm_package_scripts_createblog: string;
		npm_config_user_agent: string;
		npm_package_bugs_url: string;
		npm_package_scripts_up_QWER_deps: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		npm_package_scripts_dev_sveltekit: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		MODE: string;
		SHLVL: string;
		npm_package_scripts_clean_sveltekit: string;
		npm_package_devDependencies_vite_imagetools: string;
		HOME: string;
		CONDA_SHLVL: string;
		OLDPWD: string;
		npm_package_devDependencies__sveltejs_adapter_netlify: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		npm_package_devDependencies_lz_string: string;
		npm_package_devDependencies_sass: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		NVM_INC: string;
		npm_package_scripts_build_partytown: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_package_devDependencies__unocss_transformer_variant_group: string;
		npm_package_devDependencies_svelte_preprocess: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		npm_package_devDependencies_svelte_check: string;
		LC_MONETARY: string;
		MANAGERPID: string;
		npm_package_scripts_check: string;
		npm_package_devDependencies_rimraf: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_scripts_clean_husky: string;
		npm_package_devDependencies_husky: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		_CE_M: string;
		npm_package_devDependencies__iconify_json_bxs: string;
		npm_package_devDependencies__unocss_transformer_compile_class: string;
		npm_package_devDependencies_medium_zoom: string;
		npm_package_devDependencies_typescript: string;
		NVM_DIR: string;
		npm_package_homepage: string;
		npm_package_scripts_build_QWER: string;
		npm_package_devDependencies__kwchang0831_qwer: string;
		npm_package_devDependencies_nprogress: string;
		npm_config_sharp_libvips_binary_host: string;
		IM_CONFIG_PHASE: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_build_i18n: string;
		npm_package_devDependencies_prettier: string;
		LOGNAME: string;
		npm_package_type: string;
		npm_package_scripts_clean: string;
		npm_package_devDependencies__types_flexsearch: string;
		npm_config_sharp_binary_host: string;
		JOURNAL_STREAM: string;
		_: string;
		npm_package_scripts_check_watch: string;
		npm_package_devDependencies__sveltejs_adapter_node: string;
		npm_package_devDependencies_unocss_preset_scrollbar: string;
		XDG_SESSION_CLASS: string;
		npm_package_scripts_lint: string;
		npm_package_devDependencies__iconify_json_line_md: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies_tippy_js: string;
		npm_config_registry: string;
		USERNAME: string;
		TERM: string;
		npm_package_workspaces_0: string;
		npm_package_scripts_build_sveltekit: string;
		npm_package_scripts_up_deps: string;
		npm_package_devDependencies__unocss_extractor_svelte: string;
		GNOME_DESKTOP_SESSION_ID: string;
		_CE_CONDA: string;
		npm_package_workspaces_1: string;
		npm_package_scripts_changeset_add: string;
		WINDOWPATH: string;
		npm_package_scripts_dev_watch: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		INVOCATION_ID: string;
		NODE: string;
		npm_package_name: string;
		npm_package_repository_type: string;
		XDG_MENU_PREFIX: string;
		LC_ADDRESS: string;
		GNOME_TERMINAL_SCREEN: string;
		XDG_RUNTIME_DIR: string;
		npm_package_devDependencies__iconify_json_vscode_icons: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		npm_package_scripts_clean_node_modules: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		LC_TELEPHONE: string;
		npm_package_scripts_build_QWER_Without_Meta: string;
		npm_package_scripts_deploy_vercel_local_build: string;
		npm_package_lint_staged____html_scss_css_svelte_ts_js_: string;
		npm_package_devDependencies__unocss_transformer_directives: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies_gitmoji_cli: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		GNOME_TERMINAL_SERVICE: string;
		npm_package_scripts_clean_routeFolder: string;
		npm_package_scripts_husky: string;
		npm_package_devDependencies_typesafe_i18n: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		CONDA_PYTHON_EXE: string;
		npm_package_devDependencies__kwchang0831_svelte_qwer: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		LC_NAME: string;
		NODE_PATH: string;
		npm_package_version: string;
		npm_package_repository_url: string;
		npm_package_devDependencies__iconify_json_akar_icons: string;
		npm_package_devDependencies__sveltejs_adapter_cloudflare: string;
		npm_package_devDependencies__types_nprogress: string;
		npm_package_devDependencies__unocss_core: string;
		npm_package_devDependencies_katex: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_lint_staged: string;
		npm_package_devDependencies_sharp: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_tslib: string;
		LESSCLOSE: string;
		npm_package_author: string;
		npm_package_devDependencies_imagetools_core: string;
		LC_MEASUREMENT: string;
		npm_package_devDependencies__builder_io_partytown: string;
		GPG_AGENT_INFO: string;
		GJS_DEBUG_OUTPUT: string;
		LC_IDENTIFICATION: string;
		npm_package_license: string;
		npm_package_devDependencies__unocss_preset_uno: string;
		QT_IM_MODULE: string;
		npm_package_scripts_format: string;
		npm_package_devDependencies__iconify_json_mdi: string;
		npm_package_devDependencies__unocss_reset: string;
		npm_package_devDependencies_eslint_plugin_prettier: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		CONDA_EXE: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		LC_NUMERIC: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_devDependencies__changesets_cli: string;
		npm_package_devDependencies__iconify_json_carbon: string;
		npm_package_devDependencies__iconify_json_fluent_emoji_flat: string;
		npm_package_devDependencies_cross_env: string;
		npm_command: string;
		LC_PAPER: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_unocss: string;
		PNPM_HOME: string;
		VTE_VERSION: string;
		npm_package_devDependencies_npm_run_all: string;
		INIT_CWD: string;
		npm_package_scripts_dev_QWER: string;
		npm_package_devDependencies__unocss_preset_icons: string;
		NODE_ENV: string;
		VIPSHOME: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
