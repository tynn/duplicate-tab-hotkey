/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
browser.commands.onCommand.addListener(command => {
  if (command == "accel-k") browser.tabs
        .query({ currentWindow: true, active: true })
        .then(tabs => browser.tabs.duplicate(tabs[0].id))
})
