ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([939392.001740, 9068250.571062, 950854.178395, 9074620.136073]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesdeConservao_1 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_1 = format_UnidadesdeConservao_1.readFeatures(json_UnidadesdeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_UnidadesdeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_1.addFeatures(features_UnidadesdeConservao_1);
var lyr_UnidadesdeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_1, 
                style: style_UnidadesdeConservao_1,
                popuplayertitle: 'Unidades de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_1.png" /> Unidades de Conservação '
            });
var format_reasUrbanaseRurais_2 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_2 = format_reasUrbanaseRurais_2.readFeatures(json_reasUrbanaseRurais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasUrbanaseRurais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_2.addFeatures(features_reasUrbanaseRurais_2);
var lyr_reasUrbanaseRurais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_2, 
                style: style_reasUrbanaseRurais_2,
                popuplayertitle: 'Áreas Urbanas e Rurais',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_2.png" /> Áreas Urbanas e Rurais'
            });
var format_FundeadourosLongoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_3 = format_FundeadourosLongoPrazo_3.readFeatures(json_FundeadourosLongoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_FundeadourosLongoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_3.addFeatures(features_FundeadourosLongoPrazo_3);
var lyr_FundeadourosLongoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_3, 
                style: style_FundeadourosLongoPrazo_3,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_3.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_4 = format_FundeadourosMdioPrazo_4.readFeatures(json_FundeadourosMdioPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_FundeadourosMdioPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_4.addFeatures(features_FundeadourosMdioPrazo_4);
var lyr_FundeadourosMdioPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_4, 
                style: style_FundeadourosMdioPrazo_4,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_4.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_5 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_5 = format_FundeadourosCurtoPrazo_5.readFeatures(json_FundeadourosCurtoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_FundeadourosCurtoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_5.addFeatures(features_FundeadourosCurtoPrazo_5);
var lyr_FundeadourosCurtoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_5, 
                style: style_FundeadourosCurtoPrazo_5,
                popuplayertitle: 'Fundeadouros - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_5.png" /> Fundeadouros - Curto Prazo'
            });
var format_FundeadourosSituaoAtual_6 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_6 = format_FundeadourosSituaoAtual_6.readFeatures(json_FundeadourosSituaoAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_FundeadourosSituaoAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_6.addFeatures(features_FundeadourosSituaoAtual_6);
var lyr_FundeadourosSituaoAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_6, 
                style: style_FundeadourosSituaoAtual_6,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_6.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_7 = format_BaciasdeEvoluoLongoPrazo_7.readFeatures(json_BaciasdeEvoluoLongoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_BaciasdeEvoluoLongoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_7.addFeatures(features_BaciasdeEvoluoLongoPrazo_7);
var lyr_BaciasdeEvoluoLongoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_7, 
                style: style_BaciasdeEvoluoLongoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_7.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_8 = format_BaciasdeEvoluoMdioPrazo_8.readFeatures(json_BaciasdeEvoluoMdioPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_BaciasdeEvoluoMdioPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_8.addFeatures(features_BaciasdeEvoluoMdioPrazo_8);
var lyr_BaciasdeEvoluoMdioPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_8, 
                style: style_BaciasdeEvoluoMdioPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_8.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_9 = format_BaciasdeEvoluoCurtoPrazo_9.readFeatures(json_BaciasdeEvoluoCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_9.addFeatures(features_BaciasdeEvoluoCurtoPrazo_9);
var lyr_BaciasdeEvoluoCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_9, 
                style: style_BaciasdeEvoluoCurtoPrazo_9,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_9.png" /> Bacias de Evolução - Curto Prazo'
            });
var format_BaciasdeEvoluoSituaoAtual_10 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_10 = format_BaciasdeEvoluoSituaoAtual_10.readFeatures(json_BaciasdeEvoluoSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_BaciasdeEvoluoSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_10.addFeatures(features_BaciasdeEvoluoSituaoAtual_10);
var lyr_BaciasdeEvoluoSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_10, 
                style: style_BaciasdeEvoluoSituaoAtual_10,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_10.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_11 = format_CanaisdeAcessoLongoPrazo_11.readFeatures(json_CanaisdeAcessoLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CanaisdeAcessoLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_11.addFeatures(features_CanaisdeAcessoLongoPrazo_11);
var lyr_CanaisdeAcessoLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_11, 
                style: style_CanaisdeAcessoLongoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_11.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_12 = format_CanaisdeAcessoMdioPrazo_12.readFeatures(json_CanaisdeAcessoMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CanaisdeAcessoMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_12.addFeatures(features_CanaisdeAcessoMdioPrazo_12);
var lyr_CanaisdeAcessoMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_12, 
                style: style_CanaisdeAcessoMdioPrazo_12,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_12.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_13 = format_CanaisdeAcessoCurtoPrazo_13.readFeatures(json_CanaisdeAcessoCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CanaisdeAcessoCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_13.addFeatures(features_CanaisdeAcessoCurtoPrazo_13);
var lyr_CanaisdeAcessoCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_13, 
                style: style_CanaisdeAcessoCurtoPrazo_13,
                popuplayertitle: 'Canais de Acesso - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_13.png" /> Canais de Acesso - Curto Prazo'
            });
var format_CanaisdeAcessoSituaoAtual_14 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_14 = format_CanaisdeAcessoSituaoAtual_14.readFeatures(json_CanaisdeAcessoSituaoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CanaisdeAcessoSituaoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_14.addFeatures(features_CanaisdeAcessoSituaoAtual_14);
var lyr_CanaisdeAcessoSituaoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_14, 
                style: style_CanaisdeAcessoSituaoAtual_14,
                popuplayertitle: 'Canais de Acesso - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_14.png" /> Canais de Acesso - Situação Atual'
            });
var format_AcessosDutoviriosExternos_15 = new ol.format.GeoJSON();
var features_AcessosDutoviriosExternos_15 = format_AcessosDutoviriosExternos_15.readFeatures(json_AcessosDutoviriosExternos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcessosDutoviriosExternos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosExternos_15.addFeatures(features_AcessosDutoviriosExternos_15);
var lyr_AcessosDutoviriosExternos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosExternos_15, 
                style: style_AcessosDutoviriosExternos_15,
                popuplayertitle: 'Acessos Dutoviários Externos',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosExternos_15.png" /> Acessos Dutoviários Externos'
            });
var format_AcessosFerroviriosInternosLongoPrazo_16 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosLongoPrazo_16 = format_AcessosFerroviriosInternosLongoPrazo_16.readFeatures(json_AcessosFerroviriosInternosLongoPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcessosFerroviriosInternosLongoPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosLongoPrazo_16.addFeatures(features_AcessosFerroviriosInternosLongoPrazo_16);
var lyr_AcessosFerroviriosInternosLongoPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosLongoPrazo_16, 
                style: style_AcessosFerroviriosInternosLongoPrazo_16,
                popuplayertitle: 'Acessos Ferroviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosLongoPrazo_16.png" /> Acessos Ferroviários Internos - Longo Prazo '
            });
var format_AcessosFerroviriosInternosMdioPrazo_17 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosMdioPrazo_17 = format_AcessosFerroviriosInternosMdioPrazo_17.readFeatures(json_AcessosFerroviriosInternosMdioPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcessosFerroviriosInternosMdioPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosMdioPrazo_17.addFeatures(features_AcessosFerroviriosInternosMdioPrazo_17);
var lyr_AcessosFerroviriosInternosMdioPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosMdioPrazo_17, 
                style: style_AcessosFerroviriosInternosMdioPrazo_17,
                popuplayertitle: 'Acessos Ferroviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosMdioPrazo_17.png" /> Acessos Ferroviários Internos - Médio Prazo '
            });
var format_AcessosFerroviriosInternosCurtoPrazo_18 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosCurtoPrazo_18 = format_AcessosFerroviriosInternosCurtoPrazo_18.readFeatures(json_AcessosFerroviriosInternosCurtoPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcessosFerroviriosInternosCurtoPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosCurtoPrazo_18.addFeatures(features_AcessosFerroviriosInternosCurtoPrazo_18);
var lyr_AcessosFerroviriosInternosCurtoPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosCurtoPrazo_18, 
                style: style_AcessosFerroviriosInternosCurtoPrazo_18,
                popuplayertitle: 'Acessos Ferroviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosCurtoPrazo_18.png" /> Acessos Ferroviários Internos - Curto Prazo '
            });
var format_AcessosFerroviriosInternosSituaoAtual_19 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosSituaoAtual_19 = format_AcessosFerroviriosInternosSituaoAtual_19.readFeatures(json_AcessosFerroviriosInternosSituaoAtual_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcessosFerroviriosInternosSituaoAtual_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosSituaoAtual_19.addFeatures(features_AcessosFerroviriosInternosSituaoAtual_19);
var lyr_AcessosFerroviriosInternosSituaoAtual_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosSituaoAtual_19, 
                style: style_AcessosFerroviriosInternosSituaoAtual_19,
                popuplayertitle: 'Acessos Ferroviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosSituaoAtual_19.png" /> Acessos Ferroviários Internos - Situação Atual '
            });
var format_AcessosFerroviriosExternos_20 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_20 = format_AcessosFerroviriosExternos_20.readFeatures(json_AcessosFerroviriosExternos_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcessosFerroviriosExternos_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_20.addFeatures(features_AcessosFerroviriosExternos_20);
var lyr_AcessosFerroviriosExternos_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_20, 
                style: style_AcessosFerroviriosExternos_20,
                popuplayertitle: 'Acessos Ferroviários Externos',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_20.png" /> Acessos Ferroviários Externos'
            });
var format_AcessosRodoviriosInternosLongoPrazo_21 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_21 = format_AcessosRodoviriosInternosLongoPrazo_21.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_21.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_21);
var lyr_AcessosRodoviriosInternosLongoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_21, 
                style: style_AcessosRodoviriosInternosLongoPrazo_21,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_21.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_22 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_22 = format_AcessosRodoviriosInternosMdioPrazo_22.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_22.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_22);
var lyr_AcessosRodoviriosInternosMdioPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_22, 
                style: style_AcessosRodoviriosInternosMdioPrazo_22,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_22.png" /> Acessos Rodoviários Internos - Médio Prazo'
            });
var format_AcessosRodoviriosInternosCurtoPrazo_23 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_23 = format_AcessosRodoviriosInternosCurtoPrazo_23.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_23.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_23);
var lyr_AcessosRodoviriosInternosCurtoPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_23, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_23,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_23.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_24 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_24 = format_AcessosRodoviriosInternosSituaoAtual_24.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_24.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_24);
var lyr_AcessosRodoviriosInternosSituaoAtual_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_24, 
                style: style_AcessosRodoviriosInternosSituaoAtual_24,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_24.png" /> Acessos Rodoviários Internos - Situação Atual'
            });
var format_AcessosRodoviriosExternos_25 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_25 = format_AcessosRodoviriosExternos_25.readFeatures(json_AcessosRodoviriosExternos_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcessosRodoviriosExternos_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_25.addFeatures(features_AcessosRodoviriosExternos_25);
var lyr_AcessosRodoviriosExternos_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_25, 
                style: style_AcessosRodoviriosExternos_25,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_25.png" /> Acessos Rodoviários Externos '
            });
var format_TerminaldeUsoPrivado_26 = new ol.format.GeoJSON();
var features_TerminaldeUsoPrivado_26 = format_TerminaldeUsoPrivado_26.readFeatures(json_TerminaldeUsoPrivado_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_TerminaldeUsoPrivado_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaldeUsoPrivado_26.addFeatures(features_TerminaldeUsoPrivado_26);
var lyr_TerminaldeUsoPrivado_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaldeUsoPrivado_26, 
                style: style_TerminaldeUsoPrivado_26,
                popuplayertitle: 'Terminal de Uso Privado ',
                interactive: true,
                title: '<img src="styles/legend/TerminaldeUsoPrivado_26.png" /> Terminal de Uso Privado '
            });
var format_reaseInstalaesAlfandegadas_27 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_27 = format_reaseInstalaesAlfandegadas_27.readFeatures(json_reaseInstalaesAlfandegadas_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reaseInstalaesAlfandegadas_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_27.addFeatures(features_reaseInstalaesAlfandegadas_27);
var lyr_reaseInstalaesAlfandegadas_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_27, 
                style: style_reaseInstalaesAlfandegadas_27,
                popuplayertitle: 'Áreas e Instalações Alfandegadas',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_27.png" /> Áreas e Instalações Alfandegadas'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta -  Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta -  Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual'
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_36 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_36 = format_reasNoAfetassOperaesPorturiasLongoPrazo_36.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_36.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_36);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_36, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_36,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_36.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo'
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_37 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_37 = format_reasNoAfetassOperaesPorturiasMdioPrazo_37.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_37.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_37);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_37, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_37,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_37.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_38.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_38.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_38);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_38, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_38,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_38.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_39 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_39 = format_reasNoAfetassOperaesPorturiasSituaoAtual_39.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_39.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_39);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_39, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_39,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_39.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual'
            });
var format_AcostagemLongoPrazo_40 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_40 = format_AcostagemLongoPrazo_40.readFeatures(json_AcostagemLongoPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcostagemLongoPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_40.addFeatures(features_AcostagemLongoPrazo_40);
var lyr_AcostagemLongoPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_40, 
                style: style_AcostagemLongoPrazo_40,
                popuplayertitle: 'Acostagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_40.png" /> Acostagem - Longo Prazo'
            });
var format_AcostagemMdioPrazo_41 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_41 = format_AcostagemMdioPrazo_41.readFeatures(json_AcostagemMdioPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcostagemMdioPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_41.addFeatures(features_AcostagemMdioPrazo_41);
var lyr_AcostagemMdioPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_41, 
                style: style_AcostagemMdioPrazo_41,
                popuplayertitle: 'Acostagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_41.png" /> Acostagem - Médio Prazo'
            });
var format_AcostagemCurtoPrazo_42 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_42 = format_AcostagemCurtoPrazo_42.readFeatures(json_AcostagemCurtoPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcostagemCurtoPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_42.addFeatures(features_AcostagemCurtoPrazo_42);
var lyr_AcostagemCurtoPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_42, 
                style: style_AcostagemCurtoPrazo_42,
                popuplayertitle: 'Acostagem - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_42.png" /> Acostagem - Curto Prazo'
            });
var format_AcostagemSituaoAtual_43 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_43 = format_AcostagemSituaoAtual_43.readFeatures(json_AcostagemSituaoAtual_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AcostagemSituaoAtual_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_43.addFeatures(features_AcostagemSituaoAtual_43);
var lyr_AcostagemSituaoAtual_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_43, 
                style: style_AcostagemSituaoAtual_43,
                popuplayertitle: 'Acostagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_43.png" /> Acostagem - Situação Atual'
            });
var format_ArmazenagemLongoPrazo_44 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_44 = format_ArmazenagemLongoPrazo_44.readFeatures(json_ArmazenagemLongoPrazo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ArmazenagemLongoPrazo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_44.addFeatures(features_ArmazenagemLongoPrazo_44);
var lyr_ArmazenagemLongoPrazo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_44, 
                style: style_ArmazenagemLongoPrazo_44,
                popuplayertitle: 'Armazenagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_44.png" /> Armazenagem - Longo Prazo'
            });
var format_ArmazenagemMdioPrazo_45 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_45 = format_ArmazenagemMdioPrazo_45.readFeatures(json_ArmazenagemMdioPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ArmazenagemMdioPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_45.addFeatures(features_ArmazenagemMdioPrazo_45);
var lyr_ArmazenagemMdioPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_45, 
                style: style_ArmazenagemMdioPrazo_45,
                popuplayertitle: 'Armazenagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_45.png" /> Armazenagem - Médio Prazo'
            });
var format_ArmazenagemCurtoPrazo_46 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_46 = format_ArmazenagemCurtoPrazo_46.readFeatures(json_ArmazenagemCurtoPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ArmazenagemCurtoPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_46.addFeatures(features_ArmazenagemCurtoPrazo_46);
var lyr_ArmazenagemCurtoPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_46, 
                style: style_ArmazenagemCurtoPrazo_46,
                popuplayertitle: 'Armazenagem - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_46.png" /> Armazenagem - Curto Prazo'
            });
var format_ArmazenagemSituaoAtual_47 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_47 = format_ArmazenagemSituaoAtual_47.readFeatures(json_ArmazenagemSituaoAtual_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ArmazenagemSituaoAtual_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_47.addFeatures(features_ArmazenagemSituaoAtual_47);
var lyr_ArmazenagemSituaoAtual_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_47, 
                style: style_ArmazenagemSituaoAtual_47,
                popuplayertitle: 'Armazenagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_47.png" /> Armazenagem - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_52.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_53.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_55.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual'
            });
var format_NoAplicvel_56 = new ol.format.GeoJSON();
var features_NoAplicvel_56 = format_NoAplicvel_56.readFeatures(json_NoAplicvel_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_NoAplicvel_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoAplicvel_56.addFeatures(features_NoAplicvel_56);
var lyr_NoAplicvel_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoAplicvel_56, 
                style: style_NoAplicvel_56,
                popuplayertitle: 'Não Aplicável',
                interactive: true,
                title: '<img src="styles/legend/NoAplicvel_56.png" /> Não Aplicável'
            });
var format_NoDefinido_57 = new ol.format.GeoJSON();
var features_NoDefinido_57 = format_NoDefinido_57.readFeatures(json_NoDefinido_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_NoDefinido_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoDefinido_57.addFeatures(features_NoDefinido_57);
var lyr_NoDefinido_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoDefinido_57, 
                style: style_NoDefinido_57,
                popuplayertitle: 'Não Definido',
                interactive: true,
                title: '<img src="styles/legend/NoDefinido_57.png" /> Não Definido'
            });
var format_GranelSoldo_58 = new ol.format.GeoJSON();
var features_GranelSoldo_58 = format_GranelSoldo_58.readFeatures(json_GranelSoldo_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelSoldo_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSoldo_58.addFeatures(features_GranelSoldo_58);
var lyr_GranelSoldo_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSoldo_58, 
                style: style_GranelSoldo_58,
                popuplayertitle: 'Granel Solído',
                interactive: true,
                title: '<img src="styles/legend/GranelSoldo_58.png" /> Granel Solído'
            });
var format_GranelLquidoGasoso_59 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_59 = format_GranelLquidoGasoso_59.readFeatures(json_GranelLquidoGasoso_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelLquidoGasoso_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_59.addFeatures(features_GranelLquidoGasoso_59);
var lyr_GranelLquidoGasoso_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_59, 
                style: style_GranelLquidoGasoso_59,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_59.png" /> Granel Líquido/Gasoso'
            });
var format_GranelLquido_60 = new ol.format.GeoJSON();
var features_GranelLquido_60 = format_GranelLquido_60.readFeatures(json_GranelLquido_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelLquido_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_60.addFeatures(features_GranelLquido_60);
var lyr_GranelLquido_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_60, 
                style: style_GranelLquido_60,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_60.png" /> Granel Líquido'
            });
var format_Continers_61 = new ol.format.GeoJSON();
var features_Continers_61 = format_Continers_61.readFeatures(json_Continers_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Continers_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Continers_61.addFeatures(features_Continers_61);
var lyr_Continers_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Continers_61, 
                style: style_Continers_61,
                popuplayertitle: 'Contêiners',
                interactive: true,
                title: '<img src="styles/legend/Continers_61.png" /> Contêiners'
            });
var format_CargaConteinerizada_62 = new ol.format.GeoJSON();
var features_CargaConteinerizada_62 = format_CargaConteinerizada_62.readFeatures(json_CargaConteinerizada_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaConteinerizada_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaConteinerizada_62.addFeatures(features_CargaConteinerizada_62);
var lyr_CargaConteinerizada_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaConteinerizada_62, 
                style: style_CargaConteinerizada_62,
                popuplayertitle: 'Carga Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaConteinerizada_62.png" /> Carga Conteinerizada'
            });
var format_CargaGeralConteinerizada_63 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_63 = format_CargaGeralConteinerizada_63.readFeatures(json_CargaGeralConteinerizada_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaGeralConteinerizada_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_63.addFeatures(features_CargaGeralConteinerizada_63);
var lyr_CargaGeralConteinerizada_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_63, 
                style: style_CargaGeralConteinerizada_63,
                popuplayertitle: 'Carga Geral/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_63.png" /> Carga Geral/Conteinerizada'
            });
var format_CargaGeral_64 = new ol.format.GeoJSON();
var features_CargaGeral_64 = format_CargaGeral_64.readFeatures(json_CargaGeral_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaGeral_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_64.addFeatures(features_CargaGeral_64);
var lyr_CargaGeral_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_64, 
                style: style_CargaGeral_64,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_64.png" /> Carga Geral'
            });
var format_Carga_65 = new ol.format.GeoJSON();
var features_Carga_65 = format_Carga_65.readFeatures(json_Carga_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Carga_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carga_65.addFeatures(features_Carga_65);
var lyr_Carga_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carga_65, 
                style: style_Carga_65,
                popuplayertitle: 'Carga',
                interactive: true,
                title: '<img src="styles/legend/Carga_65.png" /> Carga'
            });
var format_NoDefinido_66 = new ol.format.GeoJSON();
var features_NoDefinido_66 = format_NoDefinido_66.readFeatures(json_NoDefinido_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_NoDefinido_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoDefinido_66.addFeatures(features_NoDefinido_66);
var lyr_NoDefinido_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoDefinido_66, 
                style: style_NoDefinido_66,
                popuplayertitle: 'Não Definido',
                interactive: true,
                title: '<img src="styles/legend/NoDefinido_66.png" /> Não Definido'
            });
var format_NoAplicvel_67 = new ol.format.GeoJSON();
var features_NoAplicvel_67 = format_NoAplicvel_67.readFeatures(json_NoAplicvel_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_NoAplicvel_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoAplicvel_67.addFeatures(features_NoAplicvel_67);
var lyr_NoAplicvel_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoAplicvel_67, 
                style: style_NoAplicvel_67,
                popuplayertitle: 'Não Aplicável',
                interactive: true,
                title: '<img src="styles/legend/NoAplicvel_67.png" /> Não Aplicável'
            });
var format_GranelSoldo_68 = new ol.format.GeoJSON();
var features_GranelSoldo_68 = format_GranelSoldo_68.readFeatures(json_GranelSoldo_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelSoldo_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSoldo_68.addFeatures(features_GranelSoldo_68);
var lyr_GranelSoldo_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSoldo_68, 
                style: style_GranelSoldo_68,
                popuplayertitle: 'Granel Solído',
                interactive: true,
                title: '<img src="styles/legend/GranelSoldo_68.png" /> Granel Solído'
            });
var format_GranelLquidoGasoso_69 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_69 = format_GranelLquidoGasoso_69.readFeatures(json_GranelLquidoGasoso_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelLquidoGasoso_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_69.addFeatures(features_GranelLquidoGasoso_69);
var lyr_GranelLquidoGasoso_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_69, 
                style: style_GranelLquidoGasoso_69,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_69.png" /> Granel Líquido/Gasoso'
            });
var format_GranelLquido_70 = new ol.format.GeoJSON();
var features_GranelLquido_70 = format_GranelLquido_70.readFeatures(json_GranelLquido_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelLquido_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_70.addFeatures(features_GranelLquido_70);
var lyr_GranelLquido_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_70, 
                style: style_GranelLquido_70,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_70.png" /> Granel Líquido'
            });
var format_Continers_71 = new ol.format.GeoJSON();
var features_Continers_71 = format_Continers_71.readFeatures(json_Continers_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Continers_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Continers_71.addFeatures(features_Continers_71);
var lyr_Continers_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Continers_71, 
                style: style_Continers_71,
                popuplayertitle: 'Contêiners',
                interactive: true,
                title: '<img src="styles/legend/Continers_71.png" /> Contêiners'
            });
var format_CargaConteinerizada_72 = new ol.format.GeoJSON();
var features_CargaConteinerizada_72 = format_CargaConteinerizada_72.readFeatures(json_CargaConteinerizada_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaConteinerizada_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaConteinerizada_72.addFeatures(features_CargaConteinerizada_72);
var lyr_CargaConteinerizada_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaConteinerizada_72, 
                style: style_CargaConteinerizada_72,
                popuplayertitle: 'Carga Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaConteinerizada_72.png" /> Carga Conteinerizada'
            });
var format_CargaGeralConteinerizada_73 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_73 = format_CargaGeralConteinerizada_73.readFeatures(json_CargaGeralConteinerizada_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaGeralConteinerizada_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_73.addFeatures(features_CargaGeralConteinerizada_73);
var lyr_CargaGeralConteinerizada_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_73, 
                style: style_CargaGeralConteinerizada_73,
                popuplayertitle: 'Carga Geral/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_73.png" /> Carga Geral/Conteinerizada'
            });
var format_CargaGeral_74 = new ol.format.GeoJSON();
var features_CargaGeral_74 = format_CargaGeral_74.readFeatures(json_CargaGeral_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaGeral_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_74.addFeatures(features_CargaGeral_74);
var lyr_CargaGeral_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_74, 
                style: style_CargaGeral_74,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_74.png" /> Carga Geral'
            });
var format_Carga_75 = new ol.format.GeoJSON();
var features_Carga_75 = format_Carga_75.readFeatures(json_Carga_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Carga_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carga_75.addFeatures(features_Carga_75);
var lyr_Carga_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carga_75, 
                style: style_Carga_75,
                popuplayertitle: 'Carga',
                interactive: true,
                title: '<img src="styles/legend/Carga_75.png" /> Carga'
            });
var format_NoDefinido_76 = new ol.format.GeoJSON();
var features_NoDefinido_76 = format_NoDefinido_76.readFeatures(json_NoDefinido_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_NoDefinido_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoDefinido_76.addFeatures(features_NoDefinido_76);
var lyr_NoDefinido_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoDefinido_76, 
                style: style_NoDefinido_76,
                popuplayertitle: 'Não Definido',
                interactive: true,
                title: '<img src="styles/legend/NoDefinido_76.png" /> Não Definido'
            });
var format_NoAplicvel_77 = new ol.format.GeoJSON();
var features_NoAplicvel_77 = format_NoAplicvel_77.readFeatures(json_NoAplicvel_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_NoAplicvel_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoAplicvel_77.addFeatures(features_NoAplicvel_77);
var lyr_NoAplicvel_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoAplicvel_77, 
                style: style_NoAplicvel_77,
                popuplayertitle: 'Não Aplicável',
                interactive: true,
                title: '<img src="styles/legend/NoAplicvel_77.png" /> Não Aplicável'
            });
var format_GranelSoldo_78 = new ol.format.GeoJSON();
var features_GranelSoldo_78 = format_GranelSoldo_78.readFeatures(json_GranelSoldo_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelSoldo_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSoldo_78.addFeatures(features_GranelSoldo_78);
var lyr_GranelSoldo_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSoldo_78, 
                style: style_GranelSoldo_78,
                popuplayertitle: 'Granel Solído',
                interactive: true,
                title: '<img src="styles/legend/GranelSoldo_78.png" /> Granel Solído'
            });
var format_GranelLquidoGasoso_79 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_79 = format_GranelLquidoGasoso_79.readFeatures(json_GranelLquidoGasoso_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelLquidoGasoso_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_79.addFeatures(features_GranelLquidoGasoso_79);
var lyr_GranelLquidoGasoso_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_79, 
                style: style_GranelLquidoGasoso_79,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_79.png" /> Granel Líquido/Gasoso'
            });
var format_GranelLquido_80 = new ol.format.GeoJSON();
var features_GranelLquido_80 = format_GranelLquido_80.readFeatures(json_GranelLquido_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelLquido_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_80.addFeatures(features_GranelLquido_80);
var lyr_GranelLquido_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_80, 
                style: style_GranelLquido_80,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_80.png" /> Granel Líquido'
            });
var format_Continers_81 = new ol.format.GeoJSON();
var features_Continers_81 = format_Continers_81.readFeatures(json_Continers_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Continers_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Continers_81.addFeatures(features_Continers_81);
var lyr_Continers_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Continers_81, 
                style: style_Continers_81,
                popuplayertitle: 'Contêiners',
                interactive: true,
                title: '<img src="styles/legend/Continers_81.png" /> Contêiners'
            });
var format_CargaConteinerizada_82 = new ol.format.GeoJSON();
var features_CargaConteinerizada_82 = format_CargaConteinerizada_82.readFeatures(json_CargaConteinerizada_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaConteinerizada_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaConteinerizada_82.addFeatures(features_CargaConteinerizada_82);
var lyr_CargaConteinerizada_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaConteinerizada_82, 
                style: style_CargaConteinerizada_82,
                popuplayertitle: 'Carga Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaConteinerizada_82.png" /> Carga Conteinerizada'
            });
var format_CargaGeralConteinerizada_83 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_83 = format_CargaGeralConteinerizada_83.readFeatures(json_CargaGeralConteinerizada_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaGeralConteinerizada_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_83.addFeatures(features_CargaGeralConteinerizada_83);
var lyr_CargaGeralConteinerizada_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_83, 
                style: style_CargaGeralConteinerizada_83,
                popuplayertitle: 'Carga Geral/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_83.png" /> Carga Geral/Conteinerizada'
            });
var format_CargaGeral_84 = new ol.format.GeoJSON();
var features_CargaGeral_84 = format_CargaGeral_84.readFeatures(json_CargaGeral_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaGeral_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_84.addFeatures(features_CargaGeral_84);
var lyr_CargaGeral_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_84, 
                style: style_CargaGeral_84,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_84.png" /> Carga Geral'
            });
var format_Carga_85 = new ol.format.GeoJSON();
var features_Carga_85 = format_Carga_85.readFeatures(json_Carga_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Carga_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carga_85.addFeatures(features_Carga_85);
var lyr_Carga_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carga_85, 
                style: style_Carga_85,
                popuplayertitle: 'Carga',
                interactive: true,
                title: '<img src="styles/legend/Carga_85.png" /> Carga'
            });
var format_NoAplicvel_86 = new ol.format.GeoJSON();
var features_NoAplicvel_86 = format_NoAplicvel_86.readFeatures(json_NoAplicvel_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_NoAplicvel_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoAplicvel_86.addFeatures(features_NoAplicvel_86);
var lyr_NoAplicvel_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoAplicvel_86, 
                style: style_NoAplicvel_86,
                popuplayertitle: 'Não Aplicável',
                interactive: true,
                title: '<img src="styles/legend/NoAplicvel_86.png" /> Não Aplicável'
            });
var format_GranelSoldo_87 = new ol.format.GeoJSON();
var features_GranelSoldo_87 = format_GranelSoldo_87.readFeatures(json_GranelSoldo_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelSoldo_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSoldo_87.addFeatures(features_GranelSoldo_87);
var lyr_GranelSoldo_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSoldo_87, 
                style: style_GranelSoldo_87,
                popuplayertitle: 'Granel Solído',
                interactive: true,
                title: '<img src="styles/legend/GranelSoldo_87.png" /> Granel Solído'
            });
var format_GranelLquidoGasoso_88 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_88 = format_GranelLquidoGasoso_88.readFeatures(json_GranelLquidoGasoso_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelLquidoGasoso_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_88.addFeatures(features_GranelLquidoGasoso_88);
var lyr_GranelLquidoGasoso_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_88, 
                style: style_GranelLquidoGasoso_88,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_88.png" /> Granel Líquido/Gasoso'
            });
var format_GranelLquido_89 = new ol.format.GeoJSON();
var features_GranelLquido_89 = format_GranelLquido_89.readFeatures(json_GranelLquido_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_GranelLquido_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_89.addFeatures(features_GranelLquido_89);
var lyr_GranelLquido_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_89, 
                style: style_GranelLquido_89,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_89.png" /> Granel Líquido'
            });
var format_Continers_90 = new ol.format.GeoJSON();
var features_Continers_90 = format_Continers_90.readFeatures(json_Continers_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Continers_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Continers_90.addFeatures(features_Continers_90);
var lyr_Continers_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Continers_90, 
                style: style_Continers_90,
                popuplayertitle: 'Contêiners',
                interactive: true,
                title: '<img src="styles/legend/Continers_90.png" /> Contêiners'
            });
var format_CargaConteinerizada_91 = new ol.format.GeoJSON();
var features_CargaConteinerizada_91 = format_CargaConteinerizada_91.readFeatures(json_CargaConteinerizada_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaConteinerizada_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaConteinerizada_91.addFeatures(features_CargaConteinerizada_91);
var lyr_CargaConteinerizada_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaConteinerizada_91, 
                style: style_CargaConteinerizada_91,
                popuplayertitle: 'Carga Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaConteinerizada_91.png" /> Carga Conteinerizada'
            });
var format_CargaGeralConteinerizada_92 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_92 = format_CargaGeralConteinerizada_92.readFeatures(json_CargaGeralConteinerizada_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaGeralConteinerizada_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_92.addFeatures(features_CargaGeralConteinerizada_92);
var lyr_CargaGeralConteinerizada_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_92, 
                style: style_CargaGeralConteinerizada_92,
                popuplayertitle: 'Carga Geral/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_92.png" /> Carga Geral/Conteinerizada'
            });
var format_CargaGeral_93 = new ol.format.GeoJSON();
var features_CargaGeral_93 = format_CargaGeral_93.readFeatures(json_CargaGeral_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_CargaGeral_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_93.addFeatures(features_CargaGeral_93);
var lyr_CargaGeral_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_93, 
                style: style_CargaGeral_93,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_93.png" /> Carga Geral'
            });
var format_Carga_94 = new ol.format.GeoJSON();
var features_Carga_94 = format_Carga_94.readFeatures(json_Carga_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Carga_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carga_94.addFeatures(features_Carga_94);
var lyr_Carga_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carga_94, 
                style: style_Carga_94,
                popuplayertitle: 'Carga',
                interactive: true,
                title: '<img src="styles/legend/Carga_94.png" /> Carga'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_95 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_95 = format_reasAfetassOperaesPorturiasLongoPrazo_95.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_95.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_95);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_95, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_95,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_95.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_96 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_96 = format_reasAfetassOperaesPorturiasMdioPrazo_96.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_96.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_96);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_96, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_96,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_96.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_97 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_97 = format_reasAfetassOperaesPorturiasCurtoPrazo_97.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_97.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_97);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_97, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_97,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_97.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_98 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_98 = format_reasAfetassOperaesPorturiasSituaoAtual_98.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_98.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_98);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_98, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_98,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_98.png" /> Áreas Afetas às Operações Portuárias - Situação Atual'
            });
var format_PoligonaldareadoPortoOrganizadodeSuape_99 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeSuape_99 = format_PoligonaldareadoPortoOrganizadodeSuape_99.readFeatures(json_PoligonaldareadoPortoOrganizadodeSuape_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_PoligonaldareadoPortoOrganizadodeSuape_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeSuape_99.addFeatures(features_PoligonaldareadoPortoOrganizadodeSuape_99);
var lyr_PoligonaldareadoPortoOrganizadodeSuape_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeSuape_99, 
                style: style_PoligonaldareadoPortoOrganizadodeSuape_99,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Suape',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeSuape_99.png" /> Poligonal da Área do Porto Organizado de Suape'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeSuape_99,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado'});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_95,lyr_reasAfetassOperaesPorturiasMdioPrazo_96,lyr_reasAfetassOperaesPorturiasCurtoPrazo_97,lyr_reasAfetassOperaesPorturiasSituaoAtual_98,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_NoAplicvel_86,lyr_GranelSoldo_87,lyr_GranelLquidoGasoso_88,lyr_GranelLquido_89,lyr_Continers_90,lyr_CargaConteinerizada_91,lyr_CargaGeralConteinerizada_92,lyr_CargaGeral_93,lyr_Carga_94,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_NoDefinido_76,lyr_NoAplicvel_77,lyr_GranelSoldo_78,lyr_GranelLquidoGasoso_79,lyr_GranelLquido_80,lyr_Continers_81,lyr_CargaConteinerizada_82,lyr_CargaGeralConteinerizada_83,lyr_CargaGeral_84,lyr_Carga_85,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_NoDefinido_66,lyr_NoAplicvel_67,lyr_GranelSoldo_68,lyr_GranelLquidoGasoso_69,lyr_GranelLquido_70,lyr_Continers_71,lyr_CargaConteinerizada_72,lyr_CargaGeralConteinerizada_73,lyr_CargaGeral_74,lyr_Carga_75,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_NoAplicvel_56,lyr_NoDefinido_57,lyr_GranelSoldo_58,lyr_GranelLquidoGasoso_59,lyr_GranelLquido_60,lyr_Continers_61,lyr_CargaConteinerizada_62,lyr_CargaGeralConteinerizada_63,lyr_CargaGeral_64,lyr_Carga_65,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento'});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_44,lyr_ArmazenagemMdioPrazo_45,lyr_ArmazenagemCurtoPrazo_46,lyr_ArmazenagemSituaoAtual_47,],
                                fold: 'open',
                                title: 'Armazenagem'});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_40,lyr_AcostagemMdioPrazo_41,lyr_AcostagemCurtoPrazo_42,lyr_AcostagemSituaoAtual_43,],
                                fold: 'open',
                                title: 'Acostagem'});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias'});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta'});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_27,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas'});
var group_TerminaldeUsoPrivado = new ol.layer.Group({
                                layers: [lyr_TerminaldeUsoPrivado_26,],
                                fold: 'open',
                                title: 'Terminal de Uso Privado'});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_25,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos'});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_21,lyr_AcessosRodoviriosInternosMdioPrazo_22,lyr_AcessosRodoviriosInternosCurtoPrazo_23,lyr_AcessosRodoviriosInternosSituaoAtual_24,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos'});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_20,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos'});
var group_AcessosFerroviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosInternosLongoPrazo_16,lyr_AcessosFerroviriosInternosMdioPrazo_17,lyr_AcessosFerroviriosInternosCurtoPrazo_18,lyr_AcessosFerroviriosInternosSituaoAtual_19,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Internos'});
var group_AcessosDutoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosExternos_15,],
                                fold: 'open',
                                title: 'Acessos Dutoviários Externos'});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_11,lyr_CanaisdeAcessoMdioPrazo_12,lyr_CanaisdeAcessoCurtoPrazo_13,lyr_CanaisdeAcessoSituaoAtual_14,],
                                fold: 'open',
                                title: 'Canais de Acesso'});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_7,lyr_BaciasdeEvoluoMdioPrazo_8,lyr_BaciasdeEvoluoCurtoPrazo_9,lyr_BaciasdeEvoluoSituaoAtual_10,],
                                fold: 'open',
                                title: 'Bacias de Evolução'});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_3,lyr_FundeadourosMdioPrazo_4,lyr_FundeadourosCurtoPrazo_5,lyr_FundeadourosSituaoAtual_6,],
                                fold: 'open',
                                title: 'Fundeadouros'});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_2,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais '});
var group_UnidadesdeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_1,],
                                fold: 'open',
                                title: 'Unidades de Conservação'});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadesdeConservao_1.setVisible(false);lyr_reasUrbanaseRurais_2.setVisible(false);lyr_FundeadourosLongoPrazo_3.setVisible(false);lyr_FundeadourosMdioPrazo_4.setVisible(false);lyr_FundeadourosCurtoPrazo_5.setVisible(false);lyr_FundeadourosSituaoAtual_6.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_8.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_9.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_10.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_11.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_12.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_13.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_14.setVisible(false);lyr_AcessosDutoviriosExternos_15.setVisible(false);lyr_AcessosFerroviriosInternosLongoPrazo_16.setVisible(false);lyr_AcessosFerroviriosInternosMdioPrazo_17.setVisible(false);lyr_AcessosFerroviriosInternosCurtoPrazo_18.setVisible(false);lyr_AcessosFerroviriosInternosSituaoAtual_19.setVisible(false);lyr_AcessosFerroviriosExternos_20.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_21.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_22.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_23.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_24.setVisible(false);lyr_AcessosRodoviriosExternos_25.setVisible(false);lyr_TerminaldeUsoPrivado_26.setVisible(false);lyr_reaseInstalaesAlfandegadas_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.setVisible(false);lyr_AcostagemLongoPrazo_40.setVisible(false);lyr_AcostagemMdioPrazo_41.setVisible(false);lyr_AcostagemCurtoPrazo_42.setVisible(false);lyr_AcostagemSituaoAtual_43.setVisible(false);lyr_ArmazenagemLongoPrazo_44.setVisible(false);lyr_ArmazenagemMdioPrazo_45.setVisible(false);lyr_ArmazenagemCurtoPrazo_46.setVisible(false);lyr_ArmazenagemSituaoAtual_47.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55.setVisible(false);lyr_NoAplicvel_56.setVisible(false);lyr_NoDefinido_57.setVisible(false);lyr_GranelSoldo_58.setVisible(false);lyr_GranelLquidoGasoso_59.setVisible(false);lyr_GranelLquido_60.setVisible(false);lyr_Continers_61.setVisible(false);lyr_CargaConteinerizada_62.setVisible(false);lyr_CargaGeralConteinerizada_63.setVisible(false);lyr_CargaGeral_64.setVisible(false);lyr_Carga_65.setVisible(false);lyr_NoDefinido_66.setVisible(false);lyr_NoAplicvel_67.setVisible(false);lyr_GranelSoldo_68.setVisible(false);lyr_GranelLquidoGasoso_69.setVisible(false);lyr_GranelLquido_70.setVisible(false);lyr_Continers_71.setVisible(false);lyr_CargaConteinerizada_72.setVisible(false);lyr_CargaGeralConteinerizada_73.setVisible(false);lyr_CargaGeral_74.setVisible(false);lyr_Carga_75.setVisible(false);lyr_NoDefinido_76.setVisible(false);lyr_NoAplicvel_77.setVisible(false);lyr_GranelSoldo_78.setVisible(false);lyr_GranelLquidoGasoso_79.setVisible(false);lyr_GranelLquido_80.setVisible(false);lyr_Continers_81.setVisible(false);lyr_CargaConteinerizada_82.setVisible(false);lyr_CargaGeralConteinerizada_83.setVisible(false);lyr_CargaGeral_84.setVisible(false);lyr_Carga_85.setVisible(false);lyr_NoAplicvel_86.setVisible(false);lyr_GranelSoldo_87.setVisible(false);lyr_GranelLquidoGasoso_88.setVisible(false);lyr_GranelLquido_89.setVisible(false);lyr_Continers_90.setVisible(false);lyr_CargaConteinerizada_91.setVisible(false);lyr_CargaGeralConteinerizada_92.setVisible(false);lyr_CargaGeral_93.setVisible(false);lyr_Carga_94.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_95.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_96.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_97.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_98.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeSuape_99.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_UnidadesdeConservao,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosDutoviriosExternos,group_AcessosFerroviriosInternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_TerminaldeUsoPrivado,group_reaseInstalaesAlfandegadas,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_UnidadesdeConservao_1.set('fieldAliases', {'Nome': 'Nome', 'Inst.Legal': 'Instrumento Legal ', 'Area': 'Área (m²) ', });
lyr_reasUrbanaseRurais_2.set('fieldAliases', {'Tipo': 'Tipo de Área', 'Inst.Legal': 'Instrumento Legal ', 'Area': 'Área (m²) ', });
lyr_FundeadourosLongoPrazo_3.set('fieldAliases', {'N.Ident.': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_4.set('fieldAliases', {'N.Ident.': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_5.set('fieldAliases', {'N.Ident.': 'Número de Identificação', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_6.set('fieldAliases', {'N.Ident.': 'Número de Identificação ', 'Funcao': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldAliases', {'FUNCAO': 'Função ', 'CALADO': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldAliases', {'TRECHO': 'Trecho ', 'CALADO': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldAliases', {'TRECHO': 'Trecho ', 'CALADO': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldAliases', {'TRECHO': 'Trecho ', 'CALADO': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldAliases', {'TRECHO': 'Trecho ', 'CALADO': 'Calado (m) ', });
lyr_AcessosDutoviriosExternos_15.set('fieldAliases', {'Nome': 'Nome', 'Mat.Trans.': 'Material Transportado ', 'Posicao': 'Posição ', 'Operador': 'Operador', 'T. Duto': 'Tipo de Duto ', });
lyr_AcessosFerroviriosInternosLongoPrazo_16.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosMdioPrazo_17.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosCurtoPrazo_18.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosSituaoAtual_19.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosExternos_20.set('fieldAliases', {'LINHA': 'Linha', 'OPERADOR': 'Operador ', 'TRECHO': 'Trecho ', 'DESCRICAO': 'Descrição ', });
lyr_AcessosRodoviriosInternosLongoPrazo_21.set('fieldAliases', {'Ident_': 'Identificação ', 'No_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_22.set('fieldAliases', {'Ident_': 'Identificação ', 'No_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_23.set('fieldAliases', {'Ident_': 'Identificação', 'No_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_24.set('fieldAliases', {'Ident_': 'Identificação ', 'No_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_25.set('fieldAliases', {'NOME': 'Nome ', 'SIGLA': 'Sigla ', 'JURISDICAO': 'Jurisdição ', });
lyr_TerminaldeUsoPrivado_26.set('fieldAliases', {'Nome': 'Nome', 'T.Produto': 'Tipo de Produto ', 'Companhia': 'Companhia ', 'Area': 'Área (m²) ', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldAliases', {'Inst.Legal': 'Instrumento Legal', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.set('fieldAliases', {'NOME': 'Nome ', 'T_EXPLO': 'Tipo de Exploração ', 'AREA': 'Área (m²) ', 'UTIL_AREA': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.set('fieldAliases', {'NOME': 'Nome ', 'T_EXPLO': 'Tipo de Exploração ', 'AREA': 'Área (m²) ', 'UTIL_AREA': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.set('fieldAliases', {'NOME': 'Nome ', 'T_EXPLO': 'Tipo de Exploração ', 'AREA': 'Área (m²) ', 'UTIL_AREA': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.set('fieldAliases', {'NOME': 'Nome ', 'T_EXPLO': 'Tipo de Exploração ', 'AREA': 'Área (m²) ', 'UTIL_AREA': 'Utilização Atual da Área', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.set('fieldAliases', {'NOME': 'Nome ', 'T_CESSAO': 'Tipo de Cessão ', 'RESPONS': 'Responsável ', 'AREA': 'Área (m²) ', 'D_INICIO': 'Data de Início do Contrato', 'D_TERM': 'Data de Término do Contrato ', 'A_DESENV': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.set('fieldAliases', {'NOME': 'Nome ', 'T_CESSAO': 'Tipo de Cessão ', 'RESPONS': 'Responsável ', 'AREA': 'Área (m²) ', 'D_INICIO': 'Data de Início do Contrato ', 'D_TERM': 'Data de Término do Contrato ', 'A_DESENV': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.set('fieldAliases', {'NOME': 'Nome', 'T_CESSAO': 'Tipo de Cessão', 'RESPONS': 'Responsável', 'AREA': 'Área (m²)', 'D_INICIO': 'Data de Início do Contrato', 'D_TERM': 'Data de Término do Contrato', 'A_DESENV': 'Atividade Desenvolvida', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.set('fieldAliases', {'NOME': 'Nome', 'T_CESSAO': 'Tipo de Cessão', 'RESPONS': 'Responsável', 'AREA': 'Área (m²)', 'D_INICIO': 'Data de Início do Contrato', 'D_TERM': 'Data de Término do Contrato', 'A_DESENV': 'Atividade Desenvolvida', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Area': 'Área (m²)', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Area': 'Área (m²)', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Area': 'Área (m²)', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Area': 'Área (m²)', });
lyr_AcostagemLongoPrazo_40.set('fieldAliases', {'Id. Cais': 'Identificador do Cais', 'Id. Berco': 'Identificador do Berço', 'C. Const.': 'Características Construtivas', 'Comp.': 'Comprimento (m)', 'Profund.': 'Profundidade (m)', 'Calado': 'Calado (m)', 'Per. Carga': 'Perfil de Carga', });
lyr_AcostagemMdioPrazo_41.set('fieldAliases', {'Id. Cais': 'Identificador do Cais', 'Id. Berco': 'Identificador do Berço', 'C. Const.': 'Características Construtivas', 'Comp.': 'Comprimento (m)', 'Profund.': 'Profundidade (m)', 'Calado': 'Calado (m)', 'Per. Carga': 'Perfil de Carga', });
lyr_AcostagemCurtoPrazo_42.set('fieldAliases', {'Id. Cais': 'Identificador do Cais', 'Id. Berco': 'Identificador do Berço', 'C. Const.': 'Características Construtivas', 'Comp.': 'Comprimento (m)', 'Profund.': 'Profundidade (m)', 'Calado': 'Calado (m)', 'Per. Carga': 'Perfil de Carga', });
lyr_AcostagemSituaoAtual_43.set('fieldAliases', {'Id. Cais': 'Identificador do Cais', 'Id. Berco': 'Identificador do Berço', 'C. Const.': 'Características Construtivas', 'Comp.': 'Comprimento (m)', 'Profund.': 'Profundidade (m)', 'Calado': 'Calado (m)', 'Per. Carga': 'Perfil de Carga', });
lyr_ArmazenagemLongoPrazo_44.set('fieldAliases', {'T__Instal_': 'Tipo da Instalação', 'Capacidade': 'Capacidade', 'Area': 'Área (m²)', 'Volume': 'Volume (m³)', });
lyr_ArmazenagemMdioPrazo_45.set('fieldAliases', {'T__Instal_': 'Tipo da Instalação', 'Capacidade': 'Capacidade', 'Area': 'Área (m²)', 'Volume': 'Volume (m³)', });
lyr_ArmazenagemCurtoPrazo_46.set('fieldAliases', {'T__Instal_': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Area': 'Área (m²)', 'Volume': 'Volume (m³)', });
lyr_ArmazenagemSituaoAtual_47.set('fieldAliases', {'T__Instal_': 'Tipo da Instalação', 'Capacidade': 'Capacidade', 'Area': 'Área (m²)', 'Volume': 'Volume (m³)', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.set('fieldAliases', {'NOME': 'Nome', 'AREA': 'Área (m²)', 'PERFIL': 'Perfil de Carga', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.set('fieldAliases', {'NOME': 'Nome', 'AREA': 'Área (m²)', 'PERFIL': 'Perfil de Carga', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.set('fieldAliases', {'NOME': 'Nome', 'AREA': 'Área (m²)', 'PERFIL': 'Perfil de Carga', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.set('fieldAliases', {'NOME': 'Nome', 'AREA': 'Área (m²)', 'PERFIL': 'Perfil de Carga', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52.set('fieldAliases', {'ARREND': 'Arrendatário', 'NO_CONT': 'Número do Contrato', 'D_INICIO': 'Data Início do Contrato', 'D_TERM': 'Data do Término do Contrato', 'P_PRORROG': 'Possibilidade de Prorrogação', 'PERFIL': 'Perfil de Carga', 'AREA': 'Área (m²)', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53.set('fieldAliases', {'ARREND': 'Arrendatário', 'NO_CONT': 'Número do Contrato', 'D_INICIO': 'Data Início do Contrato', 'D_TERM': 'Data do Término do Contrato', 'P_PRORROG': 'Possibilidade de Prorrogação', 'PERFIL': 'Perfil de Carga', 'AREA': 'Área (m²)', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54.set('fieldAliases', {'ARREND': 'Arrendatário', 'NO_CONT': 'Número do Contrato', 'D_INICIO': 'Data Início do Contrato', 'D_TERM': 'Data do Término do Contrato', 'P_PRORROG': 'Possibilidade de Prorrogação', 'PERFIL': 'Perfil de Carga', 'AREA': 'Área (m²)', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55.set('fieldAliases', {'ARREND': 'Arrendatário', 'NO_CONT': 'Número do Contrato', 'D_INICIO': 'Data Início do Contrato', 'D_TERM': 'Data do Término do Contrato', 'P_PRORROG': 'Possibilidade de Prorrogação', 'PERFIL': 'Perfil de Carga', 'AREA': 'Área (m²)', });
lyr_NoAplicvel_56.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_NoDefinido_57.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_GranelSoldo_58.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_GranelLquidoGasoso_59.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_GranelLquido_60.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_Continers_61.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_CargaConteinerizada_62.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_CargaGeralConteinerizada_63.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_CargaGeral_64.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_Carga_65.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_NoDefinido_66.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_NoAplicvel_67.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranelSoldo_68.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranelLquidoGasoso_69.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranelLquido_70.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Continers_71.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaConteinerizada_72.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeralConteinerizada_73.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeral_74.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Carga_75.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_NoDefinido_76.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_NoAplicvel_77.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranelSoldo_78.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranelLquidoGasoso_79.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranelLquido_80.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Continers_81.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaConteinerizada_82.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeralConteinerizada_83.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeral_84.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Carga_85.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área(m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_NoAplicvel_86.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_GranelSoldo_87.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_GranelLquidoGasoso_88.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação', });
lyr_GranelLquido_89.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_Continers_90.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_CargaConteinerizada_91.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_CargaGeralConteinerizada_92.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_CargaGeral_93.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_Carga_94.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_95.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_96.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_97.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_98.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T_Instal': 'Tipo de Instalação', });
lyr_PoligonaldareadoPortoOrganizadodeSuape_99.set('fieldAliases', {'Name': 'Anexo', 'Ins. Legal': 'Instrumento Legal', });
lyr_UnidadesdeConservao_1.set('fieldImages', {'Nome': 'TextEdit', 'Inst.Legal': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasUrbanaseRurais_2.set('fieldImages', {'Tipo': 'TextEdit', 'Inst.Legal': 'TextEdit', 'Area': 'TextEdit', });
lyr_FundeadourosLongoPrazo_3.set('fieldImages', {'N.Ident.': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_4.set('fieldImages', {'N.Ident.': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_5.set('fieldImages', {'N.Ident.': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_6.set('fieldImages', {'N.Ident.': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldImages', {'FUNCAO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldImages', {'TRECHO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldImages', {'TRECHO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldImages', {'TRECHO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldImages', {'TRECHO': 'TextEdit', 'CALADO': 'TextEdit', });
lyr_AcessosDutoviriosExternos_15.set('fieldImages', {'Nome': 'TextEdit', 'Mat.Trans.': 'TextEdit', 'Posicao': 'TextEdit', 'Operador': 'TextEdit', 'T. Duto': 'TextEdit', });
lyr_AcessosFerroviriosInternosLongoPrazo_16.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosMdioPrazo_17.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosCurtoPrazo_18.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosSituaoAtual_19.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosExternos_20.set('fieldImages', {'LINHA': 'TextEdit', 'OPERADOR': 'TextEdit', 'TRECHO': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_21.set('fieldImages', {'Ident_': 'TextEdit', 'No_Pistas': 'Range', });
lyr_AcessosRodoviriosInternosMdioPrazo_22.set('fieldImages', {'Ident_': 'TextEdit', 'No_Pistas': 'Range', });
lyr_AcessosRodoviriosInternosCurtoPrazo_23.set('fieldImages', {'Ident_': 'TextEdit', 'No_Pistas': 'Range', });
lyr_AcessosRodoviriosInternosSituaoAtual_24.set('fieldImages', {'Ident_': 'TextEdit', 'No_Pistas': 'Range', });
lyr_AcessosRodoviriosExternos_25.set('fieldImages', {'NOME': 'TextEdit', 'SIGLA': 'TextEdit', 'JURISDICAO': 'TextEdit', });
lyr_TerminaldeUsoPrivado_26.set('fieldImages', {'Nome': 'TextEdit', 'T.Produto': 'TextEdit', 'Companhia': 'TextEdit', 'Area': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldImages', {'Inst.Legal': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.set('fieldImages', {'NOME': 'TextEdit', 'T_EXPLO': 'TextEdit', 'AREA': 'TextEdit', 'UTIL_AREA': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.set('fieldImages', {'NOME': 'TextEdit', 'T_EXPLO': 'TextEdit', 'AREA': 'TextEdit', 'UTIL_AREA': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.set('fieldImages', {'NOME': 'TextEdit', 'T_EXPLO': 'TextEdit', 'AREA': 'TextEdit', 'UTIL_AREA': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.set('fieldImages', {'NOME': 'TextEdit', 'T_EXPLO': 'TextEdit', 'AREA': 'TextEdit', 'UTIL_AREA': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.set('fieldImages', {'NOME': 'TextEdit', 'T_CESSAO': 'TextEdit', 'RESPONS': 'TextEdit', 'AREA': 'TextEdit', 'D_INICIO': 'DateTime', 'D_TERM': 'DateTime', 'A_DESENV': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.set('fieldImages', {'NOME': 'TextEdit', 'T_CESSAO': 'TextEdit', 'RESPONS': 'TextEdit', 'AREA': 'TextEdit', 'D_INICIO': 'DateTime', 'D_TERM': 'DateTime', 'A_DESENV': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.set('fieldImages', {'NOME': 'TextEdit', 'T_CESSAO': 'TextEdit', 'RESPONS': 'TextEdit', 'AREA': 'TextEdit', 'D_INICIO': 'DateTime', 'D_TERM': 'DateTime', 'A_DESENV': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.set('fieldImages', {'NOME': 'TextEdit', 'T_CESSAO': 'TextEdit', 'RESPONS': 'TextEdit', 'AREA': 'TextEdit', 'D_INICIO': 'DateTime', 'D_TERM': 'DateTime', 'A_DESENV': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_AcostagemLongoPrazo_40.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_41.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_42.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_43.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_44.set('fieldImages', {'T__Instal_': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_45.set('fieldImages', {'T__Instal_': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_46.set('fieldImages', {'T__Instal_': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_47.set('fieldImages', {'T__Instal_': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.set('fieldImages', {'NOME': 'TextEdit', 'AREA': 'TextEdit', 'PERFIL': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.set('fieldImages', {'NOME': 'TextEdit', 'AREA': 'TextEdit', 'PERFIL': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.set('fieldImages', {'NOME': 'TextEdit', 'AREA': 'TextEdit', 'PERFIL': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.set('fieldImages', {'NOME': 'TextEdit', 'AREA': 'TextEdit', 'PERFIL': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52.set('fieldImages', {'ARREND': 'TextEdit', 'NO_CONT': 'TextEdit', 'D_INICIO': 'DateTime', 'D_TERM': 'DateTime', 'P_PRORROG': 'TextEdit', 'PERFIL': 'TextEdit', 'AREA': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53.set('fieldImages', {'ARREND': 'TextEdit', 'NO_CONT': 'TextEdit', 'D_INICIO': 'DateTime', 'D_TERM': 'DateTime', 'P_PRORROG': 'TextEdit', 'PERFIL': 'TextEdit', 'AREA': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54.set('fieldImages', {'ARREND': 'TextEdit', 'NO_CONT': 'TextEdit', 'D_INICIO': 'DateTime', 'D_TERM': 'DateTime', 'P_PRORROG': 'TextEdit', 'PERFIL': 'TextEdit', 'AREA': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55.set('fieldImages', {'ARREND': 'TextEdit', 'NO_CONT': 'TextEdit', 'D_INICIO': 'DateTime', 'D_TERM': 'DateTime', 'P_PRORROG': 'TextEdit', 'PERFIL': 'TextEdit', 'AREA': 'TextEdit', });
lyr_NoAplicvel_56.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_NoDefinido_57.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelSoldo_58.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelLquidoGasoso_59.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelLquido_60.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Continers_61.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaConteinerizada_62.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeralConteinerizada_63.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeral_64.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Carga_65.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_NoDefinido_66.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_NoAplicvel_67.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelSoldo_68.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelLquidoGasoso_69.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelLquido_70.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Continers_71.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaConteinerizada_72.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeralConteinerizada_73.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeral_74.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Carga_75.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_NoDefinido_76.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_NoAplicvel_77.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelSoldo_78.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelLquidoGasoso_79.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelLquido_80.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Continers_81.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaConteinerizada_82.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeralConteinerizada_83.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeral_84.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Carga_85.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_NoAplicvel_86.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelSoldo_87.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelLquidoGasoso_88.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelLquido_89.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Continers_90.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaConteinerizada_91.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeralConteinerizada_92.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeral_93.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Carga_94.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_95.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_96.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_97.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_98.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeSuape_99.set('fieldImages', {'Name': 'TextEdit', 'Ins. Legal': 'TextEdit', });
lyr_UnidadesdeConservao_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Inst.Legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasUrbanaseRurais_2.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Inst.Legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_3.set('fieldLabels', {'N.Ident.': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_4.set('fieldLabels', {'N.Ident.': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_5.set('fieldLabels', {'N.Ident.': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_6.set('fieldLabels', {'N.Ident.': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldLabels', {'FUNCAO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldLabels', {'TRECHO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldLabels', {'TRECHO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldLabels', {'TRECHO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldLabels', {'TRECHO': 'inline label - visible with data', 'CALADO': 'inline label - visible with data', });
lyr_AcessosDutoviriosExternos_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Mat.Trans.': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'T. Duto': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosLongoPrazo_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosMdioPrazo_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosCurtoPrazo_18.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosSituaoAtual_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_20.set('fieldLabels', {'LINHA': 'inline label - visible with data', 'OPERADOR': 'inline label - visible with data', 'TRECHO': 'inline label - visible with data', 'DESCRICAO': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_21.set('fieldLabels', {'Ident_': 'inline label - visible with data', 'No_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_22.set('fieldLabels', {'Ident_': 'inline label - visible with data', 'No_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_23.set('fieldLabels', {'Ident_': 'inline label - visible with data', 'No_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_24.set('fieldLabels', {'Ident_': 'inline label - visible with data', 'No_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_25.set('fieldLabels', {'NOME': 'inline label - visible with data', 'SIGLA': 'inline label - visible with data', 'JURISDICAO': 'inline label - visible with data', });
lyr_TerminaldeUsoPrivado_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T.Produto': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldLabels', {'Inst.Legal': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T_EXPLO': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'UTIL_AREA': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T_EXPLO': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'UTIL_AREA': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T_EXPLO': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'UTIL_AREA': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T_EXPLO': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'UTIL_AREA': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T_CESSAO': 'inline label - visible with data', 'RESPONS': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'D_INICIO': 'inline label - visible with data', 'D_TERM': 'inline label - visible with data', 'A_DESENV': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T_CESSAO': 'inline label - visible with data', 'RESPONS': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'D_INICIO': 'inline label - visible with data', 'D_TERM': 'inline label - visible with data', 'A_DESENV': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T_CESSAO': 'inline label - visible with data', 'RESPONS': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'D_INICIO': 'inline label - visible with data', 'D_TERM': 'inline label - visible with data', 'A_DESENV': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T_CESSAO': 'inline label - visible with data', 'RESPONS': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'D_INICIO': 'inline label - visible with data', 'D_TERM': 'inline label - visible with data', 'A_DESENV': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_40.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_41.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_42.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_43.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_44.set('fieldLabels', {'T__Instal_': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_45.set('fieldLabels', {'T__Instal_': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_46.set('fieldLabels', {'T__Instal_': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_47.set('fieldLabels', {'T__Instal_': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.set('fieldLabels', {'NOME': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERFIL': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.set('fieldLabels', {'NOME': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERFIL': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.set('fieldLabels', {'NOME': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERFIL': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.set('fieldLabels', {'NOME': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERFIL': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_52.set('fieldLabels', {'ARREND': 'inline label - visible with data', 'NO_CONT': 'inline label - visible with data', 'D_INICIO': 'inline label - visible with data', 'D_TERM': 'inline label - visible with data', 'P_PRORROG': 'inline label - visible with data', 'PERFIL': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_53.set('fieldLabels', {'ARREND': 'inline label - visible with data', 'NO_CONT': 'inline label - visible with data', 'D_INICIO': 'inline label - visible with data', 'D_TERM': 'inline label - visible with data', 'P_PRORROG': 'inline label - visible with data', 'PERFIL': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_54.set('fieldLabels', {'ARREND': 'inline label - visible with data', 'NO_CONT': 'inline label - visible with data', 'D_INICIO': 'inline label - visible with data', 'D_TERM': 'inline label - visible with data', 'P_PRORROG': 'inline label - visible with data', 'PERFIL': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_55.set('fieldLabels', {'ARREND': 'inline label - visible with data', 'NO_CONT': 'inline label - visible with data', 'D_INICIO': 'inline label - visible with data', 'D_TERM': 'inline label - visible with data', 'P_PRORROG': 'inline label - visible with data', 'PERFIL': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_NoAplicvel_56.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_NoDefinido_57.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelSoldo_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelLquido_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Continers_61.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaConteinerizada_62.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_63.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeral_64.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Carga_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_NoDefinido_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_NoAplicvel_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelSoldo_68.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_69.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelLquido_70.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Continers_71.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaConteinerizada_72.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_73.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeral_74.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Carga_75.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_NoDefinido_76.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_NoAplicvel_77.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelSoldo_78.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_79.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelLquido_80.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Continers_81.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaConteinerizada_82.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_83.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeral_84.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Carga_85.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_NoAplicvel_86.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelSoldo_87.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_88.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelLquido_89.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Continers_90.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaConteinerizada_91.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_92.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeral_93.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Carga_94.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_95.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_96.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_97.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_98.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeSuape_99.set('fieldLabels', {'Name': 'inline label - visible with data', 'Ins. Legal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeSuape_99.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});