var status = 0;


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			cm.sendSimple("�ˣ�����#p9000003#����Ҫʲô��æ�𣿣�\r\n#L0#���õ������ˡ�");
		} else if (status == 1) {
			if(cm.haveItem(4031017)){
			cm.removeAll(4031017);
    		cm.warp(109050000, 0);
			cm.dispose();
			} else {
			cm.sendOk("��û��#b#t4031017##k������������ʲô����");
			cm.dispose();
			}
			cm.dispose();
		}
	}
}

function getEimForGuild(em, id) {
        var stringId = "" + id;
        return em.getInstance(stringId);
}