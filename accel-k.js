/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

const windows = require("sdk/window/utils");
const tabs = require("sdk/tabs/utils");
const prefs = require("sdk/preferences/service");

require("sdk/hotkeys").Hotkey({
	combo: "accel-k",
	onPress: function () {
		var tab = tabs.getActiveTab(windows.getMostRecentBrowserWindow());
		var tabbrowser = tabs.getTabBrowserForTab(tab);
		tab = tabbrowser.duplicateTab(tab);
		if (!prefs.get("browser.tabs.loadInBackground", true))
			tabbrowser.selectedTab = tab;
	}
});

