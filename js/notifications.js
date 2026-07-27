/* --- Sistema de Anuncio Estilo Steam (Fondo con Cuadrícula) --- */
var CURRENT_ANNOUNCE_ID = "anuncio_v1.1";

document.addEventListener('DOMContentLoaded', function() {
    var seenAnnounce = localStorage.getItem('last_seen_announce_popup');

    if (seenAnnounce !== CURRENT_ANNOUNCE_ID) {
        
        var style = document.createElement('style');
        style.innerHTML = '#custom-announce-overlay {' +
            'position: fixed;' +
            'top: 0;' +
            'left: 0;' +
            'width: 100%;' +
            'height: 100%;' +
            'background-color: rgba(10, 14, 20, 0.75);' +
            'backdrop-filter: blur(6px);' +
            '-webkit-backdrop-filter: blur(6px);' +
            'display: flex;' +
            'justify-content: center;' +
            'align-items: center;' +
            'z-index: 99999;' +
            '}' +
            '#custom-announce-modal {' +
            '/* Fondo con el patrón de cuadrícula exacto de tu web */' +
            'background-color: #141c27;' +
            'background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);' +
            'background-size: 20px 20px;' +
            'border: 1px solid #2a475e;' +
            'border-radius: 4px;' +
            'padding: 30px 35px;' +
            'width: 90%;' +
            'max-width: 480px;' +
            'text-align: left;' +
            'color: #c7d5e0;' +
            'box-shadow: 0 20px 40px rgba(0,0,0,0.8);' +
            'font-family: Arial, sans-serif;' +
            '}' +
            '#custom-announce-tag {' +
            'color: #66c0f4;' +
            'font-size: 11px;' +
            'font-weight: 700;' +
            'letter-spacing: 1.5px;' +
            'text-transform: uppercase;' +
            'margin-bottom: 8px;' +
            'display: block;' +
            '}' +
            '#custom-announce-modal h2 {' +
            'margin: 0 0 12px 0;' +
            'color: #ffffff;' +
            'font-size: 20px;' +
            'font-weight: bold;' +
            'letter-spacing: 0.5px;' +
            'text-transform: uppercase;' +
            '}' +
            '#custom-announce-modal p {' +
            'color: #8f98a0;' +
            'font-size: 14px;' +
            'margin-bottom: 25px;' +
            'line-height: 1.6;' +
            '}' +
            '.announce-btn-group {' +
            'display: flex;' +
            'gap: 10px;' +
            'justify-content: flex-end;' +
            '}' +
            '.announce-btn {' +
            'padding: 10px 22px;' +
            'border-radius: 2px;' +
            'font-size: 13px;' +
            'font-weight: normal;' +
            'cursor: pointer;' +
            'text-decoration: none;' +
            'border: 1px solid transparent;' +
            'transition: all 0.2s;' +
            'display: flex;' +
            'align-items: center;' +
            'justify-content: center;' +
            '}' +
            '#btnCloseAnnounce {' +
            'background-color: #2a475e;' +
            'color: #c7d5e0;' +
            'border-color: #325f82;' +
            '}' +
            '#btnCloseAnnounce:hover {' +
            'background-color: #325f82;' +
            'color: #ffffff;' +
            '}' +
            '#btnGoToAnnounce {' +
            'background-color: #5c9424;' +
            'color: #ffffff;' +
            'font-weight: bold;' +
            'border: none;' +
            '}' +
            '#btnGoToAnnounce:hover {' +
            'background-color: #7ab92e;' +
            '}' +
            '.play-icon {' +
            'width: 0;' +
            'height: 0;' +
            'border-style: solid;' +
            'border-width: 5px 0 5px 8px;' +
            'border-color: transparent transparent transparent #ffffff;' +
            'margin-right: 8px;' +
            'display: inline-block;' +
            '}';
        document.head.appendChild(style);

        var overlay = document.createElement('div');
        overlay.id = 'custom-announce-overlay';
        overlay.innerHTML = '<div id="custom-announce-modal">' +
            '<span id="custom-announce-tag"></span>' +
            '<h2>NUEVO ANUNCIO DISPONIBLE</h2>' +
            '<p>Se ha publicado un nuevo cambio o novedad importante en la sección de anuncios de la página. Pásate a revisar los detalles.</p>' +
            '<div class="announce-btn-group">' +
            '<button id="btnCloseAnnounce" class="announce-btn">Cerrar</button>' +
            '<a href="anuncios.html" id="btnGoToAnnounce" class="announce-btn">' +
                '<span class=</span>Ver Anuncio' +
            '</a>' +
            '</div>' +
            '</div>';
        document.body.appendChild(overlay);

        var markAsSeen = function() {
            localStorage.setItem('last_seen_announce_popup', CURRENT_ANNOUNCE_ID);
            overlay.remove();
        };

        document.getElementById('btnGoToAnnounce').addEventListener('click', markAsSeen);
        document.getElementById('btnCloseAnnounce').addEventListener('click', markAsSeen);
        
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                markAsSeen();
            }
        });
    }
});