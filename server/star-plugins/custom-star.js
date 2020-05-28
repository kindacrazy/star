'use strict';

exports.commands = {
	serverrules: 'reglas',
	reglas: function (target, room, user) {
		this.popupReply("|html|" + "<font size=4><b><center>Reglas</center></b></font><br />" +
					"<br />" +
					"<b>1.</b> No tocar temas sexuales en el chat.<br />" +
					"<br />" +
					"<b>2.</b> El staff tiene derecho a castigos justos en contra de un usuario con mal comportamiento.<br />" +
					"<br />" +
					"<b>3.</b> No spammear con links externos de servidores ajenos y/o páginas web de índole externa (Cero tolerancia).<br />" +
					"<br />" +
					"<b>4.</b> No aplicar minimod, recuerda que hay un staff capacitado para resolver problemas.<br />" +
					"<br />" +
					"<b>5.</b> No faltar el respeto a nadie en el servidor (dirigido a staff y <i>no</i> staff).<br />" +
					"<br />" +
					"<b>6.</b> Evita nombres de usuarios irrespetuosos o que contengan insultos en ellos.<br />" +
					"<br />" +
					"<b>7.</b> Evita el uso excesivo de mayúsculas en el chat y alargar las palabras, se considera molesto e innecesario.<br />" +
					"<br />" +
					"<b>8.</b> No inundar el chat con múltiples mensajes (<i>flood</i>).<br />" +
					"<br />" +
					"<i>Por favor sigue nuestras reglas para mantener una sana convivencia y evitar problemas, cualquier imcumplimiento de alguna de estas, será sancionado dependiendo de su gravedad.</i><br />");
	},
};