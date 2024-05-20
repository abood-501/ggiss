var wms_layers = [];

var format_Areas_0 = new ol.format.GeoJSON();
var features_Areas_0 = format_Areas_0.readFeatures(json_Areas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_0.addFeatures(features_Areas_0);
var lyr_Areas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_0, 
                style: style_Areas_0,
                popuplayertitle: "Areas",
                interactive: true,
    title: 'Areas<br />\
    <img src="styles/legend/Areas_0_0.png" /> ٠.٠ - ٥.٠<br />\
    <img src="styles/legend/Areas_0_1.png" /> ٥.٠ - ١٠.٠<br />\
    <img src="styles/legend/Areas_0_2.png" /> ١٠.٠ - ١٧.٠<br />\
    <img src="styles/legend/Areas_0_3.png" /> ١٧.٠ - ٤٨.٠<br />\
    <img src="styles/legend/Areas_0_4.png" /> ٤٨.٠ - ٥٩.٠<br />'
        });

lyr_Areas_0.setVisible(true);
var layersList = [lyr_Areas_0];
lyr_Areas_0.set('fieldAliases', {'PROV_NAME_': 'PROV_NAME_', 'قتل': 'قتل', 'غير': 'غير', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Areas_0.set('fieldImages', {'PROV_NAME_': 'TextEdit', 'قتل': 'TextEdit', 'غير': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_Areas_0.set('fieldLabels', {'PROV_NAME_': 'inline label - visible with data', 'قتل': 'inline label - visible with data', 'غير': 'inline label - visible with data', 'auxiliary_storage_labeling_lineanchorpercent': 'inline label - visible with data', 'auxiliary_storage_labeling_lineanchorclipping': 'inline label - visible with data', 'auxiliary_storage_labeling_lineanchortype': 'inline label - visible with data', 'auxiliary_storage_labeling_lineanchortextpoint': 'inline label - visible with data', });
lyr_Areas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});