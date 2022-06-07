import React, {useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import RNMapView from 'react-native-maps';
import {darkTheme, lightTheme} from '@constants/maps';
import constants from '@constants/index';
import {black, white, primary} from '@constants/colors';

interface MapViewProps {
  theme: 'dark' | 'light';
  latitude: number;
  longitude: number;
  onChangeLocation: (
    newLatitude: number,
    newLongitude: number,
    isGesture: boolean | undefined,
  ) => void;
}

const MapView = ({
  theme,
  latitude,
  longitude,
  onChangeLocation,
}: MapViewProps) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (
      latitude &&
      longitude &&
      latitude !== constants.INITIAL_LATITUDE &&
      longitude !== constants.INITIAL_LONGITUDE &&
      mapRef.current
    ) {
      mapRef.current!.animateCamera({
        center: {
          latitude: latitude,
          longitude: longitude,
        },
        pitch: constants.PITCH,
        heading: constants.HEADING,
        altitude: constants.ALTITUDE,
        zoom: constants.ZOOM,
      });
      console.log('animateCamera');
    }
  }, [latitude, longitude]);

  return (
    <View style={styles.container}>
      <RNMapView
        ref={mapRef}
        customMapStyle={theme === 'dark' ? darkTheme : lightTheme}
        initialCamera={{
          center: {
            latitude: latitude ? latitude : constants.INITIAL_LATITUDE,
            longitude: longitude ? longitude : constants.INITIAL_LONGITUDE,
          },
          heading: constants.HEADING,
          pitch: constants.PITCH,
          altitude: constants.ALTITUDE,
          zoom: constants.ZOOM,
        }}
        showsCompass={false}
        mapPadding={{bottom: 200, left: 64, right: 0, top: 0}}
        loadingEnabled
        loadingIndicatorColor={primary}
        loadingBackgroundColor={theme === 'dark' ? black : white}
        style={StyleSheet.absoluteFillObject}
        rotateEnabled={false}
        onRegionChangeComplete={(region, isGesture) => {
          onChangeLocation(
            region.latitude,
            region.longitude,
            isGesture?.isGesture,
          );
        }}
      />
    </View>
  );
};

export default MapView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
