/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Xinga - Pilot
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Information
        1.1 - Fixed the npc. -masoud
---------------------------------------------------------------------------------------------------
**/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
		return;
	}
	if(mode == 1) {
		status++;
	}
	if(mode == 0) {
		cm.sendOk("Please hold on, the plane will be taking off soon.");
	}
	if(status == 0) {
		cm.sendYesNo("The plane will be taking off soon, are you really sure you want leave? You will have buy the plane ticket again to come in here.");
	} else if(status == 1) {
		cm.sendNext("There won't be any refund on the ticket.");
	} else if(status == 2) {
		cm.warp(103000000, 0);
		cm.dispose();
	} else {
		cm.sendOk("Have a nice day");
		cm.dispose();
	}
}
