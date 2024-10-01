// Load country boundaries and filter for Gabon
var counties = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
var Gabon = counties.filter(ee.Filter.eq('country_na', 'Gabon'));

// Load Hansen Global Forest Change dataset (2014 or latest available)
var tree_cover_2014 = ee.Image('UMD/hansen/global_forest_change_2014');

// Select loss and gain bands
var loss = tree_cover_2014.select('loss');
var gain = tree_cover_2014.select('gain');

// Clip to Gabon's boundary for better performance
var clippedLoss = loss.clip(Gabon);
var clippedGain = gain.clip(Gabon);

// Calculate the area of loss and gain by multiplying pixel area
var areaLoss = clippedLoss.multiply(ee.Image.pixelArea());
var areaGain = clippedGain.multiply(ee.Image.pixelArea());

// Calculate area of loss in Gabon
var lossStats = areaLoss.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: Gabon.geometry(),
  scale: 30,
  maxPixels: 1e11
});
var areaLossHectares = ee.Number(lossStats.get('loss')).divide(10000);
print('Area lost in Gabon:', areaLossHectares, 'hectares');

// Calculate area of gain in Gabon
var gainStats = areaGain.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: Gabon.geometry(),
  scale: 30,
  maxPixels: 1e11
});
var areaGainHectares = ee.Number(gainStats.get('gain')).divide(10000);
print('Area gained in Gabon:', areaGainHectares, 'hectares');

// Visualize Gabon boundary, forest loss, and gain
Map.centerObject(Gabon, 7);
Map.addLayer(ee.Image().paint(Gabon, 0, 1), {palette: ['white']}, 'Gabon');
Map.addLayer(clippedLoss.updateMask(clippedLoss), {palette: ['red'], opacity: 0.5}, 'Forest Loss');
Map.addLayer(clippedGain.updateMask(clippedGain), {palette: ['green'], opacity: 0.5}, 'Forest Gain');
