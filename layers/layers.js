var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIPOLAN_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIPOLAN_1 = format_ADMINISTRASIPOLAN_1.readFeatures(json_ADMINISTRASIPOLAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIPOLAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIPOLAN_1.addFeatures(features_ADMINISTRASIPOLAN_1);
var lyr_ADMINISTRASIPOLAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIPOLAN_1, 
                style: style_ADMINISTRASIPOLAN_1,
                popuplayertitle: "ADMINISTRASI POLAN",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIPOLAN_1.png" /> ADMINISTRASI POLAN'
            });
var format_WISATAPOLANHARJO_2 = new ol.format.GeoJSON();
var features_WISATAPOLANHARJO_2 = format_WISATAPOLANHARJO_2.readFeatures(json_WISATAPOLANHARJO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WISATAPOLANHARJO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WISATAPOLANHARJO_2.addFeatures(features_WISATAPOLANHARJO_2);
var lyr_WISATAPOLANHARJO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WISATAPOLANHARJO_2, 
                style: style_WISATAPOLANHARJO_2,
                popuplayertitle: "WISATA POLANHARJO",
                interactive: true,
                title: '<img src="styles/legend/WISATAPOLANHARJO_2.png" /> WISATA POLANHARJO'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIPOLAN_1.setVisible(true);lyr_WISATAPOLANHARJO_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIPOLAN_1,lyr_WISATAPOLANHARJO_2];
lyr_ADMINISTRASIPOLAN_1.set('fieldAliases', {'Desa': 'Desa', 'Kec': 'Kec', 'Kab': 'Kab', 'Prov': 'Prov', });
lyr_WISATAPOLANHARJO_2.set('fieldAliases', {'H': 'H', 'Objek': 'Objek', 'Y': 'Y', 'X': 'X', 'Jam Buka': 'Jam Buka', 'HTM': 'HTM', 'Fasilitas': 'Fasilitas', 'Transaksi': 'Transaksi', 'CP': 'CP', });
lyr_ADMINISTRASIPOLAN_1.set('fieldImages', {'Desa': 'TextEdit', 'Kec': 'TextEdit', 'Kab': 'TextEdit', 'Prov': 'TextEdit', });
lyr_WISATAPOLANHARJO_2.set('fieldImages', {'H': 'ExternalResource', 'Objek': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Jam Buka': 'TextEdit', 'HTM': 'TextEdit', 'Fasilitas': 'TextEdit', 'Transaksi': 'TextEdit', 'CP': 'TextEdit', });
lyr_ADMINISTRASIPOLAN_1.set('fieldLabels', {'Desa': 'inline label - always visible', 'Kec': 'inline label - visible with data', 'Kab': 'inline label - visible with data', 'Prov': 'inline label - visible with data', });
lyr_WISATAPOLANHARJO_2.set('fieldLabels', {'H': 'no label', 'Objek': 'inline label - always visible', 'Y': 'inline label - always visible', 'X': 'inline label - always visible', 'Jam Buka': 'inline label - always visible', 'HTM': 'inline label - always visible', 'Fasilitas': 'inline label - always visible', 'Transaksi': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_WISATAPOLANHARJO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});